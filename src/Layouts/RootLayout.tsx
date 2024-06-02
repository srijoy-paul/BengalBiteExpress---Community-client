import BottomBar from "@/Components/BottomBar/BottomBar";
import Header from "@/Components/Navbar/Header";
import LeftSidebar from "@/Components/Sidebar/LeftSideBar";
import React from "react";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col w-screen h-screen md:flex-row">
      <Header />
      <LeftSidebar />
      <div className="container" style={{ flex: "1" }}>
        {children}
      </div>
      <BottomBar />
    </div>
  );
}

export default RootLayout;
