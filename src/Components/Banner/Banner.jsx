import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";


const Banner = () => {
    return (

        <div className="carousel w-full md:h-[700px] mb-0">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute w-9/12 h-full left-0 md:top-0 flex flex-col md:flex-row justify-start items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                    <div className="text-white md:space-y-5 md:pl-16 md:pt-0 pt-5 pl-0 w-7/12">
                        <h2 className="md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex flex-row gap-2">
                            <button className="btn bg-red-500  text-white hover:bg-red-500 btn-ghost">Discover More</button>
                            <button className="btn bg-transparent text-white hover:bg-transparent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-1  bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute w-9/12 h-full left-0 md:top-0  flex flex-col md:flex-row justify-start items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                    <div className="text-white md:space-y-5 md:pl-16 md:pt-0 pt-5 pl-0 w-7/12">
                        <h2 className="md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex flex-row gap-2">
                            <button className="btn bg-red-500  text-white hover:bg-red-500 btn-ghost">Discover More</button>
                            <button className="btn bg-transparent text-white hover:bg-transparent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-1  bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute w-9/12 h-full left-0 md:top-0 flex flex-col md:flex-row justify-start items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                    <div className="text-white md:space-y-5 md:pl-16 md:pt-0 pt-5 pl-0 w-7/12">
                        <h2 className="md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex flex-row gap-2">
                            <button className="btn bg-red-500  text-white hover:bg-red-500 outline-none">Discover More</button>
                            <button className="btn bg-transparent text-white hover:bg-transparent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-1  bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute w-9/12 h-full left-0 md:top-0 flex flex-col md:flex-row justify-start items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
                    <div className="text-white md:space-y-5 md:pl-16 md:pt-0 pt-5 pl-0 w-7/12">
                        <h2 className="md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex flex-row gap-2">
                            <button className="btn bg-red-500  text-white hover:bg-red-500 btn-ghost">Discover More</button>
                            <button className="btn bg-transparent text-white hover:bg-transparent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-1 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;