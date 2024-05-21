import IH2HeaderProps from "./Interfaces/IH2HeaderProps";

function H2Header({ children }: IH2HeaderProps) {
  return <p className="h2Header">{children}</p>;
}

export default H2Header;
