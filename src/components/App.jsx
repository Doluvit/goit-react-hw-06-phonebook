import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { FormHeader, MainContainer } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, setFilter } from 'redux/actions';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const handleSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const onFilter = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <MainContainer>
      <ToastContainer autoClose={2000} />
      <FormHeader>Phonebook</FormHeader>
      <ContactForm onSubmit={handleSubmit} />

      <FormHeader>Contacts</FormHeader>
      <Filter value={filtered} onFilter={onFilter} />
      <ContactList contacts={filteredContacts} />
    </MainContainer>
  );
};

export default App;
