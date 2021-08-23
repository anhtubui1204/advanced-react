import React from 'react';
import { shallow } from 'enzyme';
import App from 'containers/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});



// Ref: https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html