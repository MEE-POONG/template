import React from "react";

// components

// import AdminNavbar from "../components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      admin
      {/* <Sidebar /> */}
      <div className="relative md:ml-64 bg-blueGray-100">
        admin

        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full">
          admin
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
