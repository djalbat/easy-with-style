"use strict";

import withStyle from "../../../index";  ///

import { window, Element } from "easy";

import cursor from "../../cursor";

class VerticalSplitterDiv extends Element {
  mouseUpHandler(event, element) {
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

  mouseOverHandler(event, element) {
    cursor.columnResize();
  }

  mouseOutHandler(event, element) {
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

  didMount() {
    this.onMouseDown(this.mouseDownHandler, this);
    this.onMouseOver(this.mouseOverHandler, this);
    this.onMouseOut(this.mouseOutHandler, this);

    window.onMouseUp(this.mouseUpHandler, this);

    window.onMouseMove(this.mouseMoveHandler, this);
  }

  willUnmount() {
    this.offMouseDown(this.mouseDownHandler, this);
    this.offMouseOver(this.mouseOverHandler, this);
    this.offMouseOut(this.mouseOutHandler, this);

    window.offMouseUp(this.mouseUpHandler, this);

    window.offMouseMove(this.mouseMoveHandler, this);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "vertical-splitter"
  };
}

export default withStyle(VerticalSplitterDiv)`

  width: 1rem;
  flex-shrink: 0;
  
  background-color: lightgrey;

`;
