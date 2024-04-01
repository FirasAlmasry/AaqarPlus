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
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useAddAttachedsMutation, useEditAttachedsMutation, useGetAttachedsQuery } from "../../../state/facilities";
// import { useGetServiceTypeQuery } from "../../../state/apiServiceType";

// ----------------------------------------------------------------------

AttachesNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function AttachesNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewAttachesSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("title en is required"),
            ar: Yup.string().required("title ar is required"),
        }),
        icon: Yup.mixed()
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.name?.en || "",
                ar: currentService?.name?.ar || "",
            },
            icon: currentService?.icon || [],
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewAttachesSchema),
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
    const { refetch } = useGetAttachedsQuery();
    const [addAttacheds] = useAddAttachedsMutation()
    const [EditAttacheds] = useEditAttachedsMutation()
    const onSubmit = async (data) => {
        try {
            // const data = new FormData();
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            if (typeof data.icon === 'object' && data.icon instanceof File) {
                formData.append("icon", data.icon);
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditAttacheds({ formData, id: currentService.id }).unwrap()
                    :
                    await addAttacheds(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.attaches.list);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
        }
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("icon", newFile, { shouldValidate: true });
            } else { setValue("icon", null); }
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
                                name="icon"
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
                            <RHFTextField name="name.ar" label="name ar" />
                            <RHFTextField name="name.en" label="name en" />
                        </Box>
                        
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Facilities" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
