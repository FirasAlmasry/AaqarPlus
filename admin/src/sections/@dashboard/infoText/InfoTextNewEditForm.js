import PropTypes from "prop-types";
import * as Yup from "yup";
import { useEffect, useMemo } from "react";
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
    Typography,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {
    RHFEditor,
    RHFTextField,
} from "../../../components/hook-form";
import { useEditInfoTextMutation, useGetInfoTextIdQuery } from "../../../state/info";
// import { useGetServiceTypeQuery } from "../../../state/apiServiceType";

// ----------------------------------------------------------------------

InfoTextNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

export default function InfoTextNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewInfoTextSchema = Yup.object().shape({
        info_value: Yup.object({
            en: Yup.string().required("title en is required"),
            ar: Yup.string().required("title ar is required"),
        })
    });

    const defaultValues = useMemo(
        () => ({
            info_value: {
                en: currentService?.data?.info_value?.en || "",
                ar: currentService?.data?.info_value?.ar || "",
            },
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );

    const methods = useForm({
        resolver: yupResolver(NewInfoTextSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        // control,
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
    const { refetch: design } = useGetInfoTextIdQuery('design');
    const { refetch: description_contact } = useGetInfoTextIdQuery('description_contact');
    const { refetch: about_us } = useGetInfoTextIdQuery('about_us');
    const { refetch: address } = useGetInfoTextIdQuery('address');
    const { refetch: description_buyer } = useGetInfoTextIdQuery('description_buyer');
    const { refetch: description_seller } = useGetInfoTextIdQuery('description_seller');
    const { refetch: terms_and_conditions } = useGetInfoTextIdQuery('terms_and_conditions');
    const { refetch: acceptable_use } = useGetInfoTextIdQuery('acceptable_use');
    const { refetch: automated_queries } = useGetInfoTextIdQuery('automated_queries');
    const { refetch: our_products } = useGetInfoTextIdQuery('our_products');
    const { refetch: description_launching } = useGetInfoTextIdQuery('description_launching');
    const [EditService] = useEditInfoTextMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("info", currentService?.data?.info);
            formData.append("en_info_value", data.info_value.en);
            formData.append("ar_info_value", data.info_value.ar);
            // eslint-disable-next-line no-lone-blocks
                    await EditService(formData).unwrap()
            reset();
            design()
            description_contact()
            about_us()
            address()
            description_buyer()
            description_seller()
            terms_and_conditions()
            acceptable_use()
            automated_queries()
            our_products()
            description_launching()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.infoText.list);
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
                                        Ar Page Content
                                    </Typography>

                                    <RHFEditor simple name="info_value.ar" />
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
                                        En Page Content
                                    </Typography>

                                    <RHFEditor simple name="info_value.en" />
                                </Stack>
                            </Grid>
                            {/* <RHFTextField name="info_value.ar" label="Info Value ar" />
                            <RHFTextField name="info_value.en" label="Info Value en" /> */}
                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create InfoText" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
