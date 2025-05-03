"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "@/app/Dashboard/@core/Loader";
import { getEventds } from "@/app/Dashboard/Apis/Apihandler";
import "../../../Css/Common.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [resData, setResdata] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await getEventds();
      setResdata(response.data);
      setLoading(false);
    } catch {
      alert("there is something wrong whiling fetching events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {resData.map((data, index) => (
            <div key={index} className="col-12 p-2">
              <div className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
                <div className="d-flex justify-content-between">
                  <h5 className="text-light">{data.eventHeading}</h5>
                  <h6 className="text-light">
                    <span className={"label"}>Event ID :</span> {data.eventid}
                  </h6>
                </div>
                <p className="text-light">{data.eventBody}</p>
                <div className="d-flex justify-content-between">
                  {data.eventLink && (
                    <Link
                      className="customBtnlink"
                      target="_blank"
                      href={data.eventLink}
                    > Link
                      <FontAwesomeIcon
                        style={{ width: "12px" }}
                        icon={faArrowUpRightFromSquare}
                      />
                    </Link>
                  )}
                  <h6 className="text-light">{data.publishDate}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default page;
