import login from "../../assets/images/login/login.svg"
const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        console.log("clicked");
    }
    return (
        <div className="hero min-h-screen bg-base-200 md:py-0 py-5">
            
            <div className="w-9/12 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-0 my-5 ">
                <div className="text-center lg:text-left">
                    {/* <img className="w-1/2 md:w-full md:ml-0 ml-20 " src="https://imagizer.imageshack.com/img923/1682/E8MxNa.png" alt="login" /> */}
                    <img src={login} alt="login" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-3xl font-bold text-center mt-5 text-red-500">Login</h2>
                    <form onSubmit={handleLogin} className="flex flex-col p-5 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input  type="submit" value="Login" className="btn  bg-red-500  text-white hover:bg-red-500 btn-ghost normal-case" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;