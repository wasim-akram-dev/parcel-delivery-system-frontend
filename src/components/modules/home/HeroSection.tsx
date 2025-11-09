import HeroImage from "@/assets/images/delivery-male-with-packages.jpg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="bg-white w-full relative lg:grid  lg:place-content-center font-sans">
      {" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
        }}
      />
      <div className=" mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        {" "}
        <div className="max-w-prose text-left">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            The No.1 Courier Delivery Service in
            <strong className="text-teal-600"> Bangladesh </strong>
          </h1>{" "}
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            {" "}
            Runner Courier is the fastest courier service in Bangladesh that
            ensures safe delivery of your product right on time{" "}
          </p>{" "}
          <div className="mt-4 flex gap-4 sm:mt-6">
            {" "}
            <Link
              className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              to="#"
            >
              {" "}
              Get Started{" "}
            </Link>{" "}
            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              to="#"
            >
              {" "}
              Learn More{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-12 md:mt-0">
          <img
            src={HeroImage}
            alt="Image"
            className="relative object-cover dark:brightness-[0.8] rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
