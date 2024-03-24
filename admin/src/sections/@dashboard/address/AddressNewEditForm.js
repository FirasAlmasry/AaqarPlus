import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Card,
    Grid,
    Stack,
    // Switch,
    Typography,
    // FormControlLabel,
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
    // RHFSelect,
    // RHFSwitch,
    RHFTextField,
    RHFEditor,
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useAddServicesMutation, useEditServicesMutation } from "../../../state/apiService";
// import { useGetServiceTypeQuery } from "../../../state/apiServiceType";

// ----------------------------------------------------------------------

AddressNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function AddressNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewAddressSchema = Yup.object().shape({
        title: Yup.object({
            en: Yup.string().required("title en is required"),
            ar: Yup.string().required("title ar is required"),
        }),
        description: Yup.object({
            en: Yup.string().required("description en is required"),
            ar: Yup.string().required("description ar is required"),
        }),
        // type: Yup.object({
        //     en: Yup.string().required("type en is required"),
        //     ar: Yup.string().required("type ar is required"),
        // }),

        // type: Yup.string().required("type en is required"),

        imageUrl: Yup.mixed().required("Avatar is required"),
    });

    const defaultValues = useMemo(
        () => ({
            title: {
                en: currentService?.title?.en || "",
                ar: currentService?.title?.ar || "",
            },
            description: {
                en: currentService?.description?.en || "",
                ar: currentService?.description?.ar || "",
            },
            // type: {
            //     en: currentService?.description?.en || "",
            //     ar: currentService?.description?.ar || "",
            // },
            // type: currentService?.type || "",
            imageUrl: currentService?.imageUrl || null,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewAddressSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        // control,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    useEffect(() => {
        if (isEdit && currentService) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentService]);
    // const { data, isServiseLoading } = useGetServiceTypeQuery({ page: 1, limit: 999999 });
    const [addService] = useAddServicesMutation()
    const [EditService] = useEditServicesMutation()
    const onSubmit = async (data) => {
        console.log(data);
        try {
            // const data = new FormData();
            const formData = new FormData();
            formData.append("title[en]", data.title.en);
            formData.append("title[ar]", data.title.ar);
            // formData.append("type[en]", data.type.en);
            // formData.append("type[ar]", data.type.ar);
            // formData.append("type", data.type);
            formData.append("description[en]", data.description.en);
            formData.append("description[ar]", data.description.ar);
            formData.append("imageUrl", data.imageUrl);
            console.log("🚀 ~ file: CourseNewEditForm.js:119 ~ onSubmit ~ data:", formData)
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditService({ formData, id: currentService._id }).unwrap()
                    :
                    await addService(formData).unwrap()
            }
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.address.list);
            console.log("DATA", data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("imageUrl", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    // const TYPE_OPTION = data?.serviseTypes
    // console.log("🚀 ~ file: ServiceNewEditForm.js:149 ~ ServiceNewEditForm ~ TYPE_OPTION:", TYPE_OPTION)
    // data
    // console.log("🚀 ~ file: ServiceNewEditForm.js:141 ~ ServiceNewEditForm ~ TYPE_OPTION:", TYPE_OPTION)
    // [
    //     {
    //         _id: "1",
    //         title: {
    //             ar: "ar",
    //             en: "en",
    //         },
    //     },
    // ];

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ pt: 10, pb: 5, px: 3 }}>
                        {isEdit && (
                            <Label
                                color={
                                    values.status === "active"
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
                            <RHFUploadAvatar
                                name="imageUrl"
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
                            />
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
                                sm: "repeat(2, 1fr)",
                            }}
                            alignItems={"center"}
                        >
                            <RHFTextField name="title.ar" label="Title ar" />
                            <RHFTextField name="title.en" label="Title en" />
                            {/* <RHFSelect native name="type.ar" label="Type Ar">
                                <option />
                                {TYPE_OPTION?.map((type) => (
                                    <option
                                        key={type._id}
                                        value={type.title.ar}
                                    >
                                        {type.title.ar}
                                    </option>
                                ))}
                            </RHFSelect>
                            <RHFSelect native name="type.en" label="Type En">
                                <option />
                                {TYPE_OPTION?.map((type) => (
                                    <option
                                        key={type._id}
                                        value={type.title.en}
                                    >
                                        {type.title.en}
                                    </option>
                                ))}
                            </RHFSelect> */}
                        </Box>
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
                                    Description Arabic
                                </Typography>

                                <RHFEditor simple name="description.ar" />
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
                                    Description English
                                </Typography>

                                <RHFEditor simple name="description.en" />
                            </Stack>
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Address" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
