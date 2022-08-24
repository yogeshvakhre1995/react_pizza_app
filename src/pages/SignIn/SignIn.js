import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignIn = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
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
              method="post"
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 p-md-5 border rounded-3 bg-light"
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">Your email is required</span>
                )}
                <label for="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">Your password is required</span>
                )}

                <label for="password">Password</label>
              </div>
              {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <button className="w-100 btn btn-lg btn-dark" type="submit">
                Sign In
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                Not yet registered? <Link to="/signup">Sign Up</Link>,
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
