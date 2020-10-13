import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import {JSDOM} from 'jsdom';
import TestRenderer from 'react-test-renderer';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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

describe('SearchBar Component testing', () => {
    let searchBar = shallow(<SearchBar/>);

    beforeEach(() =>{
        searchBar = shallow(<SearchBar/>);
    });

    it('render searchBar properly', () => {
        let elementChildNodes = searchBar.find(".SearchBar-sort-options");
        assert.strictEqual(searchBar.prop('className'), 'SearchBar');
    });

    it('changes sortBy state when click in li', () => {
        const defaultSortBy = searchBar.state("sortBy");
        // click in "Most Reviewed"
        searchBar.find('ul').childAt(2).simulate('click');
        const afterClickSortBy = searchBar.state("sortBy");
        assert.notStrictEqual(afterClickSortBy, defaultSortBy);
        assert.strictEqual(afterClickSortBy, 'review_count');
    });

    it('changes term state when type input', () => {
        const inputString = 'Test';
        searchBar.find('input').at(0).simulate('change', {target: {value: inputString}});
        const resultString = searchBar.state('term');
        assert.strictEqual(resultString, inputString);
    });

    it('changes location state when type input', () => {
        const inputString = 'Test';
        searchBar.find('input').at(1).simulate('change', {target: {value: inputString}});
        const resultString = searchBar.state('location');
        assert.strictEqual(resultString, inputString);
    });

    it('returns all of state when click lets go button', () => {
        let searchYelpResult = '';
        const searchYelp = (term, location, sortBy) => {
            searchYelpResult = `${term}_${location}_${sortBy}`;
        };

        let searchBarWith = shallow(<SearchBar searchYelp={searchYelp}/>);

        const inputTerm = 'Term';
        const inputLocation = 'Location';
        const expectVal = `${inputTerm}_${inputLocation}_best_match`;

        searchBarWith.find('input').at(0).simulate('change', {target: {value: inputTerm}});
        searchBarWith.find('input').at(1).simulate('change', {target: {value: inputLocation}});
        searchBarWith.find('button').simulate('click', { preventDefault: () => {}});
        assert.strictEqual(searchYelpResult, expectVal);
    });
})