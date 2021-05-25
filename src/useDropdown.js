import React, { useState } from "react";

const useDropDown = (label, defaultState, listOfOptions) => {
  // const [label, setLabel] = useState('');
  // const [value, setValue] = useState('');
  // const [options, setListOfOptions] = useState('');
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={label}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={listOfOptions.length === 0}
      >
        <option>ALL</option>
        {listOfOptions.map((itemString) => (
          <option
            key={itemString}
            value={itemString}
            onSelect={(e) => updateState(e.target.event)}
          >
            {" "}
            {itemString}{" "}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, updateState];
};

export default useDropDown;
