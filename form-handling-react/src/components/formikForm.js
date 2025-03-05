import { Formik,Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is rerquired'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at leasr 8 characters').required('Password is required'),
});
const FormikForm = () => (
    <Formik
    initialValues={{name:'', email:'', password:''}}
    validationSchema = {validationSchema}
    onsubmit = {(values) => {
        console.log(values)
    }}
    >
    {() =>(
        <Form>
            <h2>REGISTER</h2>

            <label>Username:</label>
            <Field type = "text" name = "name" placeholder ="Name Other" />
            <ErrorMessage name="name" component="div" /> <br/>

            <lsbel>Email:</lsbel> 
            <Field type = "email" name = "email" placeholder = "example@email.com" />
            <ErrorMessage name="email" component="div" /> <br/>

            <label>Password:</label> 
            <Field type = "password" name = "password" placeholder = "12345678" />
            <ErrorMessage name="password" component = "div" />
            <button type="submit">Submit</button>

        </Form>
    )}
    </Formik>

);
export default FormikForm;