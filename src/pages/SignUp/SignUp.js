import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
 
const SignUp = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const handleRegistration = (data) => {
    console.log(data);
  };

  const handleError = (errors) => {
    console.log(errors);
  };

   // validation function
const validatePassword = (value) => {
  if (value.length < 6) {
    return 'Password should be at-least 6 characters.';
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
  ) {
    return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
  }
  return true;
};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    confirmPassword: {
      validate: validatePassword,
    },
  };

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5 my-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              PizaMen sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              onSubmit={handleSubmit(handleRegistration, handleError)}
              className="p-4 p-md-5 border rounded-3 bg-light"
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  {...register("email", registerOptions.email)}
                />
                <label for="floatingInput">Email address</label>
                {/* client side validation  */}
                <span className="text-danger">
                  {errors?.email && errors.email.message}
                </span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password", registerOptions.password)}
                />
                <label for="floatingPassword">Password</label>
                {/* client side validation  */}
                <span className="text-danger">
                  {errors?.password && errors.password.message}
                </span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confrim Password"
                  {...register("confirmPassword", registerOptions.password)}
                />
                <label for="confirmPassword">Confrim Password</label>
                <span className="text-danger">
                  {errors?.confirmPassword && errors.confirmPassword.message}
                </span>
              </div>
              {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
              <button className="w-100 btn btn-lg btn-warning" type="submit">
                Sign Up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                Already registered? <Link to="/signin">Sign In</Link>,
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
