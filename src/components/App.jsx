import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>You didn't have any contacts yet</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
