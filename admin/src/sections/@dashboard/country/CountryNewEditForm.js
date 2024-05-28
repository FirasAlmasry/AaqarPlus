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
import { useAddCountryMutation, useEditCountryMutation, useGetCountryQuery } from "../../../state/Country";

// ----------------------------------------------------------------------

CountryNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentCountry: PropTypes.object,
};

export default function CountryNewEditForm({ isEdit = false, currentCountry }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    
    const NewCountrySchema = Yup.object().shape({
        name: Yup.object({
            ar: Yup.string().required("name ar is required"),
            en: Yup.string().required("name en is required"),
        }),
        // image: Yup.mixed().required("Avatar is required"),
        // trending: Yup.string().required("trending is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                ar: currentCountry?.name?.ar || "",
                en: currentCountry?.name?.en || "",
            }
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentCountry]
    );

    const methods = useForm({
        resolver: yupResolver(NewCountrySchema),
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
        if (isEdit && currentCountry) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentCountry]);
    const {  refetch } = useGetCountryQuery()
    const [editCountry] = useEditCountryMutation()
    const [addCountry] = useAddCountryMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await editCountry({ formData, id: currentCountry.id }).unwrap()
                    :
                    await addCountry(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.country.list);
        } catch (error) {
            const errorMessage = error.data.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
            console.error(error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
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
                            <RHFTextField name="name.ar" label="Ar" />
                            <RHFTextField name="name.en" label="En" />
                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create " : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
