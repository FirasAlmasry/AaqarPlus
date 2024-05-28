import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
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
    MenuItem,
    Select,
    Stack,
    Typography,
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
    RHFUploadAvatar,
} from "../../../components/hook-form";
import { useAddPropertyTypeMutation, useEditPropertyTypeMutation, useGetPropertyTypeQuery } from "../../../state/PropertyType";
import React from "react";
// ----------------------------------------------------------------------

PropertyTypeNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};


export default function PropertyTypeNewEditForm({ isEdit = false, currentService }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    const { data } = useGetPropertyTypeQuery();

    const Newtype = data?.data?.data

    const NewPropertyTypeSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("title en is required"),
            ar: Yup.string().required("title ar is required"),
        }),
        parent_id: Yup.string(),
        icon: Yup.mixed()
    });

    // PropertyType Id
    let parent_id = currentService?.parent_id
    parent_id = String(parent_id)
    const [TypeId, setTypeId] = useState(parent_id);

    useEffect(() => {
        setTypeId(TypeId);
    }, [TypeId]);

    const handleChangeType = (event) => {
        const selectedValue = event.target.value;
        const newValue = selectedValue === 'main' ? '' : selectedValue;
        setTypeId(newValue);
    };


    useEffect(() => {
        if (currentService?.parent_id === null) {
            setTypeId('');
        } else {
            setTypeId(parent_id);
        }
    }, [currentService, parent_id]);

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.name?.en || "",
                ar: currentService?.name?.ar || "",
            },
            icon: currentService?.icon || [],
            parent_id: TypeId || 'main',
        }),
        [currentService, TypeId]
    );

    const methods = useForm({
        resolver: yupResolver(NewPropertyTypeSchema),
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
    const { refetch } = useGetPropertyTypeQuery();
    const [addProperty] = useAddPropertyTypeMutation()
    const [EditProperty] = useEditPropertyTypeMutation()
    const onSubmit = async (data) => {
        try {
            // const data = new FormData();
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            formData.append("parent_id", TypeId);
            if (typeof data.icon === 'object' && data.icon instanceof File) {
                formData.append("icon", data.icon);
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditProperty({ formData, id: currentService.id }).unwrap()
                    :
                    await addProperty(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.propertyType.list);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
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
                setValue("icon", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );
    
    const renderOptions = (items, parentPath = "", level = 0) => {
        if (!items) return null;

        let options = [];

        items?.forEach((item) => {
            const currentPath = parentPath
                ? `${item?.name?.en}`
                : item?.name?.en;

            const indentation = level * 10; // Adjust the factor (10 pixels) here

            options.push(
                <MenuItem key={item.id} value={item.id}>
                    <div style={{ marginLeft: `${indentation}px` }}>
                        {currentPath}
                    </div>
                </MenuItem>
            );

            if (item.children && item.children.length > 0) {
                // Render options for children recursively, incrementing the level
                options.push(...renderOptions(item.children, currentPath, level + 1));
            }
        });

        return options;
    };

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
                            </Label>)}

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
                            alignItems={"center"}>
                            <RHFTextField name="name.ar" label="name ar" />
                            <RHFTextField name="name.en" label="name en" />
                            <Select value={TypeId === '' ? 'main' : TypeId}
                                sx={{ width: '100%' }}
                                onChange={handleChangeType}
                                id="PropType"
                                name="parent_id"
                            >
                                {renderOptions(Newtype)}
                                <MenuItem key="main" value="main">Main</MenuItem>
                            </Select>
                        </Box>

                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}>
                                {!isEdit ? "Create PropertyType" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
