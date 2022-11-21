import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormStyles,
  LabelStyles,
  InputStyles,
  ButtonStyles,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmitData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, number };
    onSubmitData(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <LabelStyles>
        Name
        <InputStyles
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Yulia Sukhonenko"
          value={name}
          onChange={handleChange}
        />
      </LabelStyles>
      <LabelStyles>
        Number
        <InputStyles
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="999-99-99"
          value={number}
          onChange={handleChange}
        />
      </LabelStyles>
      <ButtonStyles type="submit">Add contact</ButtonStyles>
    </FormStyles>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
