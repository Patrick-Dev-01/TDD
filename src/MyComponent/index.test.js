import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './index';

Enzyme.configure({
    adapter: new Adapter()
});

describe('Testing MyComponent', () => {
    /* Usando o beforeEach para evitar repetição de codigo, já que sempre estamos 
    testando o componente 'MyComponent' */
    let wrapper;
    beforeEach(() => {
        // o wrapper é o component a ser testado
        wrapper = shallow(<MyComponent/>);
    })

    it('Simple Sum', () => {
        expect(1 + 2).toBe(3)
    });

    it('should looking for `Hello World` text in tag H1', () => {
        const elementToBeTested = wrapper.find('h1').text()
        // Testar a tag h1 e verificar se contem o texto 'Hello World!'
        expect(elementToBeTested).toBe('Hello World!')
    })

    it('verify if exists a div classname called "algumaDiv" in component', () => {
        const divName = <div className="algumaDiv"></div>
        // Testando se a div possui uma classe chamada algumaDiv
        const elementToBeTested = wrapper.contains(divName)
        expect(elementToBeTested).toBe(true);
    })
});