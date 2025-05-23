export const initialValues = {
  subject1Name: "",
  subject1marks: "",
  subject2Name: "",
  subject2marks: "",
  subject3Name: "",
  subject3marks: "",
  subject4Name: "",
  subject4marks: "",
  subject5Name: "",
  subject5marks: "",
  subject6Name: "",
  subject6marks: ""
};

export const validate = (values) => {
  const errors = {};
  
  for (let i = 1; i <= 6; i++) {
    const nameKey = `subject${i}Name`;
    const marksKey = `subject${i}marks`;

    if (!values[nameKey]) {
      errors[nameKey] = "This field is required";
    }

    if (!values[marksKey]) {
      errors[marksKey] = "This field is required";
    }
  }

  return errors;
};
