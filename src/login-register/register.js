import { Formik } from "formik";
import * as Yup from "yup";
import './register.css';
import { register } from "../API_calls/API";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});


const Register = () => {
  const navigate = useNavigate();
  const notify = (status,notification) => {
    if(status){
      toast.success(notification);
    }
    else{
          toast.error(notification);
        }
  }

  return (
    <div className="main">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async(values) => {
          // Alert the input values of the form that we filled
        const response = await register(values);
        console.log(response);
        if(response.status){
          notify(response.status,response.msg);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
        else{
          notify(response.status,response.msg);
        }
        console.log(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Register</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter New password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
      <Toaster />
    </div>
  )
}

export default Register