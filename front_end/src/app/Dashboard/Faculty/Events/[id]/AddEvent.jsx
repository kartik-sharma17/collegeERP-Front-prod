import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CustomInput } from "@/app/Dashboard/@core/input";
import { useFormik } from "formik";
import { updateEvents } from "@/app/Dashboard/Apis/Apihandler";

const AddEvent = () => {

  const validate = values => {
    const errors = {};
    if (!values.eventBody) {
      errors.eventBody = 'Event Body is Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      eventID: 0,
      publishDate: "",
      eventHeading: "",
      eventBody: "",
      eventLink: "",
    },
    validate,
    onSubmit: async (values) => {
      const data = {
        eventid: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        publishDate: values.publishDate,
        eventHeading: values.eventHeading,
        eventBody: values.eventBody,
        eventLink: values.eventLink,
      };
      try {
        await updateEvents(data);
        alert("updated successfully");
      } catch (e) {
        console.log(e);
        alert("something went wrong");
      }
    },
  });

  return (
    <div>
      <button
        type="button"
        className="customBtnlink"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Event
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Event
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <form onSubmit={formik.handleSubmit}>
                  {/* <div className="col-12">
                    <CustomInput
                      name={"eventID"}
                      label={"Enter a Event Id"}
                      placeholder={"Enter the Event Id here"}
                      formik={formik}
                    />
                  </div> */}
                  <div className="col-12">
                    <CustomInput
                      name={"publishDate"}
                      label={"Enter Date"}
                      placeholder={"DD-MM-YYYY"}
                      formik={formik}
                    />
                  </div>
                  <div className="col-12">
                    <CustomInput
                      name={"eventHeading"}
                      label={"Enter a Event Heading"}
                      placeholder={"Enter the Event Heading here"}
                      formik={formik}
                    />
                  </div>
                  <div className="col-12">
                    <CustomInput
                      name={"eventBody"}
                      label={"Enter a Event Body"}
                      placeholder={"Enter the Event Body here"}
                      formik={formik}
                    />
                  </div>
                  <div className="col-12">
                    <CustomInput
                      name={"eventLink"}
                      label={"Enter a Event Link (if Any)"}
                      placeholder={"Paste Event Link here"}
                      formik={formik}
                    />
                  </div>
                  <button type="submit" className="customBtnlink">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
