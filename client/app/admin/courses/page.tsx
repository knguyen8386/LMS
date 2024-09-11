'use client'
import React from "react";
import AllCourses from "../../components/Admin/Course/AllCourses";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import Heading from "@/app/utils/Heading";
import AdminProtected from "@/app/hooks/adminProtected";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Kuzsera - Admin"
                    description="Kuzsera is a platform for students to learn and get help from teachers"
                    keywords="Programming, Machine Learning"
                />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <AllCourses />
                    </div>
                </div>
            </AdminProtected>
        </div>
    );
};

export default page;