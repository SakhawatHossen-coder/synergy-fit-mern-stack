import React from "react";
import { BiCool, BiDumbbell, BiRun } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdSpatialTracking } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { TbSocial, TbYoga } from "react-icons/tb";

const PricingTable = () => {
  let basic = (
    <>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <BiDumbbell size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Access to all our top-notch gym facilities during regular operating
            hours.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <BiRun size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Convenience: Enjoy access to locker rooms and showers for a
            post-workout refresh.
          </p>
        </div>
      </div>
      <div className=" flex gap-4 justify-center">
        <div>
          {" "}
          <GrYoga size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Cardio & Strength Training: Utilize our extensive range of cardio
            and strength training equipment to build a strong foundation
          </p>
        </div>
      </div>
    </>
  );
  let standard = (
    <>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <GiGymBag size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Group Fitness Fix: Take your fitness to the next level with
            unlimited access to a variety of group fitness classes like yoga,
            spinning, and Zumba. Find the perfect class to motivate and
            challenge you.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <TbSocial size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Community Connection: Immerse yourself in a vibrant fitness
            community and discover the power of working out together.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <PiNewspaperClipping size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Access to Newsletter
          </p>
        </div>
      </div>
    </>
  );
  let premium = (
    <>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <MdSpatialTracking size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Personalized Guidance: Unlock your full potential with access to
            personalized training sessions from our certified trainers. They'll
            create a customized workout plan to help you achieve your specific
            goals.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <BiCool size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Premium Amenities: Relax and rejuvenate after your workout with
            access to exclusive amenities like a sauna or steam room.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          {" "}
          <TbYoga size={24} />
        </div>
        <div>
          {" "}
          <p className="text-base  text-body-color leading-loose mb-1">
            Holistic Wellness: Invest in your well-being with exclusive
            discounts on additional services like massage therapy and nutrition
            counseling.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <section
        className="
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Unleash Your Potential with Our Flexible Membership Options:
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Pricing Plan
                </h2>
                <p className="text-base text-body-color">
                  Find the perfect fit for your fitness goals and budget!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  Basic: Kickstart Your Journey
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $29
                  <span className="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  Get started with the essentials:
                </p>
                <div className="mb-7">{basic}</div>
                <a
                  href="javascript:void(0)"
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:duration-700
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
                >
                  Join Now
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  Standard: Elevate Your Routine
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $59
                  <span className="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  All Basic benefits, plus:
                </p>
                <div className="mb-7">{standard}</div>
                <a
                  href="javascript:void(0)"
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
                >
                  Join Now
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  Premium: Unmatched Support & Results
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $99
                  <span className="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  All Standard benefits, plus:
                </p>
                <div className="mb-7">{premium}</div>
                <a
                  href="javascript:void(0)"
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
                >
                  Join Now
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingTable;
