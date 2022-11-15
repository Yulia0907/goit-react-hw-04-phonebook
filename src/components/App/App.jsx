import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, TitleStyle, PageStyle } from './App.styled';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isDublicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({contacts: [contact, ...contacts],
}));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <Container>
      <TitleStyle>Phonebook</TitleStyle>
        <ContactForm handleSubmit={this.handleSubmit} />
        <TitleStyle>Contacts</TitleStyle>
        {contacts.length === 0 ? (
          <PageStyle>Please, enter your first contact</PageStyle>
        ) : (
          <>
            <Filter filter={filter} handleChange={this.getFilteredContacts} />
            <ContactList
              contacts={visibleContacts}
              onDelete={this.handleDelete}
            />
            </>
        )}
       </Container>
    );
    
  }
}

export default App;

