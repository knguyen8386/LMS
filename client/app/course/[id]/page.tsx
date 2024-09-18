"use client";
import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

type Props = {};

const page = ({ params }: any) => {
  const id = params?.id;
  return(
    <div>
        <CourseDetailsPage id={params.id} />;
    </div>
  ) 
};

export default page;