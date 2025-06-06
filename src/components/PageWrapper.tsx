import { ReactNode } from "react";
import Preloader from "./Preloader";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
};

export default PageWrapper;