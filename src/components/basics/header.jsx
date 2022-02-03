import React from "react";
import clsx from "clsx";

import Button from "./button";
import Text from "../typography/text";

function Header(props) {
  // Define props
  let primaryText = props.primaryText;
  let onClickClear = props.onClickClear;
  let onClickSave = props.onClickSave;
  let layoutIndex = props.layoutIndex;
  let onClickClearAll = props.onClickClearAll;

  // Define classes
  const classes = {
    root: [`bg-gray-900`, `h-[52px]`, `w-full`, `py-2`, `px-4`],
    container: [
      `w-full`,
      `relative`,
      `inline-flex`,
      `items-center`,
      `justify-between`,
    ],
    wrapper: [`h-auto`, `w-auto`, `ml-[calc(80px-16px)]`],
    actions: [`inline-flex`, `w-auto`, `space-x-3`, `items-center`],
  };

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.wrapper)}>
          {layoutIndex && (
            <Text fontSize="xs" color="gray-300">
              Selected Shape:{" "}
              <Text fontSize="xs" color="gray-200">
                Rectangle #{layoutIndex}
              </Text>
            </Text>
          )}
        </div>
        <div className={clsx(classes.actions)}>
          <Button
            onClick={onClickClearAll}
            rounded="md"
            backgroundColor="transparent"
            height="auto"
            width="auto"
            paddingX={4}
            paddingY={1}
            ring={1}
            ringColor="white"
            cursor="pointer"
            shadow={true}
          >
            <Text fontSize="sm" color="white">
              Clear All
            </Text>
          </Button>
          <Button
            onClick={onClickClear}
            rounded="md"
            backgroundColor="transparent"
            height="auto"
            width="auto"
            paddingX={4}
            paddingY={1}
            ring={1}
            ringColor="white"
            cursor="pointer"
            shadow={true}
          >
            <Text fontSize="sm" color="white">
              Clear
            </Text>
          </Button>
          <Button
            onClick={onClickSave}
            rounded="md"
            backgroundColor="white"
            height="auto"
            width="auto"
            paddingX={4}
            paddingY={1}
            transition={true}
          >
            <Text fontSize="sm" color="gray-900">
              {primaryText}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
