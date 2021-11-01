import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number)=>({
    payload: {
        id: shortid.generate(),
        name,
        number
}}));
const deleteContact = createAction('contact/delete');
const deleteAll = createAction('contact/deleteAll');
const changeFilter = createAction('filter/changeFilter');

export default { addContact, deleteContact, deleteAll, changeFilter };