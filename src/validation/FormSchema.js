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
        .string(),
    substitute: yup
        .boolean()
});

export default FormSchema;
