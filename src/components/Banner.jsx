import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden -z-10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Gym Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Unleash Your Potential: Achieve Your Fitness Goals with{" "}
            <span className="text-blue-200">SynergyFit</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We are revolutionizing the way you approach health and wellness. At
            SynergyFit, we're passionate about empowering individuals to lead
            active, fulfilling lives.
          </p>
          <Link
            to="/classes"
            className="bg-teal-400 text-gray-900 hover:bg-teal-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            Classes Page
          </Link>
        </div>
      </div>
    </>
  );
};
export default Banner;
