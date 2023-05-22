import { Component } from 'react';
import { Contacts } from '../Contacts';
import { Filter } from '../Filter';
import { Forma } from '../Forma';
import { nanoid } from 'nanoid';
import { ContainerForm } from "./App.styled"


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(pravState => {
      return { contacts: [contact, ...pravState.contacts] };
    });
  };

  deleteContact = (contactId) => {
    this.setState(prevState =>({contacts: prevState.contacts.filter(contact => contact.id !== contactId)})
      
    )
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const visiblContacts = this.getVisibleContacts();

    return (
      <ContainerForm>
        <h1 style={{ padding: "10px 20px", textAlign: "center", color: "Black"}}>Phonebook</h1>
        <Forma onSubmit={this.addContacts} arr={this.state.contacts} />
        <h2 style={{ padding: "10px 20px", textAlign: "center", color: "Black"}}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visiblContacts}
          onDeleteContacts={this.deleteContact}
        />
      </ContainerForm>
    );
  }
};