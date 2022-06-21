import { ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
