import PropTypes from 'prop-types';
import { Component } from 'react';
import { FormStyles, LabelStyles, InputStyles, ButtonStyles } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  
  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.handleSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyles onSubmit={this.handleSubmit}>
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
            onChange={this.handleInput}
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
            onChange={this.handleInput}
          />
        </LabelStyles>
        <ButtonStyles type="submit">Add contact</ButtonStyles>
      </FormStyles>
    );
  }
};