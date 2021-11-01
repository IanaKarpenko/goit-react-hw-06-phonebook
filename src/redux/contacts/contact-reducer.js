import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';

const contacts = createReducer([], {
    [actions.addContact]: (state, {payload}) => [payload, ...state],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => (id !== payload)),
    [actions.deleteAll]: (state, _) => [],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
    contacts,
    filter
  });