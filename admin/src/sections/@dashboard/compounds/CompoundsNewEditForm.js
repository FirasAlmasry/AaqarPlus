import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { useAddCompoundsMutation, useEditCompoundsMutation, useGetCompoundsQuery } from "../../../state/compounds";
import { useGetDevelopersQuery } from "../../../state/developers";
import { useGetCoinsQuery } from "../../../state/coins";
import { useGetAttachedsQuery } from "../../../state/facilities";
import { useTheme } from "@emotion/react";



// ----------------------------------------------------------------------

CompoundsNewEditForm.propTypes = {
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
export default function CompoundsNewEditForm({ isEdit = false, currentService }) {
    const theme = useTheme();
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    const [selectedIds, setSelectedIds] = useState([]);

// Devlober
    const { data: developer, isDevLoading } = useGetDevelopersQuery();
    let developer_id = currentService?.compound?.developer_id
    developer_id = String(developer_id)
    const [Devi, setDevi] = useState(developer_id);
    const dev = developer?.data?.data
    useEffect(() => {
        setDevi(developer_id);
    }, [developer_id]);
    const handleChange = (event) => {
        setDevi(event.target.value);
    };


    // Coins
    const { data: coins, isCoinsLoading } = useGetCoinsQuery();
    let coin_id = currentService?.compound?.coin_id;
    coin_id = String(coin_id);
    const [coin, setCoin] = useState(coin_id);
    const type = coins?.data?.data
    useEffect(() => {
        setCoin(coin_id);
    }, [coin_id]);
    const handleChangeCoin = (event) => {
        setCoin(event.target.value);
    };

    // Attached
    const { data: attachedData, isAttachedData } = useGetAttachedsQuery();
    const fullData = attachedData?.data?.data;
    const [Attached, setAttached] = useState([]);
    useEffect(() => {
        const defaultAttachedValue = currentService?.attachedArray?.map(item => item.id) || [];
        setAttached(defaultAttachedValue);
    }, [currentService?.attachedArray]);
    const handleChangeAtt = (event) => {
        const {
            target: { value },
        } = event;
        setAttached(value);
    };

    


    const NewCompoundsSchema = Yup.object().shape({
        name: Yup.object({
            en: Yup.string().required("name en is required"),
            ar: Yup.string().required("name ar is required"),
        }),
        address: Yup.object({
            en: Yup.string().required("address en is required"),
            ar: Yup.string().required("address ar is required"),
        }),
        description: Yup.object({
            en: Yup.string().required("description en is required"),
            ar: Yup.string().required("description ar is required"),
        }),
        payment_plans: Yup.object({
            en: Yup.string().required("payment_plans en is required"),
            ar: Yup.string().required("payment_plans ar is required"),
        }),
        phone_number: Yup.string().required("phone_number en is required"),
        whatsapp: Yup.string().required("whatsapp en is required"),
        trending: Yup.string().required("trending en is required"),
        developer_id: Yup.string(),
        url_location: Yup.string().required("url_location en is required"),
        coin_id: Yup.string(),
        image_location: Yup.mixed().required("image_location is required"),
        start_price: Yup.string().required("start_price en is required"),
        end_price: Yup.string().required("end_price en is required"),
        attached: Yup.array().required('required'),
        files: Yup.array().required('required'),
    });

    const defaultValues = useMemo(
        () => ({
            name: {
                en: currentService?.compound?.name?.en || "",
                ar: currentService?.compound?.name?.ar || "",
            },
            address: {
                en: currentService?.compound?.address?.en || "",
                ar: currentService?.compound?.address?.ar || "",
            },
            description: {
                en: currentService?.compound?.description?.en || "",
                ar: currentService?.compound?.description?.ar || "",
            },
            payment_plans: {
                en: currentService?.compound?.payment_plans?.en || "",
                ar: currentService?.compound?.payment_plans?.ar || "",
            },
            phone_number: currentService?.compound?.phone_number || '',
            whatsapp: currentService?.compound?.whatsapp || '',
            start_price: currentService?.compound?.start_price || '0',
            end_price: currentService?.compound?.end_price || '0',
            trending: currentService?.compound?.trending || '0',
            url_location: currentService?.compound?.url_location || '',
            image_location: currentService?.compound?.image_location || [],
            developer_id: Devi || '',
            coin_id: coin || "",
            attached: Attached || [],
            files: currentService?.compound?.images || [],
        }),


        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentService]
    );
    const formatNumber = (number) => {
        // تحويل الرقم إلى سلسلة نصية وتنسيقه بواسطة RegExp
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const methods = useForm({
        resolver: yupResolver(NewCompoundsSchema),
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
    const { refetch } = useGetCompoundsQuery();
    const [addCompound] = useAddCompoundsMutation()
    const [EditCompound] = useEditCompoundsMutation()

    const onSubmit = async (data) => {
        try {
            // تحويل القيمة من نص إلى رقم
            const startPrice = parseFloat(data.start_price.replace(/,/g, ''));
            const endPrice = parseFloat(data.end_price.replace(/,/g, ''));
            // const data = new FormData();
            const formData = new FormData();
            formData.append("ar_name", data.name.ar);
            formData.append("en_name", data.name.en);
            formData.append("ar_address", data.address.ar);
            formData.append("en_address", data.address.en);
            formData.append("ar_description", data.description.ar);
            formData.append("en_description", data.description.en);
            formData.append("ar_payment_plans", data.payment_plans.ar);
            formData.append("en_payment_plans", data.payment_plans.en);
            formData.append("phone_number", data.phone_number);
            formData.append("whatsapp", data.whatsapp);
            formData.append("start_price", startPrice);
            formData.append("end_price", endPrice);
            formData.append("trending", data.trending);
            formData.append("url_location", data.url_location);
            formData.append("developer_id", Devi);
            formData.append("coin_id", coin);
            Attached?.map((res) => formData.append("attached[]", res));
            if (typeof data.image_location === 'object' && data.image_location instanceof File) {
                formData.append("image_location", data.image_location);
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
                    await EditCompound({ formData, id: currentService.compound.id }).unwrap()
                    :
                    await addCompound(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.compounds.list);
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
                setValue("image_location", newFile, { shouldValidate: true });
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
                            <Stack spacing={1}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                    Images
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
                        <Box sx={{ mb: 5 }}>
                            <RHFUploadAvatar
                                name="image_location"
                                maxSize={3145728}
                                onDrop={handleDrop}
                                label="Image Location"
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
                                        image_location<br />
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
                            <RHFTextField name="name.ar" label="Name ar" />
                            <RHFTextField name="name.en" label="Name en" />
                            <RHFTextField name="address.ar" label="Address ar" />
                            <RHFTextField name="address.en" label="Address en" />
                            <RHFTextField name="phone_number" label="Phone Number" />
                            <RHFTextField name="whatsapp" label="Whatsapp" />
                            <RHFTextField
                                name="start_price"
                                label="Start price"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                    const formattedValue = formatNumber(value.replace(/,/g, ''));
                                    setValue('start_price', formattedValue, { shouldValidate: true });
                                }}
                            />

                            <RHFTextField
                                name="end_price"
                                label="End price"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    // تنسيق القيمة عند التغيير وتحديثها في الحالة
                                    const formattedValue = formatNumber(value.replace(/,/g, ''));
                                    setValue('end_price', formattedValue, { shouldValidate: true });
                                }}
                            /> 
                            <Box >
                                <InputLabel id="Dev">Developer</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="Dev"
                                    value={Devi}
                                    onChange={handleChange}
                                    name="developer_id"
                                >
                                    {dev?.map((res) => <MenuItem value={res?.id}>{res?.name.ar}</MenuItem>)}
                                </Select>
                            </Box>
                            <Box >
                                <InputLabel id="coin">Currency</InputLabel>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="coin"
                                    value={coin}
                                    onChange={handleChangeCoin}
                                    name="coin_id"
                                >
                                    {type?.map((res) => <MenuItem value={res?.id}>{res?.code}</MenuItem>)}
                                </Select>
                            </Box>
                            <Box>
                                <InputLabel id="demo-multiple-chip-label">Facilities</InputLabel>
                                <Select
                                sx={{ width:'100%' }}
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
                            </Box>
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
                                    Arabic Payment Plans
                                </Typography>

                                <RHFEditor simple name="payment_plans.ar" />
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
                                    English Payment Plans
                                </Typography>

                                <RHFEditor simple name="payment_plans.en" />
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
                                    I Fram {`<Embed Location >`}
                                </Typography>

                                <RHFEditor simple name="url_location" />
                            </Stack>
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Compound" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
