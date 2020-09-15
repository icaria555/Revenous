import React from 'react';
import ReactDOM from "react-dom";
import {App} from './App.js';
import { act } from "react-dom/test-utils";

let jsdom = require('mocha-jsdom');
globalThis.document = jsdom({
  url: "http://localhost"
});
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
    ReactDOM.render(<App />, rootContainer);
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World");
  });
});