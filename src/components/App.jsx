import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { changeFilter } from 'redux/filter/filterSlice';

export const App = () => {
  const contacts = useSelector(state=>state.contacts);
  const filter = useSelector(state=>state.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const filterChange = event => {
    dispatch(changeFilter(event.target.value))
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact=>contact.name.toLowerCase().includes(filter))
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
  };

  const filteredContacts = getFilteredContacts()
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>You didn't have any contacts yet</p>
      ) : (
        <>
          <Filter onChange={filterChange} />
          <ContactList
            contacts={filteredContacts}
            onDelete={handleDeleteContact}
          />
        </>
      )}
    </div>
  );
};
