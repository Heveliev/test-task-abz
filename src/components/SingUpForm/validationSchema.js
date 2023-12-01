import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name'),
    phone: Yup.string().required('Enter your phone number'),
    email: Yup.string().email('Incorrect email').required('Enter email'),
    position: Yup.string().required('Select position'),
});