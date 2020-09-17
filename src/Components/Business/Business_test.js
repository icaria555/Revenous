import React from 'react';
import ReactDOM from 'react-dom';
import Business from './Business.js';
import act from "react-dom/test-utils";
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

describe("Business Component Testing", () => {
    it("Renders Component", () => {
        const business = {
            imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        };
        ReactDOM.render(<Business />, rootContainer);
        const h2 = rootContainer.querySelector("h2");
        assert.strictEqual(h2.textContent, business.name);
    });
});