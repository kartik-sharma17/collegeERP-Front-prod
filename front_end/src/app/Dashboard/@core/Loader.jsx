import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ProgressSpinner } from "primereact/progressspinner";
import "../Css/Common.scss";

export const Loader = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className=" d-flex align-items-center justify-content-center"
    >
      <ProgressSpinner
        className="custom-spinner"
        style={{ width: "50px", height: "50px" }}
        strokeWidth="2"
        animationDuration="1s"
      />
    </div>
  );
};
