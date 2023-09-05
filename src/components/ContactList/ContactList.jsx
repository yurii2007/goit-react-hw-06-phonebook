import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => handleDeleteContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};