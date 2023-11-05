import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div id="about" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 relative">
                    <img src={person} alt="person" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} alt="parts"  className="absolute w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"/>
                </div>
                <div className="lg:w-1/2">
                    <h4 className="text-xl text-red-500 font-bold mb-5">About Us</h4>
                    <h2 className="text-4xl font-bold mb-5">We are qualified & of experience in this field</h2>
                    <p className="my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="my-5">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-red-500 outline-none  text-white hover:bg-red-500 ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;