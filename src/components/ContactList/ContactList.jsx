import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ListContacts } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            handleDelete={handleDelete}
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
