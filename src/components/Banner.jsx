import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
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
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Classes Page
          </Link>
        </div>
      </div>
    </>
  );
};
export default Banner;
