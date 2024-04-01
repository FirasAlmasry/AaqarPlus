import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Card,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
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
    RHFAutocomplete,
    // RHFSelect,
    // RHFSwitch,
    RHFTextField,
    // RHFEditor,
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useGetCoinsQuery } from "../../../state/coins";
import { useAddComingSoonItemsMutation, useEditComingSoonItemsMutation, useGetComingSoonItemsQuery } from "../../../state/comingSoonItems";
// import { useGetServiceTypeQuery } from "../../../state/apiServiceType";

// ----------------------------------------------------------------------

ComingSoonItemsNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function ComingSoonItemsNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    let coin_id = currentService?.coin_id
    coin_id = String(coin_id)
    const [age, setAge] = useState(coin_id);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const NewComingSoonItemsSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("name en is required"),
            ar: Yup.string().required("name ar is required"),
        }),
        price_start_from: Yup.string().required("description en is required"),
        trending: Yup.string().required("trending is required"),
        coin_id: Yup.string(),
        image: Yup.mixed().required("Avatar is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.name?.en || "",
                ar: currentService?.name?.ar || "",
            },
            price_start_from: currentService?.price_start_from || "",
            trending: currentService?.trending || '0',
            coin_id: age || "",
            image: currentService?.image || [],
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewComingSoonItemsSchema),
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
    const { refetch } = useGetComingSoonItemsQuery();
    const [addService] = useAddComingSoonItemsMutation()
    const [EditService] = useEditComingSoonItemsMutation()
    const onSubmit = async (data) => {
        try {
            // const data = new FormData();
            const formData = new FormData();
            formData.append("ar_name", data.name.en);
            formData.append("en_name", data.name.ar);
            formData.append("price_start_from", data.price_start_from);
            formData.append("coin_id", age);
            if (typeof data.image === 'object' && data.image instanceof File) {
                formData.append("image", data.image);
            }
            formData.append("trending", data.trending);
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditService({ formData, id: currentService.id }).unwrap()
                    :
                    await addService(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.comingSoonItems.list);
        } catch (error) {
            const errorMessage = error.data.message || 'An error occurred';
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

    const { data: coins, isCoinsLoading } = useGetCoinsQuery();
    const type = coins?.data?.data
    // [
    //     'USD',
    //     'EGP',
    //     'SAR',
    //     'AED',
    // ]
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
                        <FormControlLabel
                            labelPlacement="start"
                            control={
                                <Controller
                                    name="trending"
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
                                        untrending
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        Apply untrending
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
                            <RHFTextField name="price_start_from" label="price_start_from" />
                            <Select
                                value={age}
                                onChange={handleChange}
                                // autoWidth
                                name="coin_id"
                                label="coin_id"
                            >
                                {type?.map((res) => <MenuItem value={res?.id}>{res?.code}</MenuItem>)}
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem> */}
                            </Select>
                            {/* <select name="coin_id" >
                                {type?.map((res) =><option value={res?.id}>{res?.code}</option>)}
                            </select> */}

                            {/* <RHFAutocomplete
                                name="coin_id"
                                label="coin"
                                // multiple
                                freeSolo
                                options={type}
                                getOptionSelected={(option, value) => option.id === value}
                                getOptionLabel={(option) => option.code}
                                ChipProps={{ size: 'small' }}
                            /> */}

                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create ComingSoonItems" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
