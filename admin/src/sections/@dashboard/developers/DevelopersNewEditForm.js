import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Card,
    Grid,
    Stack,
    Switch,
    Typography,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
    // InputAdornment,
} from "@mui/material";
// utils
import { fData } from "../../../utils/formatNumber";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// assets
// import { countries } from "../../../assets/data";
// components
import Label from "../../../components/label";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {
    RHFEditor,
    // RHFSelect,
    RHFSwitch,
    RHFTextField,
    RHFUpload,
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useAddDevelopersMutation, useEditDevelopersMutation, useGetDevelopersQuery } from "../../../state/developers";
import { useGetAreasQuery } from "../../../state/areas";

// ----------------------------------------------------------------------

DevelopersNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentDevelopers: PropTypes.object,
};

export default function DevelopersNewEditForm({ isEdit = false, currentDevelopers }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    const { data: areas, isCoinsLoading } = useGetAreasQuery({ currentPage: 1, limit: 1000 });
    const type = areas?.data?.data
    let area_id = currentDevelopers?.area_id
    area_id = String(area_id)
    const [age, setAge] = useState(area_id);

    useEffect(() => {
        setAge(area_id);
    }, [area_id]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const NewDevelopersSchema = Yup.object().shape({
        name: Yup.object({
            ar: Yup.string().required("name ar is required"),
            en: Yup.string().required("name en is required"),
        }),
        bio_title: Yup.object({
            ar: Yup.string().required("bio title ar is required"),
            en: Yup.string().required("bio title en is required"),
        }),
        bio_description: Yup.object({
            ar: Yup.string().required("bio description ar is required"),
            en: Yup.string().required("bio description en is required"),
        }),
        top_project_title: Yup.object({
            ar: Yup.string().required("top project title ar is required"),
            en: Yup.string().required("top project title en is required"),
        }),
        top_project_description: Yup.object({
            ar: Yup.string().required("top project description ar is required"),
            en: Yup.string().required("top project description en is required"),
        }),
        location: Yup.object({
            ar: Yup.string().required("location ar is required"),
            en: Yup.string().required("location en is required"),
        }),
        area_id: Yup.string().required('required'),
        // image: Yup.mixed().required("Avatar is required"),
        files: Yup.array().required('required'),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                ar: currentDevelopers?.name?.ar || "",
                en: currentDevelopers?.name?.en || "",
            },
            bio_title: {
                ar: currentDevelopers?.bio_title?.ar || "",
                en: currentDevelopers?.bio_title?.en || "",
            },
            bio_description: {
                ar: currentDevelopers?.bio_description?.ar || "",
                en: currentDevelopers?.bio_description?.en || "",
            },
            top_project_title: {
                ar: currentDevelopers?.top_project_title?.ar || "",
                en: currentDevelopers?.top_project_title?.en || "",
            },
            top_project_description: {
                ar: currentDevelopers?.top_project_description?.ar || "",
                en: currentDevelopers?.top_project_description?.en || "",
            },
            location: {
                ar: currentDevelopers?.location?.ar || "",
                en: currentDevelopers?.location?.en || "",
            },
            area_id: age || '',
            // image: currentDevelopers?.image || [],
            files: currentDevelopers?.images,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentDevelopers]
    );

    const methods = useForm({
        resolver: yupResolver(NewDevelopersSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    useEffect(() => {
        if (isEdit && currentDevelopers) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentDevelopers]);
    const [selectedIds, setSelectedIds] = useState([]);
    const { refetch } = useGetDevelopersQuery()
    const [editDevelopers] = useEditDevelopersMutation()
    const [addDevelopers] = useAddDevelopersMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            formData.append("ar_bio_title", data.bio_title.ar);
            formData.append("en_bio_title", data.bio_title.en);
            formData.append("ar_bio_description", data.bio_description.ar);
            formData.append("en_bio_description", data.bio_description.en);
            formData.append("ar_top_project_title", data.top_project_title.ar);
            formData.append("en_top_project_title", data.top_project_title.en);
            formData.append("ar_top_project_description", data.top_project_description.ar);
            formData.append("en_top_project_description", data.top_project_description.en);
            formData.append("ar_location", data.location.ar);
            formData.append("en_location", data.location.en);
            formData.append("area_id", age);
            // if (typeof data.image === 'object' && data.image instanceof File) {
            //     formData.append("image", data.image);
            // }
            data.files?.map((img) => {
                if (typeof img === 'object' && img instanceof File) {
                    formData.append("files[]", img)
                }
                return null;
            });
            if (selectedIds?.length) {
                selectedIds?.map((id) =>
                    formData.append("images_to_delete[]", id)
                );
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await editDevelopers({ formData, id: currentDevelopers.id }).unwrap()
                    :
                    await addDevelopers(formData).unwrap()
            }
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.developers.list);
            refetch()
        } catch (error) {
            const errorMessage = error.data.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
            console.error(error);
        }
    };
    const handleMulteDrop = useCallback(
        (acceptedFiles) => {
            const files = values.files || [];

            const newFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            setValue('files', [...files, ...newFiles], { shouldValidate: true });
        },
        [setValue, values.files]
    );

    const handleRemoveFile = (inputFile) => {
        const filtered = values.files && values.files?.filter((file) => {
            if (typeof file === 'object' && file instanceof File) {
                return file !== inputFile
            }
            return file?.id !== inputFile?.id
        })
        setSelectedIds(prevIds => [...prevIds, inputFile.id]);
        setValue('files', filtered);
    };

    const handleRemoveAllFiles = () => {
        setValue('files', []);
    };
    // const handleDrop = useCallback(
    //     (acceptedFiles) => {
    //         const file = acceptedFiles[0];

    //         const newFile = Object.assign(file, {
    //             preview: URL.createObjectURL(file),
    //         });

    //         if (file) {
    //             setValue("image", newFile, { shouldValidate: true });
    //         }
    //     },
    //     [setValue]
    // );

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ pt: 10, pb: 5, px: 3 }}>
                        {isEdit && (
                            <Label
                                color={
                                    values.status === "1"
                                        ? "success"
                                        : "error"
                                }
                                sx={{
                                    textTransform: "uppercase",
                                    position: "absolute",
                                    top: 24,
                                    right: 24,
                                }}
                            >
                                {values.status}
                            </Label>
                        )}
                        <Box sx={{ mb: 5 }}>
                            <Stack spacing={1}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                    Images
                                </Typography>
                                <RHFUpload
                                    multiple
                                    thumbnail
                                    name="files"
                                    maxSize={3145728}
                                    onDrop={handleMulteDrop}
                                    onRemove={handleRemoveFile}
                                    onRemoveAll={handleRemoveAllFiles}
                                    onUpload={() => console.log('ON UPLOAD')}
                                />
                            </Stack>
                            {/* <RHFUploadAvatar
                                name="image"
                                maxSize={3145728}
                                onDrop={handleDrop}
                                helperText={
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            mt: 2,
                                            mx: "auto",
                                            display: "block",
                                            textAlign: "center",
                                            color: "text.secondary",
                                        }}
                                    >
                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                        <br /> max size of {fData(3145728)}
                                    </Typography>
                                }
                            /> */}
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 3 }}>
                        <Box
                            rowGap={3}
                            columnGap={2}
                            display="grid"
                            gridTemplateColumns={{
                                xs: "repeat(1, 1fr)",
                                sm: "repeat(1, 1fr)",
                            }}
                            alignItems={"center"}
                        >
                            <RHFTextField name="name.ar" label="Name ar" />
                            <RHFTextField name="name.en" label="Name en" />
                            <Box> 
                                <InputLabel id="area_id">Area *</InputLabel>
                            <Select
                                sx={{ width:"100%" }}
                                value={age}
                                onChange={handleChange}
                                name="area_id"
                                label="area_id"
                            >
                                {type?.map((res) => <MenuItem value={res?.id}>{res?.name.ar}</MenuItem>)}
                            </Select>
                            </Box>
                            <RHFTextField name="bio_title.ar" label="bio ar" />
                            <RHFTextField name="bio_title.en" label="bio en" />
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        Arabic description
                                    </Typography>

                                    <RHFEditor simple name="bio_description.ar" />
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        English description
                                    </Typography>

                                    <RHFEditor simple name="bio_description.en" />
                                </Stack>
                            </Grid>
                            <RHFTextField name="top_project_title.ar" label="top project title ar" />
                            <RHFTextField name="top_project_title.en" label="top project title en" />
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        top project description Arabic
                                    </Typography>

                                    <RHFEditor simple name="top_project_description.ar" />
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        top project description English
                                    </Typography>

                                    <RHFEditor simple name="top_project_description.en" />
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        top  location Arabic
                                    </Typography>

                                    <RHFEditor simple name="location.ar" />
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    mt: 2,
                                    minHeight: 50,
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        top location English
                                    </Typography>

                                    <RHFEditor simple name="location.en" />
                                </Stack>
                            </Grid>
                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Developer" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
