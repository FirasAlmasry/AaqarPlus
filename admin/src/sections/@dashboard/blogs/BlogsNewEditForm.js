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
    Stack,
    Typography,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import Label from "../../../components/label";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {
    RHFTextField,
    RHFEditor,
    RHFUpload,
} from "../../../components/hook-form";
import { useAddBlogsMutation, useEditBlogsMutation, useGetBlogsQuery } from "../../../state/blog";

// ----------------------------------------------------------------------

BlogsNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentBlogs: PropTypes.object,
};

export default function BlogsNewEditForm({ isEdit = false, currentBlogs }) {
    const [selectedIds, setSelectedIds] = useState([]);
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewBlogsSchema = Yup.object().shape({
        ar_name: Yup.string().required('required'),
        en_name: Yup.string().required('required'),
        ar_small_text: Yup.string().required('required'),
        en_small_text: Yup.string().required('required'),
        ar_large_text: Yup.string().required('required'),
        en_large_text: Yup.string().required('required'),
        images: Yup.array().min(0, 'Images is required'),
        // mixed()
    });

    const defaultValues = useMemo(
        () => ({
            ar_name: currentBlogs?.name?.en || "",
            en_name: currentBlogs?.name?.ar || "",
            ar_small_text: currentBlogs?.small_text?.en || "",
            en_small_text: currentBlogs?.small_text?.ar || "",
            ar_large_text:  currentBlogs?.large_text?.en || "",
            en_large_text:  currentBlogs?.large_text?.ar || "",
            images:  currentBlogs?.images || [],
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentBlogs]
        );
    const methods = useForm({
        resolver: yupResolver(NewBlogsSchema),
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
        if (isEdit && currentBlogs) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentBlogs]);
    const { refetch } = useGetBlogsQuery();
    const [addBlogs] = useAddBlogsMutation()
    const [EditBlogs] = useEditBlogsMutation()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("ar_name", data.ar_name);
            formData.append("en_name", data.en_name);
            formData.append("ar_small_text", data.ar_small_text);
            formData.append("en_small_text", data.en_small_text);
            formData.append("ar_large_text", data.ar_large_text);
            formData.append("en_large_text", data.en_large_text);
            data.images?.map((img) => {
                if (typeof img === 'object' && img instanceof File) {
                    formData.append("images[]", img)
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
                    await EditBlogs({ formData, id: currentBlogs.id }).unwrap()
                    :
                    await addBlogs(formData).unwrap()
            }
            reset();
            refetch()
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.blogs.list);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const files = values.images || [];

            const newFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            setValue('images', [...files, ...newFiles], { shouldValidate: true });
        },
        [setValue, values.images]
    );

    const handleRemoveFile = (inputFile) => {
        const filtered = values.images && values.images?.filter((file) => {
            if (typeof file === 'object' && file instanceof File) {
                return file !== inputFile
            }
            return file?.id !== inputFile?.id
        })
        setSelectedIds(prevIds => [...prevIds, inputFile.id]);
        setValue('images', filtered);
    };

    const handleRemoveAllFiles = () => {
        setValue('images', []);
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
                                    name="images"
                                    maxSize={3145728}
                                    onDrop={handleDrop}
                                    onRemove={handleRemoveFile}
                                    onRemoveAll={handleRemoveAllFiles}
                                    onUpload={() => console.log('ON UPLOAD')}
                                />
                            </Stack>
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
                                <RHFTextField name={"ar_name"} label="Name Ar" />
                                <RHFTextField name={"en_name"} label="Name En" />
                                <RHFTextField name={"ar_small_text"} label="Small Text ar" />
                                <RHFTextField name={"en_small_text"} label="Small Text en" />
                        </Box>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                mt: 2,
                                minHeight: 50,
                            }}>
                                <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}>
                                    Arabic Description
                                </Typography>
                                <RHFEditor simple name={"ar_large_text"} />
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                mt: 2,
                                minHeight: 50,
                            }}>
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        English Description
                                    </Typography>
                                    <RHFEditor simple name={"en_large_text"} />
                                </Stack>
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}>
                                {!isEdit ? "Create Blogs" : "Save Changes"}
                            </LoadingButton> 
                        </Stack> 
                    </Card> 
                </Grid> 
            </Grid> 
        </FormProvider> 
    );
}
