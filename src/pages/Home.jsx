import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Navigation from "../components/Navigation";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Headlines"); 


  const renderContent = () => {
    if (activeTab === "Headlines") {
      return <MainContent />; 
    }

  };

  return (
    <div className="min-h-screen bg-[#bdbdbd] flex flex-col font-sans">
      <Header /> 
      <Navigation setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}
