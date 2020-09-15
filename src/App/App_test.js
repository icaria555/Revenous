import React from 'react';
import ReactDOM from "react-dom";
import App from './App.js';
import act from "react-dom/test-utils";
import { JSDOM } from 'jsdom';

const assert = require('assert')
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

let jsdom = require('mocha-jsdom');
globalThis.document = window.document;
let rootContainer;

globalThis.window = window;

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
    assert.strictEqual(h1.textContent, "Hello World");
  });
});