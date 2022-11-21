import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onFormSubmitState = data => {
    const name = this.state.contacts.map(item => item.name);
    if (name.includes(data.name)) {
      alert(`${data.name} is allready in contact`);
    } else {
      const newArr = [data, ...this.state.contacts];
      this.setState({ contacts: newArr });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.number !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmitState} />

        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={filter} />
        <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
