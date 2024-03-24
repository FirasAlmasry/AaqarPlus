import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useSnackbar } from "../../components/snackbar";
import { useResetPassMutation } from '../../state/ApiAuth';

// ----------------------------------------------------------------------

export default function AuthResetPasswordForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: 'admin@alreada.com' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const [resPass] = useResetPassMutation()
  const onSubmit = async (data) => {
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   sessionStorage.setItem('email-recovery', data.email);
    //   navigate(PATH_AUTH.newPassword);
    // } catch (error) {
    //   console.error(error);
    // }
    try {

      let passWord = await resPass(data).unwrap()
      console.log("🚀 ~ file: AuthResetPasswordForm.js:45 ~ onSubmit ~ passWord:", passWord)
      sessionStorage.setItem('email-recovery', data.email);
      enqueueSnackbar("Send Message to Email");
      navigate(PATH_AUTH.newPassword);
    } catch (error) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}
