import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormStyles, LabelStyles, InputStyles, ButtonStyles } from './ContactForm.styled';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
  
    const form = e.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };

  return (
    <FormStyles onSubmit={handleFormSubmit}>
      <LabelStyles>Name 
      <InputStyles
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Yulia Sukhonenko"
        value={name}
        onChange={handleInputName}
      />
      </LabelStyles>
      <LabelStyles>Number 
      <InputStyles
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="999-99-99"
        value={number}
        onChange={handleInputNumber}
      />
      </LabelStyles>
      <ButtonStyles type="submit">
        Add contact
      </ButtonStyles>
    </FormStyles>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};