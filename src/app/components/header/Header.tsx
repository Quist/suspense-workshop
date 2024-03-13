import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <>
      <header>
        <Link to={"/"} style={{ cursor: "pointer", color: "white" }}>
          <h1>BekkBank</h1>
        </Link>
        <p className="read-the-docs">Hvor hver transaksjon er en opplevelse.</p>
      </header>
    </>
  );
};
