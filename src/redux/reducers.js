import { combineReducers } from 'redux';

const contactsIinitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsIinitialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts': {
      return [...state, action.payload.id];
    }
    case 'contacts/deleteContacts': {
      return state.filter(contact => contact.id !== action.payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filters/setFilters': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
