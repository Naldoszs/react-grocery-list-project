import LineItem from "./LineItem";

const itemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default itemList;
