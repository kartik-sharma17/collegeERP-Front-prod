"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import { getStudentresultList } from "@/app/Dashboard/Apis/Apihandler";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { updateStudentattendence } from "@/app/Dashboard/Apis/Apihandler";
import Link from "next/link";
import { Loader } from "@/app/Dashboard/@core/Loader";

const page = () => {
  // for table
  const [loading, setLoading] = useState(true);
  const [attendence, setAttendence] = useState([]);
  const [tableData, setTabledata] = useState([]);
  const [day, setDay] = useState("Select Day");
  const route = useRouter();
  const param = useParams();

  const id = param.id;
  var section;
  // getting the section

  useEffect(() => {
    section = localStorage.getItem("section");
    setTimeout(() => {
      if (section == null) {
        route.push(`/Dashboard/Faculty/Profile/${id}`);
      }
    }, 1000);
  }, []);

  const getStudentlist = async () => {
    const res = await getStudentresultList(section);
    setTabledata(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getStudentlist();
  }, []);

  const updateResult = (rowData) => {
    return (
      <>
        <Link
          href={{
            pathname: `/Dashboard/Faculty/Result/${id}/updateResult`,
            query: rowData,
          }}
        >
          Update Result
        </Link>
      </>
    );
  };

  useEffect(() => {
    setAttendence([]);
  }, [day]);

  const handleUpdateAttence = async (e) => {
    e.preventDefault();

    if (day !== "Select Day")
      if (attendence.length !== 0) {
        try {
          let response = await updateStudentattendence(attendence);
          console.log(response);
          alert("updated successfully");
        } catch (e) {
          console.log(e);
          alert("there is some error ", e);
        }
      } else {
        alert("Please update the attendence first");
      }
    else {
      alert("please select the day first");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-12 px-2">
            <div className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
              <h4
                className="text-light pb-1 text-uppercase"
                style={{ borderBottom: "1px solid #5B5D5C" }}
              >
                Result Update{" "}
              </h4>
              <DataTable
                value={tableData}
                paginator
                rows={5}
                dataKey="id"
                emptyMessage="No customers found."
              >
                <Column field="studentId" header="Student ID" />
                <Column field="studentName" header="Student Name" />
                <Column body={updateResult} header="Attendence" />
              </DataTable>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
