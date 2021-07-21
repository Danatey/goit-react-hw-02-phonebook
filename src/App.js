import React, { Component } from "react";

import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import ContactsListItem from "./Components/ContactsListItem";

class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: "id-1", Name: "Rosie Simpson", Number: "459-12-56" },
    //   { id: "id-2", Name: "Hermione Kline", Number: "443-89-12" },
    //   { id: "id-3", Name: "Eden Clements", Number: "645-17-79" },
    //   { id: "id-4", Name: "Annie Copeland", Number: "227-91-26" },
    // ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const isInContacts = (contact) => {
      return contact.Name === data.Name;
    };
    console.log(this.state.contacts.some(isInContacts));
    if (this.state.contacts.some(isInContacts)) {
      alert(`${data.Name} is already in contacts`);
      return;
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, data],
      }));
  };

  filterHandler = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  deleteHandler = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContactList = contacts.filter((contact) =>
      contact.Name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter onChange={this.filterHandler} value={filter} />
            <ContactList>
              <ContactsListItem
                contacts={filteredContactList}
                onDelete={this.deleteHandler}
              />
            </ContactList>
          </>
        ) : (
          <span>You have no contacts yet </span>
        )}
      </div>
    );
  }
}

export default App;
