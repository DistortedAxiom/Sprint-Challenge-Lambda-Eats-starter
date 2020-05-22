import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    size: yup
        .string()
        .required('Please select a pizza size'),
    instructions: yup
        .string()
});

export default FormSchema;
