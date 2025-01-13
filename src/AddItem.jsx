import "./styles/AddItem.css";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  //ftn to add item
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      {/* the input */}
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add your item..."
        required
        value={newItem} // the current val
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        ref={inputRef}
      />
      {/* the plus btn */}
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
