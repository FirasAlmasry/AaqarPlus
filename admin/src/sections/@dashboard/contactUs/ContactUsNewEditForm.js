import PropTypes from "prop-types";
import * as Yup from "yup";
import {  useEffect, useMemo } from "react";
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
    // FormControlLabel,
    // InputAdornment,
} from "@mui/material";
// utils
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {RHFTextField} from "../../../components/hook-form";
import { useEditContactUsMutation, useGetContactUsQuery } from "../../../state/contactUs";

// ----------------------------------------------------------------------

ContactUsNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function ContactUsNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const { data, refetch } = useGetContactUsQuery();
    const defaultValues = useMemo(
        () => ({
            phone_number: data?.data?.phone_number || "",
            email: data?.data?.email || "",
            working_hours: data?.data?.working_hours || "",
            facebook: data?.data?.facebook || "",
            whatsapp: data?.data?.whatsapp || "",
            instagram: data?.data?.instagram || "",
            
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        // resolver: yupResolver(NewContactUsSchema),
        defaultValues,
    });

    const {
        reset,
        // watch,
        // control,
        // setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    // const values = watch();

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
    // const [addService] = useAddServicesMutation()
    const [EditService] = useEditContactUsMutation()
    const onSubmit = async (data) => {
        try {
            // تحويل البيانات إلى المصفوفة المناسبة
            const postData = Object.entries(data).map(([info, info_value]) => ({
                info,
                info_value
            }));
            // إرسال البيانات
            await EditService(postData).unwrap();
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.contactUs.list);
        } catch (error) {
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
                            <RHFTextField name="phone_number" label="Phone Number" />
                            <RHFTextField name="email" label="email" />
                            <RHFTextField name="working_hours" label="Working Hours" />
                            <RHFTextField name="facebook" label="Facebook" />
                            <RHFTextField name="whatsapp" label="Whatsapp" />
                            <RHFTextField name="instagram" label="Instagram" />
                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create ContactUs" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
