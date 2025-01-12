import "./styles/Header.css";

const Header = ({ title = "This is a title" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
