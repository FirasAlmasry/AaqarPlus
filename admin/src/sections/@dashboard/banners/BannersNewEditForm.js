import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// form
import {
    useForm,
    Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Card,
    Grid,
    Stack,
    Typography,
    Switch,
    FormControlLabel,
} from "@mui/material";
// utils
import { fData } from "../../../utils/formatNumber";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import Label from "../../../components/label";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {
    RHFTextField,
    RHFEditor,
    RHFUploadAvatar,
} from "../../../components/hook-form";
// import { useForm, Controller } from "react-hook-form";


import { useAddBannersMutation, useEditBannersMutation, useGetBannersQuery } from "../../../state/banners";

// ----------------------------------------------------------------------

BannersNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function BannersNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewBannersSchema = Yup.object().shape({
        title: Yup.object({
            en: Yup.string().required("title en is required"),
            ar: Yup.string().required("title ar is required"),
        }),
        description: Yup.object({
            en: Yup.string().required("description en is required"),
            ar: Yup.string().required("description ar is required"),
        }),
        url_link: Yup.string().required("url_link en is required"),
        button_text: Yup.object({
            en: Yup.string().required("button_text en is required"),
            ar: Yup.string().required("button_text ar is required"),
        }),
        is_main: Yup.string().required("is_main is required"),
        image: Yup.mixed().required("Avatar is required"),
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
            button_text: {
                en: currentService?.button_text?.en || "",
                ar: currentService?.button_text?.ar || "",
            },
            url_link: currentService?.url_link || "",
            image: currentService?.image || null,
            is_main: currentService?.is_main || '0',
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewBannersSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
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
    const { refetch } = useGetBannersQuery();
    const [addBanners] = useAddBannersMutation()
    const [EditBanners] = useEditBannersMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("ar_title", data.title.ar);
            formData.append("en_title", data.title.en);
            formData.append("ar_description", data.description.ar);
            formData.append("en_description", data.description.en);
            formData.append("ar_button_text", data.button_text.ar);
            formData.append("en_button_text", data.button_text.en);
            formData.append("url_link", data.url_link);
            formData.append("is_main", data.is_main);
            if (typeof data.image === 'object' && data.image instanceof File) {
                formData.append("image", data.image);
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditBanners({ formData, id: currentService.id }).unwrap()
                    :
                    await addBanners(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.banners.list);
        } catch (error) {
            const errorMessage = error.data.image || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
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
                        {!isEdit &&
                            <FormControlLabel
                                labelPlacement="start"
                                control={
                                    <Controller
                                        name="is_main"
                                        control={control}
                                        render={({ field }) => (
                                            <Switch
                                                {...field}
                                                checked={
                                                    field.value !== '0'
                                                }
                                                onChange={(event) =>
                                                    field.onChange(
                                                        event.target.checked
                                                            ? '1'
                                                            : '0'
                                                    )
                                                }
                                            />
                                        )}
                                    />
                                }
                                label={
                                    <>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ mb: 0.5 }}
                                        >
                                            is main
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            Apply is main
                                        </Typography>
                                    </>
                                }
                                sx={{
                                    mx: 0,
                                    mb: 3,
                                    width: 1,
                                    justifyContent: "space-between",
                                }}
                            />
                        }
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
                            <RHFTextField name="title.ar" label="title ar" />
                            <RHFTextField name="title.en" label="title en" />
                            <RHFTextField name="button_text.ar" label="button_text ar" />
                            <RHFTextField name="button_text.en" label="button_text en" />
                            <RHFTextField name="url_link" label="url_link" />
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
                                {!isEdit ? "Create Founder" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
