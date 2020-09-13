import React from 'react';
import ReactDOM from "react-dom";
import {App} from './App';

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Hello World Title", () => {
    //
  });
});