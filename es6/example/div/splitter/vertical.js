"use strict";

import withStyle from "../../../index";  ///

import { window, Element } from "easy";

import cursor from "../../cursor";

class VerticalSplitterDiv extends Element {
  mouseUpHandler() {
    const dragging = this.isDragging();

    if (dragging) {
      this.stopDragging();
    }

    cursor.reset();
  }

  mouseMoveHandler(event) {
    const dragging = this.isDragging();

    if (dragging) {
      const mouseLeft = event.pageX,  ///
            relativeMouseLeft = mouseLeft - this.previousMouseLeft,
            sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft,
            previousSiblingElement = this.getPreviousSiblingElement(),
            sizeableDiv = previousSiblingElement,  ///
            width = sizeableDivWidth; ///

      sizeableDiv.setWidth(width);
    }
  }

  mouseDownHandler(event) {
    const dragging = this.isDragging();

    if (!dragging) {
      const mouseLeft = event.pageX,  ///
            previousSiblingElement = this.getPreviousSiblingElement(),
            sizeableDiv = previousSiblingElement,  ///
            sizeableDivWidth = sizeableDiv.getWidth(),
            previousMouseLeft = mouseLeft,  ///
            previousSizeableDivWidth = sizeableDivWidth;   ///

      this.previousMouseLeft = previousMouseLeft;

      this.previousSizeableDivWidth = previousSizeableDivWidth;

      this.startDragging();
    }

    cursor.columnResize();
  }

  mouseOverHandler() {
    cursor.columnResize();
  }

  mouseOutHandler() {
    cursor.reset();
  }

  startDragging() {
    this.addClass("dragging");
  }

  stopDragging() {
    this.removeClass("dragging");
  }

  isDragging() {
    const dragging = this.hasClass("dragging");

    return dragging;
  }

  initialise(properties) {
    const mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseOverHandler = this.mouseOverHandler.bind(this),
          mouseOutHandler = this.mouseOutHandler.bind(this);

    this.onMouseDown(mouseDownHandler);
    this.onMouseOver(mouseOverHandler);
    this.onMouseOut(mouseOutHandler);

    window.onMouseUp(mouseUpHandler);

    window.onMouseMove(mouseMoveHandler);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "vertical-splitter"
  };

  static fromClass(Class, properties) {
    const verticalSplitter = Element.fromClass(Class, properties);

    verticalSplitter.initialise(properties);

    return verticalSplitter;
  }
}

export default withStyle(VerticalSplitterDiv)`

  width: 1rem;
  flex-shrink: 0;
  
  background-color: lightgrey;

`;
