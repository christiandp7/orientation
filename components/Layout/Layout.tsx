import Footer from "@components/Footer";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
