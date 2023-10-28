import { Link } from "react-router-dom";
import svg_pic from "../../assets/images/login/login.svg"
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        console.log("clicked");
        const form = e.target;
        // const email = form.email.vlaue;
        const email = e.target.email.value;
        // console.log(email);
        const name = form.name.value;
        const password = form.password.value;
        console.log(email,name,password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 md:py-0 py-5">

            <div className="w-9/12 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-0 my-5 ">
                <div className="text-center lg:text-left">

                    <img src={svg_pic} alt="login" />
                </div>
                <div className="card-body flex-shrink-0 w-full rounded-lg max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-3xl font-bold text-center text-red-500">Login</h2>
                    <form onSubmit={handleSignUp} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" value="Sign Up" className="btn  bg-red-500  text-white hover:bg-red-500 btn-ghost normal-case" />
                        </div>
                    </form>
                    <h2 className=" "> Have an account?<Link to="/login" className="font-bold" >Log in</Link> </h2>
                </div>
            </div>
        </div>
    );
};

export default SignUp;