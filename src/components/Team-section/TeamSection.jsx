import React from "react";
import Teamcard from "./Teamcard";

const TeamSection = () => {
  const TrainerInfo = [
    {
      dp: "https://images.pexels.com/photos/6740038/pexels-photo-6740038.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sarah Jones",
      brief:
        "Sarah is a high-energy trainer with a background in competitive athletics Her passion lies in helping individuals build strength, power, and endurance. Sarah excels at creating personalized programs that target your specific needs, whether you're a seasoned athlete or just starting out.",
      expertBrief:
        "Strength Training, Bodyweight Conditioning, Performance Enhancement",
    },
    {
      dp: "https://images.unsplash.com/flagged/photo-1597786797107-1799e7e79f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxneW0lMjB0cmFpbmVyJTIwZHB8ZW58MHx8MHx8fDA%3D",
      name: "Michael Lee",
      brief:
        "Michael brings a holistic approach to fitness, incorporating yoga postures, breathwork, and meditation into his programs. He believes in fostering mind-body connection to achieve optimal physical and mental well-being. Michael's calming presence and encouraging guidance will help you find inner peace and improve your overall flexibility and balance.",
      expertBrief:
        "Yoga (Vinyasa, Yin, Restorative), Mindfulness Techniques, Stress Management",
    },
    {
      dp: "https://images.pexels.com/photos/20400632/pexels-photo-20400632/free-photo-of-portrait-of-man-in-tank-top-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dr. Chloe Hernandez",
      brief:
        "Dr. Hernandez is a science-driven trainer who leverages her extensive knowledge of exercise physiology to create data-backed workout plans. She excels at designing programs for specific health goals, such as weight management, injury rehabilitation, and improving cardiovascular health. Dr. Hernandez will guide you with a personalized approach, ensuring your workouts are safe, effective, and tailored to your unique needs.",
      expertBrief:
        "Exercise Physiology, Weight Management, Injury Rehabilitation, Cardiovascular Conditioning",
    },
  ];
  return (
    <>
      <div>TeamSection</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {TrainerInfo.map((trainer, idx) => (
          <Teamcard key={idx} trainer={trainer} />
        ))}
      </div>
    </>
  );
};

export default TeamSection;

