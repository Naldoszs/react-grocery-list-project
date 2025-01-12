import "./styles/App.css";
import { useState } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  // use state for d controlled input of the add item box
  const [newItem, setNewItem] = useState("");

  //use state for controlled input of the searh box
  const [search, setSearch] = useState("");

  // ftn to set and save items
  const setandSaveItem = (newItems) => {
    //set the items
    setItems(newItems);
    //save in local S
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  //ftn to handle check
  const handleCheck = (id) => {
    //create  a new if checked
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );

    setandSaveItem(listItems);
  };

  //futn to handle delete
  const handleDelete = (id) => {
    //filtering out clicked id
    const listItems = items.filter((item) => item.id !== id);

    setandSaveItem(listItems);
  };

  //ftn to add item
  const addItem = (item) => {
    //create d new item id
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // get a new item obj
    const myNewItem = {
      id,
      checked: false, //always start as false for all items
      item,
    };

    //but the obj in the array
    const listItems = [...items, myNewItem];

    setandSaveItem(listItems);
  };
  //ftn to handle submit of the controlled input
  const handleSubmit = (e) => {
    //prevent default bhvr
    e.preventDefault();
    //if no item
    if (!newItem) {
      return;
    }

    //invoke d funt
    addItem(newItem);

    //change the state on finish
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
