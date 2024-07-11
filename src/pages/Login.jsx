import logo from "../assets/images/logo-devlinks-large.svg";
import mailIcon from "../assets/images/icon-email.svg";
import passwordIcon from "../assets/images/icon-password.svg";

function Login() {
  return (
    <div className="p-8 sm:p-0 w-full h-full bg-neutral-extraLight flex justify-start sm:justify-center flex-col items-center gap-12">
      <img src={logo} alt="logo" className=" self-start sm:self-center " />

      <div className="p-0 sm:p-10 bg-none sm:bg-white rounded-xl flex-col flex gap-10 w-[476px] max-w-full self-start sm:self-center  ">
        {/* Form Heading */}
        <div className="flex flex-col gap-2 text-neutral-medium">
          <h1 className="text-neutral-dark font-bold text-3xl">Login</h1>
          <p>Add your details below to get back into the app</p>
        </div>
        <form className="flex flex-col gap-6">
          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label htmlFor="mail" className="text-neutral-dark  text-xs ">
              Email address
            </label>
            <div className="relative">
              <img
                src={mailIcon}
                alt="mail Icon"
                className="absolute top-1/2 translate-y-[-50%] left-4"
              />
              <input
                placeholder="e.g. alex@email.com"
                className="outline-none border border-neutral-light rounded-xl  py-3 px-4  w-[100%] pl-11  focus:border-primary-default focus:shadow-activeShadow transition-all "
                type="mail"
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label htmlFor="mail" className="text-neutral-dark  text-xs ">
              Password
            </label>
            <div className="relative">
              <img
                src={passwordIcon}
                alt="mail Icon"
                className="absolute top-1/2 translate-y-[-50%] left-4"
              />
              <input
                placeholder="Enter your password"
                className="outline-none border border-neutral-light rounded-xl  py-3 px-4  w-[100%] pl-11 focus:border-primary-default focus:shadow-activeShadow transition-all"
                type="mail"
              />
            </div>
          </div>
          {/* Login Submit Button */}
          <button className="w-[100%] bg-primary-default rounded-xl py-3 px-7 text-white font-semibold text-base hover:bg-primary-light focus:shadow-activeShadow transition-all ">
            Login
          </button>
          {/* Create Account */}
          <p className="text-base text-neutral-medium text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-primary-default">
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
