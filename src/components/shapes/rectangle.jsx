import React from "react";
import { Rnd } from "react-rnd";
import clsx from "clsx";

function Rectangle(props) {
  // Define props
  const background = props.background;
  const borderColor = props.borderColor;
  const onClickShape = props.onClickShape;
  const index = props.index;
  const onDragStop = props.onDragStop;
  const onResizeStop = props.onResizeStop;
  const size = props.size;
  const position = props.position;
  const onDragStart = props.onDragStart;
  const layoutIndex = props.layoutIndex;
  const onClickDelete = props.onClickDelete;

  // Define classes
  const classes = {
    root: [`h-full`, `w-full`, `absolute`],
    wrapper: [
      `h-auto`,
      `w-auto`,
      `inline-flex`,
      `absolute`,
      `z-[999]`,
      `-top-2`,
      `-right-2`,
      `bg-white`,
      `rounded-full`,
      `p-2`,
      `drop-shadow-lg`,
    ],
  };

  // Custom style
  const RnDStyle = {
    position: "relative",
    border: `1px solid ${borderColor}`,
  };

  const shapeBackgroundStyle = {
    backgroundColor: background,
  };

  return (
    <Rnd
      style={RnDStyle}
      bounds="parent"
      default={{
        x: 10,
        y: 10,
        width: 160,
        height: 100,
      }}
      size={size}
      position={position}
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
      onDragStart={onDragStart}
    >
      <div
        className={clsx(classes.root)}
        style={shapeBackgroundStyle}
        onClick={() => onClickShape(index)}
      >
        {layoutIndex === index && (
          <div
            className={clsx(classes.wrapper)}
            onClick={() => {
              onClickDelete(index);
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-trash-alt fa-w-14 h-3 w-3 text-gray-900 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                className=""
              ></path>
            </svg>
          </div>
        )}
      </div>
    </Rnd>
  );
}

export default Rectangle;
