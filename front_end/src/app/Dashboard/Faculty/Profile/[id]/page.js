"use client";

import React, { useEffect, useState } from "react";
import "../../../Css/Common.scss";
import { useParams } from "next/navigation";
import { facultyProfile } from "@/app/Dashboard/Apis/Apihandler";
import { Loader } from "@/app/Dashboard/@core/Loader";

export const StudentProfile = () => {
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await facultyProfile(id);
      setResData(response.data);
      // console.log(response.data.section)
      localStorage.setItem("section", response.data.section);
      setLoading(false);
    } catch (error) {
      console.log(
        "there is some error while Fetching the data from backend",
        error
      );
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`${"main"} ${"row m-0"}`}>
          <div className={`${"row w-100 text-light"}`}>
            <div className="col-12 ps-0">
              <div className="customBG w-100 p-3 py-5 rounded-4 mb-3">
                <h2>
                  Welcome <span>{resData.name}</span>
                </h2>
              </div>
            </div>
            <div className={` ${"col-12 col-md-7 pe-2 ps-0"}`}>
              <div
                style={{ minHeight: "100%" }}
                className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}
              >
                <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>
                  Basic Details
                </h4>
                <h6>
                  <span className={"label"}>Name :</span> {resData.name}
                </h6>
                <h6>
                  <span className={"label"}>Faculty ID : </span> {resData.id}
                </h6>
                <h6>
                  <span className={"label"}>Number : </span> {resData.number}
                </h6>
                <h6>
                  <span className={"label"}>Alloted Subject : </span>{" "}
                  {resData.allotedSubject}
                </h6>
                <h6>
                  <span className={"label"}>Section Mentor : </span>{" "}
                  {resData.section}
                </h6>
                <h6>
                  <span className={"label"}>Email : </span> {resData.email}
                </h6>
                <h6>
                  <span className={"label"}>Department : </span>{" "}
                  {resData.department}
                </h6>
                <h6>
                  <span className={"label"}>Position : </span>{" "}
                  {resData.position}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProfile;
