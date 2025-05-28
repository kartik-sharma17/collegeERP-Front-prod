
const getErrormessage = (name, formik) => {
  return (
    <div className="p-error text-red-500 h-1rem text-xs ml-1 mt-1">
      {formik.touched[name] && formik.errors[name]}
    </div>
  );
};

export const CustomInput = (props) => {
  let { name, label, formik, value, addLabelclass, addClass } = props;
  return (
    <div className={`d-flex flex-column ${addClass}`}>
      <label className={`mb-2 d-flex justify-content-between ${addLabelclass}`}>
        <span>
          {label}
          <span className="text-danger ps-1">*</span>
        </span>
      </label>
      <input
        {...props}
        onBlur={formik.handleBlur}
        id={name}
        name={name}
        onChange={formik.handleChange}
        style={{ border: '1px solid gray' }}
        value={value ? value : formik.values[name]}
        className={`py-1 px-2 rounded `}
      />
      {getErrormessage(name, formik)}
    </div>
  );
};
