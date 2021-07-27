import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { Button } from "@blueprintjs/core";

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../context/Settings.js';

const ToDo = () => {

  const settings = useContext(SettingsContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(settings.itemNumber);
  const { handleChange, handleSubmit } = useForm(addItem);


  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  useEffect(() => {
    addItem({
      text: 'Item 1',
      assignee: 'Assignee 1',
      difficulty: 3,
    });
  }, []);

  function pagination() {
    // settings.itemNumber === size of our slice

    /* render a slice of list? starting index to an ending index */
    let result = list.slice(startIndex, endIndex);

    // this won't work if running in our return statement.
    //setIndex(index + settings.itemNumber); // move this to a button click

    return result;
  }

  function next() {
    setStartIndex(startIndex + settings.itemNumber);
    setEndIndex(endIndex + settings.itemNumber);
  }

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

    {/* Instead of rendering the whole list, how can get a subset? */}

    {/* render a slice of list? starting index to an ending index */}

      {pagination().map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
          <hr />
        </div>
      ))}
      <Button onClick={next}>Next</Button>
    </>
  );
};

export default ToDo;
