"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getStudentresultList } from "../../../Apis/Apihandler";
import { Column } from "primereact/column";
import Link from "next/link";
import { Loader } from "../../../@core/Loader";
import { CustomTable } from "../../../@core/CustomTable";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [attendence, setAttendence] = useState([]);
  const [tableData, setTabledata] = useState([]);
  const [day, setDay] = useState("Select Day");
  const route = useRouter();
  const param = useParams();

  const id = param.id;
  var section;
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
        <Link className="customBtn2"
          href={{
            pathname: `/Dashboard/Faculty/Result/${id}/updateResult`,
            query: rowData,
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <Link className="customBtn3 ms-2"
          href={{
            pathname: `/Dashboard/Faculty/Result/${id}/updateResult`,
            query: rowData,
          }}
        >
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </>
    );
  };

  useEffect(() => {
    setAttendence([]);
  }, [day]);


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
              <CustomTable value={tableData}
                paginator
                rows={10}
                emptyMessage="No Data found.">
                <Column style={{ width: "20%" }} field="studentId" header="Student ID" />
                <Column field="studentName" header="Student Name" />
                <Column body={updateResult} header="Update Result" />
              </CustomTable>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
