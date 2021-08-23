import commentsReducers from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', function() {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment',
    }

    const newState = commentsReducers([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducers([], { type: 'unknown'});

    expect(newState).toEqual([]);
});
