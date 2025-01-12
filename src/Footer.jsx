import "./styles/Footer.css";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} list {length > 1 ? "items" : "item"}
      </p>
    </footer>
  );
};

export default Footer;
