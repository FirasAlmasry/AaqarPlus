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
import { useAddFoundersMutation, useEditFoundersMutation, useGetFoundersQuery } from "../../../state/founders";
// import { useGetServiceTypeQuery } from "../../../state/apiServiceType";

// ----------------------------------------------------------------------

NewsNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function NewsNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewNewsSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("name en is required"),
            ar: Yup.string().required("name ar is required"),
        }),
        description: Yup.object({
            en: Yup.string().required("description en is required"),
            ar: Yup.string().required("description ar is required"),
        }),
        image: Yup.mixed().required("Avatar is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.name?.en || "",
                ar: currentService?.name?.ar || "",
            },
            description: {
                en: currentService?.description?.en || "",
                ar: currentService?.description?.ar || "",
            },
            image: currentService?.image || null,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewNewsSchema),
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

    const { refetch } = useGetFoundersQuery('NEWS');
    const [addNews] = useAddFoundersMutation()
    const [EditNews] = useEditFoundersMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("type", 'NEWS');
            formData.append("ar_name", data.name.en);
            formData.append("en_name", data.name.ar);
            formData.append("ar_description", data.description.en);
            formData.append("en_description", data.description.ar);
            if (typeof data.image === 'object' && data.image instanceof File) {
                formData.append("image", data.image);
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditNews({ formData, id: currentService.id }).unwrap()
                    :
                    await addNews(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.news.list);
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
                setValue("image", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

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
                            <RHFTextField name="name.ar" label="Name ar" />
                            <RHFTextField name="name.en" label="Name en" />
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
                                    Arabic Description
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
                                    English Description
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
                                {!isEdit ? "Create News" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
