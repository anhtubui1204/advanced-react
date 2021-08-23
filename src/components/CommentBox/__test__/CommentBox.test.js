import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

it('has a text area and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
         // find a textarea element
        // simulate an event
        // Provide a fake event to simulate
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' },
        });
        // force the components to be updated
        wrapped.update();
    })

    it('has a text area that users can type in', () => {
        // assert the textarea change the value
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, textarea is emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })

})

afterEach(() => {
    wrapped.unmount();
});