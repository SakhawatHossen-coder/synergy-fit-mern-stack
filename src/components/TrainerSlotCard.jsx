import React from "react";

const TrainerSlotCard = ({ trainer }) => {
  const {
    fullName,
    experience,
    slot,
    image,
    _id,
    bioData,
    age,
    skill,
    weekDays,
    expertise,
  } = trainer;
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <>
      <body className="bg-gray-200">
        <div className="container mx-auto mt-10">
          <div className="wrapper bg-white rounded shadow w-full ">
            <table className="w-full">
              <thead>
                <tr>
                  {days.map((day) => (
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      <span className="xl:block lg:block md:block sm:block hidden">
                        {day}
                      </span>
                      <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                        {day.slice(0, 3)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="text-center h-20">
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">1</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                        {slot?.map((single, idx) => (
                          <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                            <span className="event-name">Time</span>
                            <span className="time">{single}</span>
                          </div>
                        ))}
                   
                      </div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">2</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">3</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">4</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">5</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">6</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                        <div className="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
                         
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                    <div className="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">7</span>
                      </div>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </>
  );
};

export default TrainerSlotCard;
