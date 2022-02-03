import React from "react";
import clsx from "clsx";

function Button(props) {
  // Define props
  let children = props.children;
  let onClick = props.onClick;
  let rounded = props.rounded;
  let backgroundColor = props.backgroundColor || "transparent";
  let height = props.height || "full";
  let width = props.height || "full";
  let padding = props.padding;
  let paddingX = props.paddingX;
  let paddingY = props.paddingY;
  let ring = props.ring || 0;
  let ringColor = props.ringColor || "transparent";
  let cursor = props.cursor;
  let shadow = props.shadow || false;
  let transition = props.transition || false;

  // Define classes
  const classes = {
    root: [
      `bg-${backgroundColor}`,
      `border-none`,
      `h-${height}`,
      `w-${width}`,
      `inline-flex`,
      `justify-center`,
      `items-center`,
    ],
  };

  // conditional classes
  if (rounded) {
    classes.root.push(`rounded-${rounded}`);
  }

  if (padding) {
    classes.root.push(`p-${padding}`);
  }

  if (paddingX) {
    classes.root.push(`px-${paddingX}`);
  }

  if (paddingY) {
    classes.root.push(`py-${paddingY}`);
  }

  if (ring) {
    classes.root.push(`ring-${ring}`);
  }

  if (ringColor) {
    classes.root.push(`ring-${ringColor}`);
  }

  if (cursor) {
    classes.root.push(`cursor-${cursor}`);
  }

  if (shadow) {
    classes.root.push(`shadow`);
  }

  if (transition) {
    classes.root.push(`transition-all`, `duration-200`);
  }

  return (
    <button onClick={onClick} className={clsx(classes.root)}>
      {children}
    </button>
  );
}

export default Button;
