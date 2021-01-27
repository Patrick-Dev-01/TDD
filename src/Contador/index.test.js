import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contador from './index';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testing functions and states', () => {

    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Contador />)
    });

    it('Verify if exists increment button', () => {
        const button = wrapper.find('#incrementBtn').text();
        expect(button).toBe('Increment')
    });

    it('Verify if exists decrement button', () => {
        const button = wrapper.find('#decrementBtn').text();
        expect(button).toBe('Decrement')
    });

    it('Verify if exists the counter state', () => {
        const counter = wrapper.find('.counter').text()
        expect(counter).toBe("0")
    })

    it('Verify when click on the incrment button the state changed', () => {
        wrapper.find('#incrementBtn').simulate('click');
        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("1");
    })

    it('Verify when clicking on decrement button the state change', () => {
        // 2 clicks no botão de incremento
        wrapper.find('#incrementBtn').simulate('click');
        wrapper.find('#incrementBtn').simulate('click');
        // 1 click no botão de decremento
        wrapper.find('#decrementBtn').simulate('click');

        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("1");
    })

    it('Reset the counter', () => {
        wrapper.find('#resetBtn').simulate('click');
        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("0");
    });
    
    it('Shallow, mount and render', () => {
        const testShallow = shallow(<Contador />);

        // debugando os elementos do componente referenciado
        console.log(testShallow.debug());
    })
});