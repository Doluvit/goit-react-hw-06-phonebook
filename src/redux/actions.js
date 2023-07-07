
export const addContact = (id, name, number) => {
  return {
    type: 'contacts/addContacts',
    payload: {
      id,
      name,
      number,
    },
  };
};

export const deleteContact = (id) => {
  return {
      type: 'contacts/deleteContacts',
      payload: id,
    };
  };


export const setFilter = value => {
  return {
    type: 'filters/setFilters',
    payload: value,
  };
};