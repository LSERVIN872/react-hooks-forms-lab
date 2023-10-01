import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm(props) {

  const [name , setName] = useState('')

  const [category , setCategory] = useState('')

  function nameChange(event) {
    setName(event.target.value);
  }

  function categoryChange(event) {
    setCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    };
  
    props.onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name: 
        <input type="text" name="name" onChange={nameChange} />
      </label>

      <label>
        Category: 
        <select name="Produce" onChange={categoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
