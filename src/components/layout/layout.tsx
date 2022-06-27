import { FC, ReactNode } from "react";
import "./layout.scss"

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout__container">
      <div className="layout__container__content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
