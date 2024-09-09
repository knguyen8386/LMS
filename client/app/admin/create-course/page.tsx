"use client";
import React from "react";
import CreateCourse from "../../components/Admin/Course/CreateCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
//import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import Heading from "../../../app/utils/Heading";


type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Kuzsera - Admin"
        description="Kuzsera is a platform for students to learn and get help from teachers"
        keywords="Programming, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          {/* <DashboardHero /> */}
          <DashboardHeader/>
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;