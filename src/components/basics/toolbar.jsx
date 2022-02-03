import React from "react";
import clsx from "clsx";

import Button from "./button";
import Text from "../typography/text";

function Toolbar(props) {
  // Define props
  let onClickAdd = props.onClickAdd;
  let onClickColorPicker = props.onClickColorPicker;
  let pickerIconColor = props.pickerIconColor || "#e7e7e7";
  let onClickAddLayout = props.onClickAddLayout;

  // Define classes
  const classes = {
    root: [`w-[80px]`, `h-full`, `bg-gray-900`, `space-y-1`],
    wrapper: [
      `relative`,
      `bg-gray-800`,
      `inline-flex`,
      `justify-center`,
      `items-center`,
      `w-full`,
      `h-12`,
    ],
    icon: [`h-5`, `w-5`],
  };

  // Custom style
  const iconColor = {
    color: pickerIconColor,
  };

  return (
    <div className={clsx(classes.root)}>
      {/* Add layout */}
      <div className={clsx(classes.wrapper)}>
        <Button onClick={onClickAddLayout}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="layer-plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={clsx([...classes.icon, `text-gray-300`])}
          >
            <path
              fill="currentColor"
              d="M304 144h64v64c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-64h64c8.84 0 16-7.16 16-16V96c0-8.84-7.16-16-16-16h-64V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v64h-64c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16zm195.59 220.1l-58.54-26.53-161.19 73.06c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.95 337.57 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40zM12.41 275.9l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L448 299.28V280.7c-15.32 4.38-31.27 7.29-48 7.29-88.01 0-160.72-64.67-173.72-149.04L12.41 235.9c-16.55 7.5-16.55 32.5 0 40z"
            ></path>
          </svg>
        </Button>
      </div>

      {/* add rectangle  */}
      <div className={clsx(classes.wrapper)}>
        <Button onClick={onClickAdd}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="vector-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={clsx([...classes.icon, `text-gray-300`])}
          >
            <path
              fill="currentColor"
              d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"
            ></path>
          </svg>
        </Button>
      </div>

      {/* color fill picker */}
      <div className={clsx(classes.wrapper)}>
        <Button onClick={onClickColorPicker}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="palette"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={clsx(classes.icon)}
            style={iconColor}
          >
            <path
              fill="currentColor"
              d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Toolbar;
