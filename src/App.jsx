import "./styles/App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState(
    // JSON.parse(localStorage.getItem("shoppinglist")) ||
    []
  );

  // use state for d controlled input of the add item box
  const [newItem, setNewItem] = useState("");

  //use state for controlled input of the searh box
  const [search, setSearch] = useState("");
  //error in fetch data
  const [fetchError, setFetchError] = useState(null);

  //load state
  const [isLoading, setIsLoading] = useState(true);

  //use effect
  useEffect(() => {
    // localStorage.setItem("shoppinglist", JSON.stringify(items));

    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Error in fetching data!!");
        } else {
          const listItems = await res.json();
          setItems(listItems);
          setFetchError(null);
        }
      } catch (err) {
        setFetchError(err.message);
      } finally {
        //set load state to false
        setIsLoading(false);
      }
    };
    //simulating the REST API is not as fast as the JSON-server npm
    setTimeout(() => {
      //call the fetchItem ftn
      (async () => await fetchItems())();
    }, 2000);
  }, []);

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

    setItems(listItems);
  };

  //futn to handle delete
  const handleDelete = (id) => {
    //filtering out clicked id
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
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

    setItems(listItems);
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

      <main>
        {isLoading && (
          <p
            style={{
              margin: "auto 0",
              color: "green",
            }}
          >
            Loading the items...
          </p>
        )}
        {fetchError && (
          <p
            style={{
              color: "red",
              marginTop: "0.5rem",
            }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
};

export default App;
