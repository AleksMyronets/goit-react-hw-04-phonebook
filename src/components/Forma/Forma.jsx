import { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, FormBtn } from "./Forma.styled"

export class Forma extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleSubmit = event => {
    event.preventDefault();
    const nameContacts = this.props.arr.map(el => el.name.toLowerCase());
    if (nameContacts.includes(this.state.name.toLowerCase())) {
      alert(`${this.state.name} is in your contacts`);
    } else {
      this.props.onSubmit(this.state.name, this.state.number);
      this.reset();
    }
  };

  hendleNameTelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.hendleNameTelChange}
            />
          </label>

          <label>
            <Input
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.hendleNameTelChange}
            />
          </label>
          <FormBtn type="submit">Add contact</FormBtn>
        </form>
      </>
    );
  }
}

Forma.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
