import React from "react";
import clsx from "clsx";

function Text(props) {
  // Define props
  let children = props.children;
  let fontSize = props.fontSize || "sm";
  let color = props.color || "gray-900";
  let textAlign = props.textAlign || "left";
  let editable = props.editable || false;
  let inputValue = props.inputValue;
  let onChangeInput = props.onChangeInput;
  let placeholder = props.placeholder;

  // Define classes
  const classes = {
    root: [`text-${fontSize}`, `text-${color}`, `text-${textAlign}`],
  };

  if (editable === true) {
    return (
      <input
        className="rounded-sm bg-gray-600 text-xs text-white px-2 py-1"
        value={inputValue}
        onChange={onChangeInput}
        placeholder={placeholder}
      />
    );
  }

  return (
    <span className={clsx(classes.root)} style={{ textAlign: textAlign }}>
      {children}
    </span>
  );
}

export default Text;
