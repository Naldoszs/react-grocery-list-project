import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      {/* the input */}
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      {/* the label */}
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => {
          handleDelete(item.id);
        }}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItem;
