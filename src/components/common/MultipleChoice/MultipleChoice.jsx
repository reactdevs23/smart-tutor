import React from "react";
import { Text } from "components/common";
import classes from "./MultipleChoice.module.css";

const MultipleChoice = ({
  options,
  label,
  selected,
  setSelected,
  allowMultiple = false,
  name, // Add name prop
}) => {
  const handleOptionChange = (event) => {
    const { value, checked } = event.target;

    if (allowMultiple) {
      if (checked) {
        setSelected((prevSelected) => [...prevSelected, value]);
      } else {
        setSelected((prevSelected) =>
          prevSelected.filter((option) => option !== value)
        );
      }
    } else {
      setSelected(value);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Text className={classes.label}>{label}</Text>
      <div className={classes.options}>
        {options.map((option, index) => (
          <div key={index} className={classes.option}>
            <label>
              <input
                type={allowMultiple ? "checkbox" : "radio"}
                name={name} // Use unique name
                value={option}
                checked={
                  allowMultiple
                    ? selected.includes(option)
                    : selected === option
                }
                onChange={handleOptionChange}
                className={classes.label}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
