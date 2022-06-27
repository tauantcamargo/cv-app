import { FC } from "react";
import Details from "../details/details";
import SideBar from "../sidebar/sidebar";
import "./curriculum.scss";

const Curriculum: FC = () => {
  return (
    <div className="curriculum__container">
      <SideBar />
      <Details />
    </div>
  );
}

export default Curriculum;
