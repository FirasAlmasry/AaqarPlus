import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo } from "react";
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
    RHFSwitch,
    RHFTextField,
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useAddFinishingMutation, useEditFinishingMutation, useGetFinishingQuery } from "../../../state/finishing";
// ----------------------------------------------------------------------

FinishingNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentFinishing: PropTypes.object,
};

export default function FinishingNewEditForm({ isEdit = false, currentFinishing }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    
    const NewFinishingSchema = Yup.object().shape({
        name: Yup.object({
            ar: Yup.string().required("name ar is required"),
            en: Yup.string().required("name en is required"),
        }),
        // image: Yup.mixed().required("Avatar is required"),
        is_active: Yup.string().required("is_active is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                ar: currentFinishing?.name?.ar || "",
                en: currentFinishing?.name?.en || "",
            },
            is_active: currentFinishing?.is_active || '0',
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentFinishing]
    );

    const methods = useForm({
        resolver: yupResolver(NewFinishingSchema),
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
        if (isEdit && currentFinishing) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentFinishing]);
    const { refetch } = useGetFinishingQuery();
    const [editFinishing] = useEditFinishingMutation()
    const [addFinishing] = useAddFinishingMutation()
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            // if (typeof data.image === 'object' && data.image instanceof File) {
            //     formData.append("image", data.image);
            // }
            formData.append("is_active", data.is_active);
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await editFinishing({ formData, id: currentFinishing.id }).unwrap()
                    :
                    await addFinishing(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.finishing.list);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
            console.error(error);
        }
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
                        {/* <Box sx={{ mb: 5 }}>
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
                        </Box> */}
                            <FormControlLabel
                                labelPlacement="start"
                                control={
                                    <Controller
                                        name="is_active"
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
                                            active
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            Apply active 
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
                                {!isEdit ? "Create Finishing" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
