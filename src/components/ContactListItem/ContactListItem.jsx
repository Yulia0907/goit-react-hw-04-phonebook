import PropTypes from 'prop-types';
import {
  ButtonDelete,
  ListContactsItem,
} from './ContactListItem.styled';

export const ContactListItem = ({ handleDelete, id, name, number}) => {
    return (
          <ListContactsItem key={id}>
            {name}: {number}
            <ButtonDelete
              type="button"
              onClick={() => handleDelete(id)}
              dataid={id}
            >
              Delete
            </ButtonDelete>
          </ListContactsItem>
        );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};