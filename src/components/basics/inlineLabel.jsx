import React from "react";
import clsx from "clsx";

import Text from "../typography/text";
import Button from "./button";

function InlineLabel(props) {
  // Define props
  let onClick = props.onClick;
  let layoutName = props.layoutName;
  let count = props.count;
  let onClickEdit = props.onClickEdit;
  let editable = props.editable;
  let onChangeInput = props.onChangeInput;
  let onClickSave = props.onClickSave;
  let inputValue = props.inputValue;
  let active = props.active || false;

  // Define classes
  const classes = {
    root: [
      `inline-flex`,
      `w-full`,
      `h-auto`,
      `min-h-[32px]`,
      `justify-between`,
      `items-center`,
      `border-b-[1px]`,
      `border-gray-700`,
      `px-3`,
      `py-1`,
      `cursor-pointer`,
      `rounded-md`,
    ],
    inline: [],
  };

  if (active) {
    classes.root.push(`bg-gray-800`);
  }

  return (
    <div className={clsx(classes.root)} onClick={onClick}>
      <Text
        color="gray-300"
        fontSize="xs"
        editable={editable}
        inputValue={inputValue}
        onChangeInput={onChangeInput}
      >
        {layoutName}
      </Text>
      <div className="inline-flex items-center space-x-2">
        <Text color="gray-300" fontSize="xs" textAlign="right">
          {count} rect
        </Text>
        {!editable ? (
          <Button height="auto" width="auto" onClick={onClickEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        ) : (
          <Button height="auto" width="auto" onClick={onClickSave}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
}

export default InlineLabel;
