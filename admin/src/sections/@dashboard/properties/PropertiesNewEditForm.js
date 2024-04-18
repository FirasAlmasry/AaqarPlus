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
    Checkbox,
    Chip,
    FormControlLabel,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
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
    // RHFSelect,
    // RHFSwitch,
    RHFTextField,
    RHFEditor,
    RHFUploadAvatar,
    RHFUpload,
} from "../../../components/hook-form";
import { useAddPropertiesMutation, useEditPropertiesMutation, useGetPropertiesQuery } from "../../../state/properties";
// import { useGetDevelopersQuery } from "../../../state/developers";
import { useGetCoinsQuery } from "../../../state/coins";
import { useGetAttachedsQuery } from "../../../state/facilities";
import { useGetPropertyTypeQuery } from "../../../state/PropertyType";
import { useGetCompoundsQuery } from "../../../state/compounds";
import { useGetFinishingQuery } from "../../../state/finishing";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

PropertiesNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentService: PropTypes.object,
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName?.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function PropertiesNewEditForm({ isEdit = false, currentService }) {
    console.log("🚀 ~ PropertiesNewEditForm ~ currentService:", currentService)
    const { enqueueSnackbar } = useSnackbar();
    const theme = useTheme();
    const [selectedIds, setSelectedIds] = useState([]);
    const navigate = useNavigate();

    // Compounds Id
    const { data: Compounds, isCompoundsLoading } = useGetCompoundsQuery();
    const CompoundsDataId = Compounds?.data?.data
    let compound_id = currentService?.property?.compound_id
    compound_id = String(compound_id)
    const [CompoundsId, setCompoundsId] = useState(compound_id);
    useEffect(() => {
        setCompoundsId(compound_id);
    }, [compound_id]);
    const handleChangeCompound = (event) => {
        setCompoundsId(event.target.value);
    };

    // FinishingId
    const { data: Finishing, isFinishingLoading } = useGetFinishingQuery();
    const FinishingDataId = Finishing?.data?.data
    let finish_id = currentService?.property?.finish_id
    finish_id = String(finish_id)
    const [FinishingId, setFinishingId] = useState(finish_id);
    useEffect(() => {
        setFinishingId(finish_id);
    }, [finish_id]);
    const handleChangeFinishing = (event) => {
        setFinishingId(event.target.value);
    };

    // Coin Id
    let coin_id = currentService?.property?.coin_id
    coin_id = String(coin_id)
    const [coin, setCoin] = useState(coin_id);
    const { data: coins, isCoinsLoading } = useGetCoinsQuery();
    const type = coins?.data?.data
    useEffect(() => {
        setCoin(coin_id);
    }, [coin_id]);
    const handleChangeCoin = (event) => {
        setCoin(event.target.value);
    };
    // PropertyType Id
    const { data: PropertyType, isPropertyTypeIdLoading } = useGetPropertyTypeQuery();
    const PropertyTypeId = PropertyType?.data?.data
    let property_type_Id = currentService?.property?.property_type_id
    property_type_Id = String(property_type_Id)
    const [TypeId, setTypeId] = useState(property_type_Id);
    useEffect(() => {
        setTypeId(property_type_Id);
    }, [property_type_Id]);
    const handleChangeType = (event) => {
        setTypeId(event.target.value);
    };

    const renderOptions = (items, parentPath = "", level = 0) => {
        if (!items) return null;

        let options = [];

        items?.forEach((item) => {
            const currentPath = parentPath
                ? `${item.name.ar}`
                : item.name.ar;

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


    // attachedDataId
    // const { data: attachedData, isAttachedData } = useGetAttachedsQuery();
    // let attached_id = currentService?.property?.attached
    // console.log("🚀 ~ PropertiesNewEditForm ~ attached_id:", attached_id)
    // const fullData = attachedData?.data?.data
    // const [Attached, setAttached] = useState([]);
    // console.log("🚀 ~ PropertiesNewEditForm ~ Attached:", Attached)
    // useEffect(() => {
    //     if (isEdit) {
    //         setAttached([attached_id]);
    //     }
    // }, [isEdit, attached_id]);
    // const handleChangeAtt = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setAttached(
    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };
    
    // Attached
    const { data: attachedData, isAttachedData } = useGetAttachedsQuery();
    const fullData = attachedData?.data?.data;
    const [Attached, setAttached] = useState([]);

    useEffect(() => {
        const defaultAttachedValue = currentService?.facilities?.map(item => item.id) || [];
        setAttached(defaultAttachedValue);
    }, [currentService?.facilities]);

    const handleChangeAtt = (event) => {
        const {
            target: { value },
        } = event;
        setAttached(value);
    };

    
    let payment_method = currentService?.property?.payment_method
    const [TargetMethod, setTargetMethod] = useState(payment_method)
    useEffect(() => {
        setTargetMethod(payment_method);
    }, [payment_method]);
    const handleChangeMethod = (event) => {
        setTargetMethod(event.target.value);
    };

    const method = [
        'cash',
        'installment',
        'mixed']


    const NewPropertiesSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("name en is required"),
            ar: Yup.string().required("name ar is required"),
        }),
        sale_type: Yup.object({
            en: Yup.string().required("sale_type en is required"),
            ar: Yup.string().required("sale_type ar is required"),
        }),
        address: Yup.object({
            en: Yup.string().required("address en is required"),
            ar: Yup.string().required("address ar is required"),
        }),
        description: Yup.object({
            en: Yup.string().required("description en is required"),
            ar: Yup.string().required("description ar is required"),
        }),
        payment_method_title: Yup.object({
            en: Yup.string().required("payment_method_title en is required"),
            ar: Yup.string().required("payment_method_title ar is required"),
        }),
        payment_plans_title: Yup.object({
            en: Yup.string().required("payment_method_title en is required"),
            ar: Yup.string().required("payment_method_title ar is required"),
        }),
        phone_number: Yup.string().required("phone_number is required"),
        whatsapp: Yup.string().required("whatsapp is required"),
        property_type_id: Yup.string(),
        house_area: Yup.string().required("house_area is required"),
        bedrooms: Yup.string().required("bedrooms is required"),
        bathrooms: Yup.string().required("bathrooms is required"),
        delivery_in: Yup.string().required("delivery_in is required"),
        trending: Yup.string().required("trending en is required"),
        is_available: Yup.string().required("is_available en is required"),
        // developer_id: Yup.string(),
        monthly_installment: Yup.number(),
        down_payment: Yup.string(),
        installment_years: Yup.string(),
        compound_id: Yup.string(),
        finish_id: Yup.string(),
        url_location: Yup.string(),
        coin_id: Yup.string(),
        payment_method: Yup.string(),
        // initial_payment: Yup.number(),
        initial_payment: Yup.string(),
        image_floor_plan: Yup.mixed(),
        master_plan: Yup.mixed(),
        start_price: Yup.string().required("start_price en is required"),
        end_price: Yup.string().required("end_price en is required"),
        attached: Yup.array(),
        files: Yup.array().required('required'),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.property?.name?.en || "",
                ar: currentService?.property?.name?.ar || "",
            },
            sale_type: {
                en: currentService?.property?.sale_type?.en || "",
                ar: currentService?.property?.sale_type?.ar || "",
            },
            address: {
                en: currentService?.property?.address?.en || "",
                ar: currentService?.property?.address?.ar || "",
            },
            description: {
                en: currentService?.property?.description?.en || "",
                ar: currentService?.property?.description?.ar || "",
            },
            payment_method_title: {
                en: currentService?.property?.payment_method_title?.en || "",
                ar: currentService?.property?.payment_method_title?.ar || "",
            },
            payment_plans_title: {
                en: currentService?.property?.payment_method_title?.en || "",
                ar: currentService?.property?.payment_method_title?.ar || "",
            },
            phone_number: currentService?.property?.phone_number || '',
            whatsapp: currentService?.property?.whatsapp || '',
            property_type_id: TypeId || '',
            house_area: currentService?.property?.house_area || '',
            start_price: currentService?.property?.start_price || '0',
            end_price: currentService?.property?.end_price || '0',
            trending: currentService?.property?.trending || '0',
            is_available: currentService?.property?.is_available || '0',
            bedrooms: currentService?.property?.bedrooms || '',
            bathrooms: currentService?.property?.bathrooms || '',
            monthly_installment: currentService?.property?.monthly_installment || '',
            installment_years: currentService?.property?.installment_years || '',
            down_payment: currentService?.property?.down_payment || '',
            delivery_in: currentService?.property?.delivery_in || '',
            url_location: currentService?.property?.url_location || '',
            image_floor_plan: currentService?.property?.image_floor_plan || [],
            master_plan: currentService?.property?.master_plan || [],
            initial_payment: currentService?.property?.initial_payment || '0',
            payment_method: TargetMethod || '',
            compound_id: CompoundsId || '',
            finish_id: FinishingId || '',
            coin_id: coin || "",
            attached: Attached || [],
            files: currentService?.property?.images || [],
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService?.property]
    );

    const methods = useForm({
        resolver: yupResolver(NewPropertiesSchema),
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
        if (isEdit && currentService?.property) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentService?.property]);
    const { refetch } = useGetPropertiesQuery();
    const [addProperties] = useAddPropertiesMutation()
    const [EditProperties] = useEditPropertiesMutation()

    const formatNumber = (number) => {
        // تحويل الرقم إلى سلسلة نصية وتنسيقه بواسطة RegExp
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const onSubmit = async (data) => {
        console.log(data);
        try {
            // تحويل القيمة من نص إلى رقم
            const startPrice = parseFloat(data.start_price.replace(/,/g, ''));
            const endPrice = parseFloat(data.end_price.replace(/,/g, ''));
            // const installmentYears = parseFloat(data.installment_years.replace(/,/g, ''));
            const initialPayment = parseFloat(data.initial_payment.replace(/,/g, ''));
            const downPayment = parseFloat(data.down_payment.replace(/,/g, ''));
            // const data = new FormData();
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            formData.append("ar_sale_type", data.sale_type.ar);
            formData.append("en_sale_type", data.sale_type.en);
            formData.append("ar_address", data.address.ar);
            formData.append("en_address", data.address.en);
            formData.append("ar_description", data.description.ar);
            formData.append("en_description", data.description.en);
            formData.append("ar_payment_method_title", data.payment_method_title.ar);
            formData.append("en_payment_method_title", data.payment_method_title.en);
            formData.append("ar_payment_plans_title", data.payment_plans_title.ar);
            formData.append("en_payment_plans_title", data.payment_plans_title.en);
            formData.append("phone_number", data.phone_number);
            formData.append("whatsapp", data.whatsapp);
            formData.append("start_price", startPrice);
            formData.append("end_price", endPrice);
            formData.append("house_area", data.house_area);
            formData.append("bedrooms", data.bedrooms);
            formData.append("bathrooms", data.bathrooms);
            formData.append("monthly_installment", data.monthly_installment);
            formData.append("installment_years", data.installment_years);
            formData.append("delivery_in", data.delivery_in);
            formData.append("trending", data.trending);
            formData.append("is_available", data.is_available);
            formData.append("url_location", data.url_location);
            formData.append("payment_method", TargetMethod);
            formData.append("initial_payment", initialPayment);
            // formData.append("initial_payment", data.initial_payment);
            formData.append("property_type_id", TypeId);
            formData.append("compound_id", CompoundsId);
            formData.append("finish_id", FinishingId);
            formData.append("down_payment", downPayment);
            formData.append("coin_id", coin);
            Attached?.map((res) => formData.append("attached[]", res));
            if (typeof data.image_floor_plan === 'object' && data.image_floor_plan instanceof File) {
                formData.append("image_floor_plan", data.image_floor_plan);
            }
            if (typeof data.master_plan === 'object' && data.master_plan instanceof File) {
                formData.append("master_plan", data.master_plan);
            }
            data.files?.map((img) => {
                if (typeof img === 'object' && img instanceof File) {
                    formData.append("files[]", img)
                }
                return null;
            });
            if (selectedIds?.length) {
                selectedIds?.map((id) =>
                    formData.append("images_to_delete[]", id)
                );
            }
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit ?
                    await EditProperties({ formData, id: currentService?.property.id }).unwrap()
                    :
                    await addProperties(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.properties.list);
        } catch (error) {
            console.error(error);
            const errorMessage = error.data.message || 'An error occurred';
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
                setValue("image_floor_plan", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    const handleDropMaster = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("master_plan", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    const handleMulteDrop = useCallback(
        (acceptedFiles) => {
            const files = values.files || [];

            const newFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            setValue('files', [...files, ...newFiles], { shouldValidate: true });
        },
        [setValue, values.files]
    );

    const handleRemoveFile = (inputFile) => {
        const filtered = values.files && values.files?.filter((file) => {
            if (typeof file === 'object' && file instanceof File) {
                return file !== inputFile
            }
            return file?.id !== inputFile?.id
        })
        setSelectedIds(prevIds => [...prevIds, inputFile.id]);
        setValue('files', filtered);
    };

    const handleRemoveAllFiles = () => {
        setValue('files', []);
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
                            <RHFTextField name="name.ar" label="Name ar *" />
                            <RHFTextField name="name.en" label="Name en *" />
                            <RHFTextField name="address.ar" label="Address ar *" />
                            <RHFTextField name="address.en" label="Address en *" />
                            <RHFTextField name="phone_number" label="Phone Number *" />
                            <RHFTextField name="whatsapp" label="Whatsapp *" />
                            <RHFTextField
                                name="start_price"
                                label="Start price *"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                    const formattedValue = formatNumber(value.replace(/,/g, ''));
                                    setValue('start_price', formattedValue, { shouldValidate: true });
                                }}
                            />

                            <RHFTextField
                                name="end_price"
                                label="End price *"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                    const formattedValue = formatNumber(value.replace(/,/g, ''));
                                    setValue('end_price', formattedValue, { shouldValidate: true });
                                }}
                            /> 
                            {/* coins */}
                            <Box >
                                <InputLabel id="coin">Currency *</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="coin"
                                    value={coin}
                                    onChange={handleChangeCoin}
                                    // autoWidth
                                    name="coin_id"
                                >
                                    {type?.map((res) => <MenuItem value={res?.id}>{res?.code}</MenuItem>)}
                                </Select>
                            </Box>
                            {/* {PropertyTypeId } */}
                            <Box>
                                <InputLabel id="PropType">Property Type *</InputLabel>
                                <Select value={TypeId}
                                    sx={{ width: '100%' }}
                                    onChange={handleChangeType} id="PropType" name="parent_id" >
                                    {renderOptions(PropertyTypeId)}
                                </Select>
                            </Box>
                            <RHFTextField name="house_area" label="House Area *" />
                            <RHFTextField name="bedrooms" label="Bedrooms *" />
                            <RHFTextField name="bathrooms" label="Bathrooms *" />
                            <RHFTextField name="delivery_in" label="Delivery In *" />
                            {/* {compound_id } */}
                            <Box >
                                <InputLabel id="compound_id">compound *</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="compound_id"
                                    value={CompoundsId}
                                    onChange={handleChangeCompound}
                                    name="compound_id"
                                >
                                    {CompoundsDataId?.map((res) => <MenuItem value={res?.id}>{res?.name.ar}</MenuItem>)}
                                </Select>
                            </Box>
                            <RHFTextField name="sale_type.ar" label="Sale Type ar *" />
                            <RHFTextField name="sale_type.en" label="Sale Type en *" />
                            {/* {finish_id} */}
                            <Box>
                                <InputLabel id="finish_id">finish *</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="finish_id"
                                    value={FinishingId}
                                    onChange={handleChangeFinishing}
                                    name="finish_id"
                                >
                                    {FinishingDataId?.map((res) => <MenuItem value={res?.id}>{res?.name.ar}</MenuItem>)}
                                </Select>
                            </Box>
                            {/* Facilities */}
                            <Box>
                                <InputLabel id="demo-multiple-checkbox-label">Facilities *</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={Attached}
                                    onChange={handleChangeAtt}
                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected?.map((value) => (
                                                <Chip key={value} label={fullData?.find(item => item?.id === value)?.name.ar} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {fullData?.map((name) => (
                                        <MenuItem
                                            key={name?.id}
                                            value={name?.id}
                                            style={getStyles(name, Attached, theme)}
                                        >
                                            {name?.name.ar}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {/* <Select
                                    name="attached"
                                    sx={{ width: '100%' }}
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={Attached}
                                    onChange={handleChangeAtt}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    // MenuProps={MenuProps}
                                >
                                    {fullData?.map((name) => (
                                        <MenuItem key={name.id} value={name.id}>
                                            <Checkbox checked={Attached.indexOf(name.id) > -1} />
                                            <ListItemText primary={name.name.ar} />
                                        </MenuItem>
                                    ))}
                                </Select> */}
                            </Box>
                            
                            <RHFTextField name="payment_method_title.ar" label="Payment Method Title ar *" />
                            <RHFTextField name="payment_method_title.en" label="Payment Method Title en *" />
                            {/* Methods */}
                            <Box>
                                <InputLabel id="payment_method">payment method *</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="payment_method"
                                    value={TargetMethod}
                                    onChange={handleChangeMethod}
                                    name="payment_method"
                                >
                                    {method?.map((res) => <MenuItem value={res}>{res}</MenuItem>)}
                                </Select>
                            </Box>
                            {/* {TargetMethod === 'installment' && <RHFTextField name="initial_payment" label="Initial Payment" />} */}
                            {TargetMethod === 'installment' && <RHFTextField name="initial_payment" label="Initial Payment" onChange={(e) => {
                                const { value } = e.target;
                                // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                const formattedValue = formatNumber(value.replace(/,/g, ''));
                                setValue('initial_payment', formattedValue, { shouldValidate: true });
                            }} />}
                            <RHFTextField name="payment_plans_title.ar" label="Payment Plans Title ar *" />
                            <RHFTextField name="payment_plans_title.en" label="Payment Plans Title en *" />
                            <RHFTextField name="monthly_installment" label="Monthly Installment" />
                            <RHFTextField name="down_payment" label="Down Payment" onChange={(e) => {
                                const { value } = e.target;
                                // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                const formattedValue = formatNumber(value.replace(/,/g, ''));
                                setValue('down_payment', formattedValue, { shouldValidate: true });
                            }} />
                            <RHFTextField name="installment_years" label="Installment Years" />
                        </Box> 
                        {/* Desc Arabic*/}
                        <Grid item xs={12} md={12} sx={{mt: 2, minHeight: 50,}}>
                            <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}>
                                    Arabic Description  *
                                </Typography>
                                <RHFEditor simple name="description.ar" />
                            </Stack>
                        </Grid>
                        {/* Desc English */}
                        <Grid item xs={12} md={12} sx={{ mt: 2, minHeight: 50, }}>
                            <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}>
                                    English Description  *
                                </Typography>
                                <RHFEditor simple name="description.en" />
                            </Stack>
                        </Grid>
                        {/* I Fream */}
                        <Grid item xs={12} md={12} sx={{ mt: 2, minHeight: 50, }}>
                            <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    I Fram {`<Embed Location >`} 
                                </Typography>

                                <RHFEditor simple name="url_location" />
                            </Stack>
                        </Grid>
                    </Card> 
                </Grid> 
                <Grid item xs={12} md={12}>
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
                        {/* files */}
                        <Box sx={{ mb: 5 }}>
                            <Stack spacing={1}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                    Files *
                                </Typography>
                                <RHFUpload
                                    multiple
                                    thumbnail
                                    name="files"
                                    maxSize={3145728}
                                    onDrop={handleMulteDrop}
                                    onRemove={handleRemoveFile}
                                    onRemoveAll={handleRemoveAllFiles}
                                    onUpload={() => console.log('ON UPLOAD')}
                                />
                            </Stack>
                        </Box>
                        <Box sx={{ display:'flex', justifyContent:'space-around', alignItems:'center' }} >
                            {/* image_floor_plan */}
                            <Box sx={{ mb: 5 }}>
                                <RHFUploadAvatar
                                    name="image_floor_plan"
                                    maxSize={3145728}
                                    onDrop={handleDrop}
                                    label="image_floor_plan"
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
                                            image_floor_plan<br />
                                            Allowed *.jpeg, *.jpg, *.png, *.gif
                                            <br /> max size of {fData(3145728)}
                                        </Typography>
                                    }
                                />
                            </Box>
                            {/* {master_plan } */}
                            <Box sx={{ mb: 5 }}>
                                <RHFUploadAvatar
                                    name="master_plan"
                                    maxSize={3145728}
                                    onDrop={handleDropMaster}
                                    label="master_plan"
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
                                            master_plan<br />
                                            Allowed *.jpeg, *.jpg, *.png, *.gif
                                            <br /> max size of {fData(3145728)}
                                        </Typography>
                                    }
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }} >
                            {/* trending */}
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
                                            Trending
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            Apply Trending 
                                        </Typography>
                                    </>
                                }
                                sx={{
                                    mx: 0,
                                    mb: 3,
                                    width: 1,
                                    justifyContent: "center",
                                }}/>
                            {/* is_available */}
                            <FormControlLabel
                                labelPlacement="start"
                                control={
                                    <Controller
                                        name="is_available"
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
                                            Available
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            Apply Available
                                        </Typography>
                                    </>
                                }
                                sx={{
                                    mx: 0,
                                    mb: 3,
                                    width: 1,
                                    justifyContent: "center",
                                }}/>
                        </Box>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Property" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
                
            </Grid>
        </FormProvider>
    );
}
