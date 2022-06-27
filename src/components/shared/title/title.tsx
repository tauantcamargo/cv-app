import { FC, ReactNode } from "react";
import "./title.scss";

type Props = {
  color: String;
  children: ReactNode;
}

const Title: FC<Props> = ({ color, children }) => {
  return (
    <div className={`title__container title__container--${color}`}>
      {children}
    </div>
  );
}

export default Title;
