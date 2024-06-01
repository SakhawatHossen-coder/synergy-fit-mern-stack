import React from "react";
import fit1 from "../assets/fit1.svg";
import fit2 from "../assets/fit2.svg";
import fit3 from "../assets/fit3.svg";
import fit4 from "../assets/fit4.svg";
import fit5 from "../assets/fit5.svg";
import fit6 from "../assets/fit6.svg";
import fit7 from "../assets/fit7.svg";
const Feature = () => {
  return (
    <>
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-xl leading-[1.1] sm:text-2xl md:text-4xl">
            Unleash Your Potential: with these 6 Powerful
            <span className="text-teal-400 font-semibold"> Features</span>
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-medium">
            Empower your fitness journey with a comprehensive suite of tools
            designed to help you achieve your goals.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit1} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold">Personalized Fitness Tracking:</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor steps, distance, calories burned, activity intensity,
                  and sleep patterns. Analyze trends and set customized goals to
                  stay on track.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit2} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold">
                  {" "}
                  Real-Time Performance Monitoring:
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track your heart rate zones (fat burn, cardio, peak) during
                  workouts with built-in heart rate monitoring. Optimize your
                  efforts and ensure you're training in the most effective zone
                  for your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit3} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold"> GPS Tracking:</h3>
                <p className="text-sm text-muted-foreground">
                  Map your runs, walks, hikes, and bike rides with built-in GPS.
                  Analyze distance, pace, elevation gain, and route details to
                  see your progress over time.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit5} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold">Smart Coaching & Insights:</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized guidance and feedback based on your
                  activity data. Get insights into your progress, identify areas
                  for improvement, and receive motivational tips to stay on
                  track.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit4} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold"> Community & Social Connection:</h3>
                <p className="text-sm text-muted-foreground">
                  Join a vibrant online community of fitness enthusiasts. Share
                  your workouts, compete in challenges, and connect with others
                  for motivation and support.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[250px] flex-col justify-between rounded-md p-4 items-center">
              <img src={fit6} alt="" className="w-[6.9rem]" />
              <div className="space-y-2">
                <h3 className="font-bold">Advanced Workout Programs:</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from a library of guided workouts for all fitness
                  levels, including cardio, strength training, HIIT, yoga, and
                  more. New workouts are added regularly to keep your routine
                  fresh and challenging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
