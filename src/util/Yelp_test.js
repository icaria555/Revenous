import { resolve } from 'path';
import Yelp from './Yelp';
import {JSDOM} from 'jsdom';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {fetch} from 'node-fetch';

configure({adapter: new Adapter()});
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const assert = require('assert');

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

describe('Yelp', () => {
    it('connect to yelp', (done) => {
        const inputTerm = 'Pizza';
        const inputLocation = 'Bangkok';
        const inputSortBy = 'best_match';
        Yelp.search(inputTerm, inputLocation, inputSortBy).then((value) =>{
            assert.strictEqual(result, '');
            done();
        });
    });
});