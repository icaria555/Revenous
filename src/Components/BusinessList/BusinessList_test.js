import React from "react";
import ReactDOM from "react-dom";
import BusinessList from "./BusinessList.js";
import { JSDOM } from "jsdom";

const assert = require("assert");

const { window } = new JSDOM("<!doctype html><html><body></body></html>");
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

describe("BusinessList Component Testing", () => {
  it("Renders Component when no Business record", () => {
    ReactDOM.render(<BusinessList />, rootContainer);
    const element = rootContainer.querySelector(".BusinessList");
    assert.strictEqual(element.textContent, "No Item");
  });

  it("Renders Component when have Business record", () => {
    const business = {
      imageSrc:
        "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
      name: "MarginOtto Pizzeria",
      address: "1010 Paddington Way",
      city: "Flavortown",
      state: "NY",
      zipCode: "10101",
      category: "Italian",
      rating: 4.5,
      reviewCount: 90,
    };

    const businesses = [business, business, business, business, business, business];

    ReactDOM.render(<BusinessList businesses={businesses}/>, rootContainer);
    const elementChildNodes = rootContainer.querySelector(".BusinessList").childNodes;
    assert.strictEqual(elementChildNodes.length, businesses.length);
  });
});
