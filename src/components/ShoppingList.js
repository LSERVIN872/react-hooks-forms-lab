import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [filterByName , setFilterByName] = useState('')
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setFilterByName(event.target.value);

  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filtersToDisplay =itemsToDisplay.filter((item) => {
    if (filterByName === "") return true;

    return item.name.toLowerCase().includes(filterByName.toLowerCase());
})

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} 
      onSearchChange={onSearchChange} search={filterByName}/>
      <ul className="Items">
        {filtersToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
