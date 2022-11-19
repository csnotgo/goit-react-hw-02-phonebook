import { Component } from 'react';
import { Input, Label, Form, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Amina..."
            onChange={this.onInputChange}
            style={{ marginLeft: '28px' }}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="(093)-55-555-55"
            onChange={this.onInputChange}
          />
        </Label>
        <Button type="submit">✅ Add</Button>
      </Form>
    );
  }
}
