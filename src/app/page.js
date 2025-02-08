import Image from "next/image";

import HeroSection from "@/components/Home/HeroSection/HeroSection";
import StudyOproTunity from "@/components/Home/StudyOproTunity/StudyOproTunity";
import classes from "./page.module.css";
import ChooseYourLearning from "@/components/Home/ChooseYourLearning/ChooseYourLearning";
import OurSystem from "@/components/Home/OurSystem/OurSystem";
import Footer from "@/Layouts/Footer/Footer";
import ChatBox from "@/components/ChatBox/ChatBox";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChatBox />
      <StudyOproTunity /> <OurSystem />
      <ChooseYourLearning />
      <Footer />
    </>
  );
}
