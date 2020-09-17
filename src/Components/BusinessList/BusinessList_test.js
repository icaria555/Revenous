import React from 'react'
import ReactDOM from 'react-dom'
import BusinessList from './BusinessList.js'
import { JSDOM } from 'jsdom';

const assert = require('assert');

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
globalThis.document = window.document;
globalThis.window = window;

let rootContainer;
beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
});

afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
});

describe('BusinessList Component Testing', () => {
    it("Renders Component", () => {
        ReactDOM.render(<BusinessList />, rootContainer);
        const element = rootContainer.querySelector(".BusinessList");
        assert.strictEqual(element.textContent, 'Test');
    });
});