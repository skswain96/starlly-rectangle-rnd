import React, { useState, useEffect } from "react";
import { ChromePicker as ColorPicker } from "react-color";
import clsx from "clsx";

import Rectangle from "../components/shapes/rectangle";
import Toolbar from "../components/basics/toolbar";
import Header from "../components/basics/header";
import InlineLabel from "../components/basics/inlineLabel";

// global variables
let shapesArray = [];
let blueColor = "#0088ff";
let grayColor = "#f8f8f8";
let transparent = "transparent";
let defaultShapeColor = "#e7e7e7";

function Artboard() {
  // Define initial states
  let [layoutData, setLayoutData] = useState([
    {
      name: "Layout 1",
      artboard: [],
    },
  ]);
  let [background, setBackground] = useState(grayColor);
  let [showColorPicker, setShowColorPicker] = useState(false);
  let [selectedShape, setSelectedShape] = useState(null);
  let [isSavingData, setIsSavingData] = useState(false);
  let [activeLayout, setActiveLayout] = useState(0);
  let [editableIndex, setEditableIndex] = useState(null);

  // Define classes
  const classes = {
    root: [`relative`, `h-full`, `w-full`, `inline-flex`, `flex-col`],
    container: [
      `relative`,
      `top-0`,
      `left-0`,
      `h-screen`,
      `w-screen`,
      `inline-flex`,
      `bg-gray-300`,
      `z-0`,
    ],
    artboard: [
      `relative`,
      `w-full`,
      `h-full`,
      `bg-white`,
      `overflow-hidden`,
      `z-0`,
    ],
    picker: [`absolute`, `w-auto`, `h-auto`, `left-4`, `top-[96px]`, `z-90`],
    layout: [
      `absolute`,
      `bottom-2`,
      `right-4`,
      `w-[280px]`,
      `h-[180px]`,
      `bg-gray-900`,
      `rounded-md`,
      `shadow`,
      `overflow-y-auto`,
      `p-3`,
    ],
  };

  // function to generate shape data
  const generateArtboardData = (object, result, id) => {
    let array = layoutData[activeLayout].artboard;
    if (array[id].index === selectedShape) {
      object = array[id];
      object = result;
      array[id] = object;

      let layoutArr = layoutData;

      layoutArr[activeLayout].artboard = array;

      setLayoutData(() => [...layoutArr]);

      setTimeout(() => {
        handleSave();
      }, 500);
    }
  };

  // function to handle layouts
  const handleAddLayout = () => {
    let array = layoutData;
    let object = {
      name: `Layout ${layoutData.length + 1}`,
      artboard: [],
    };
    setActiveLayout(layoutData.length);
    array.push(object);
    setLayoutData(() => [...array]);
    handleSave();
  };

  // function to edit layout name
  const handleEdit = (id) => {
    setEditableIndex(id);
  };

  // function to enter layout name
  const handleInputChange = (event, id) => {
    let layoutArr = layoutData;
    layoutArr[id].name = event.target.value;
    setLayoutData(() => [...layoutArr]);
  };

  // function to save input changes
  const handleInputeSave = () => {
    setEditableIndex(null);
    handleSave();
  };

  // function to add a shape to data
  const handleAddShape = () => {
    shapesArray = layoutData[activeLayout].artboard;
    let shapeAttributes = {
      index: shapesArray.length + 1,
      x: 10,
      y: 10,
      width: 160,
      height: 100,
      background: defaultShapeColor,
    };
    shapesArray.push(shapeAttributes);
    setSelectedShape(selectedShape + 1);

    let layoutArr = layoutData;

    layoutArr[activeLayout].artboard = shapesArray;

    setLayoutData(() => [...layoutArr]);
  };

  // function to handle clicks on shapes
  const handleShapeClick = (index) => {
    setSelectedShape(index);
  };

  // function to decide if color picker needs to be shown or not
  const handleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  // function to handle change of color from the picker
  const handleColorChange = (color, event) => {
    setBackground(color.hex);

    let array = layoutData[activeLayout].artboard;
    array.map((data, id) => {
      let object = {
        ...array[id],
        background: color.hex,
      };
      generateArtboardData({}, object, id);
    });
  };

  // function to handle change of color from the picker when sliding is done
  const handleColorChangeComplete = (color) => {
    setBackground(color.hex);
  };

  // function to save artboard data to session storage on click
  const handleSave = () => {
    const stringifiedData = JSON.stringify(layoutData);
    sessionStorage.setItem("layout", stringifiedData);
    handleAutoSave();
  };

  // function to auto-save artboard data to session storage
  const handleAutoSave = () => {
    setIsSavingData(true);
    setTimeout(() => {
      setIsSavingData(false);
    }, 1000);
  };

  // function to clear artboard data and data from session storage
  const handleClear = () => {
    setSelectedShape(null);
    let layoutArr = layoutData;
    layoutArr[activeLayout].artboard = [];
    setLayoutData(() => [...layoutArr]);
  };

  // function to reset the entire layout and artboard, also delete sessionStorage data
  const handleClearAll = () => {
    setSelectedShape(null);
    setActiveLayout(0);
    sessionStorage.removeItem("layout");
    setLayoutData([
      {
        name: `Layout 1`,
        artboard: [],
      },
    ]);
  };

  // function to delete selected shape
  const handleShapeDelete = (id) => {
    let array = layoutData[activeLayout].artboard;
    array = array.filter((d) => {
      if (d.index !== id) {
        return d;
      }
    });
    setSelectedShape(null);

    let layoutArr = layoutData;
    layoutArr[activeLayout].artboard = array;
    setLayoutData(() => [...layoutArr]);
  };

  // execute on first render
  useEffect(() => {
    const localData = sessionStorage.getItem("layout");
    let parsedsessionStorageData = [];
    if (localData) {
      parsedsessionStorageData = JSON.parse(localData);
      setLayoutData(parsedsessionStorageData);
    }
  }, []);

  return (
    <div className={clsx(classes.root)}>
      {/* header for save and clear */}
      <Header
        primaryText={isSavingData ? "Saving..." : "Save"}
        onClickClear={handleClear}
        onClickSave={handleSave}
        onClickClearAll={handleClearAll}
        layoutIndex={selectedShape}
      />
      <div className={clsx(classes.container)}>
        {/* left toolbar for add rectangle shape and fill color */}
        <Toolbar
          onClickAdd={handleAddShape}
          onClickColorPicker={selectedShape !== null ? handleColorPicker : null}
          onClickAddLayout={handleAddLayout}
          pickerIconColor={
            selectedShape !== null &&
            layoutData[activeLayout].artboard[selectedShape - 1]
              ? layoutData[activeLayout].artboard[selectedShape - 1].background
              : defaultShapeColor
          }
        />

        {/* Artboard */}
        <div
          className={clsx(classes.artboard)}
          onClick={() => setShowColorPicker(false)}
        >
          {/* shows all rectangle on artboard */}
          {layoutData[activeLayout].artboard.map((data, id) => {
            return (
              <Rectangle
                key={id}
                index={data.index}
                layoutIndex={selectedShape}
                background={data.background}
                borderColor={
                  selectedShape === data.index ? blueColor : transparent
                }
                handleColorChange={handleColorChange}
                handleColorChangeComplete={handleColorChangeComplete}
                onClickShape={handleShapeClick}
                onClickDelete={handleShapeDelete}
                onDragStart={() => setSelectedShape(data.index)}
                size={{
                  width: data.width,
                  height: data.height,
                }}
                position={{ x: data.x, y: data.y }}
                onDragStop={(e, d, ref, delta, position) => {
                  let object = {
                    index: data.index,
                    x: d.x,
                    y: d.y,
                    width: data.width,
                    height: data.height,
                    background: data.background,
                  };
                  generateArtboardData({}, object, id);
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                  let object = {
                    index: data.index,
                    ...position,
                    width: ref.style.width,
                    height: ref.style.height,
                    background: data.background,
                  };
                  generateArtboardData({}, object, id);
                }}
              />
            );
          })}
        </div>

        {showColorPicker && (
          <div className={clsx(classes.picker)}>
            <ColorPicker
              disableAlpha={true}
              onChange={handleColorChange}
              color={background}
              onChangeComplete={handleColorChangeComplete}
            />
          </div>
        )}

        {/* layout information */}
        <div className={clsx(classes.layout)}>
          {layoutData.map((d, i) => {
            return (
              <InlineLabel
                key={i}
                layoutName={d.name}
                inputValue={d.name}
                count={d.artboard.length}
                onClick={() => setActiveLayout(i)}
                onClickEdit={() => handleEdit(i)}
                onChangeInput={(e) => handleInputChange(e, i)}
                onClickSave={handleInputeSave}
                editable={editableIndex === i ? true : false}
                active={activeLayout === i ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artboard;
