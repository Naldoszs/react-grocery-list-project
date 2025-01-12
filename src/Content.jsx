import "./styles/Content.css";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p
          style={{
            margin: "auto",
          }}
        >
          An empty list
        </p>
      )}
    </main>
  );
};

export default Content;
