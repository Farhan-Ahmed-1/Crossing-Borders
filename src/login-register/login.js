import { Formik } from "formik";
import * as Yup from "yup";
import './login.css';
import { login } from "../API_calls/API";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const notify = (status,notification) => {
  if(status){
    toast.success(notification);
  }
  else{
    toast.error(notification);
  }
}

function Login({setUser, user}) {
  const navigate = useNavigate();
  
  return (
    <div className="main">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async(values) => {
          // Alert the input values of the form that we filled
        const response = await login(values);
        if(response.data.status){
          setUser(response.data.data);
          notify(response.data.status,response.data.message);
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
        else{
          notify(response.data.status,response.data.msg);
        }
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
                <span>Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
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
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
              <Link to={'/register'}>new User? Register here</Link>
            </div>
          </div>
        )}
      </Formik>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}

export default Login;