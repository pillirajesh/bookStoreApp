import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (loginTab) {
      console.log("Logging in with:", data);
      // Here you can implement your login logic (e.g., API call)
    } else {
      // Perform sign up action
      console.log("Signing up with:", data);
      // Here you can implement your sign-up logic (e.g., API call)
    }
  };

  const [loginTab, setLoginTab] = useState(true);

  const signUpTabActive = () => {
    setLoginTab(false);
  };

  const loginTabActive = () => {
    setLoginTab(true);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white t">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              style={{ color: "red" }}
            >
              ✕
            </button>
          </form>
          <div className="flex justify-center  ">
            <div
              className="  w-60 p-3  flex justify-center"
              style={{ boxShadow: "1px 1px 10px 0px rgb(176,176,176)" }}
            >
              <button
                type="submit"
                className={
                  loginTab
                    ? "bg-yellow-400 p-2 rounded-lg text-white mr-3"
                    : "bg-white mr-3 text-black"
                }
                onClick={loginTabActive}
              >
                Login
              </button>{" "}
              <button
                className={
                  !loginTab
                    ? "bg-yellow-400 p-2 rounded-lg text-white"
                    : "bg-white text-black"
                }
                onClick={signUpTabActive}
              >
                Signup
              </button>
            </div>
          </div>
          {loginTab ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="inline-block mt-4 font-bold text-sm text-slate-500 mb-1">
                  Email
                </span>
                <br />
                <input
                  type="email"
                  className="w-80 p-2 rounded-md mb-1 bg-slate-200 outline-none"
                  placeholder="Enter here"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm mb-3">
                    email is required
                  </span>
                )}
                <br />
                <span className="inline-block font-bold text-sm text-slate-500 mb-1">
                  Password
                </span>
                <br />
                <input
                  type="password"
                  placeholder="Enter here"
                  className="w-80 p-2 rounded-md bg-slate-200  outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm mb-3">
                    Password is required
                  </span>
                )}
                <br />
                <button
                  type="submit"
                  className="bg-blue-700 text-white p-2 rounded-md mt-5"
                >
                  Login
                </button>
              </form>

              <p className=" text-sm text-black  mt-3">
                Not a member?{" "}
                <span
                  className="font-bold text-blue-900 cursor-pointer"
                  onClick={signUpTabActive}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="inline-block mt-3 font-bold text-sm text-slate-500 mb-1">
                  Name
                </span>
                <br />
                <input
                  type="text"
                  className="w-80 p-2 rounded-md mb-1 bg-slate-200 outline-none"
                  placeholder="Enter here"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500 text-sm mb-2">
                    Name is required
                  </span>
                )}
                <br />

                <span className="inline-block  font-bold text-sm text-slate-500 mb-1">
                  Email
                </span>
                <br />
                <input
                  type="email"
                  className="w-80 p-2 rounded-md mb-1 bg-slate-200 outline-none"
                  placeholder="Enter here"
                  {...register("signup_email", { required: true })}
                />
                <br />
                {errors.signup_email && (
                  <span className="text-red-500 text-sm mb-2">
                    Email is required
                  </span>
                )}
                <br />

                <span className=" inline-block font-bold text-sm text-slate-500 mb-1">
                  Password
                </span>
                <br />
                <input
                  type="password"
                  placeholder="Enter here"
                  className="w-80 p-2 rounded-md bg-slate-200  outline-none"
                  {...register("signup_password", { required: true })}
                />
                <br />
                {errors.signup_password && (
                  <span className="text-red-500 text-sm mb-2">
                    Password is required
                  </span>
                )}
                <br />
                <button
                  type="submit"
                  className="bg-blue-700 text-white p-2 rounded-md mt-5"
                >
                  Sign Up
                </button>
              </form>

              <p className=" text-sm text-black  mt-3">
                Already member?{" "}
                <span
                  className="font-bold text-blue-900 cursor-pointer"
                  onClick={loginTabActive}
                >
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Login;
