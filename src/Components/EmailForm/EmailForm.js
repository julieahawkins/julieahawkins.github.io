import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { closeForm } from '../../actions';

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '', 
      message: '',
      renderClose: false,
      submitError: false
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;
    if (email && message) {
      const submitData = {name, email, message};
      //submit data via nodemailer;
      console.log('submit', submitData);

      this.resetForm();
      this.displayFormClose();
    } else {
      console.log('error')
      this.displayError();
    }
  }

  displayError = () => {
    this.setState({ submitError: true });
  }

  displayFormClose = () => {
    const renderClose = !this.state.renderClose;

    this.setState({ renderClose });
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '', 
      message: '',
      submitError: false
    });
  };

  render () {
    const emailForm =
      <form 
        className='email-form' 
        onSubmit={this.handleSubmit}>
        <div
          onClick={this.props.closeForm} 
          className='close-x'></div>
        <input 
          className='name-input'
          value={this.state.name}
          name='name' 
          type='text' 
          placeholder='Enter Name' 
          onChange={this.handleChange} 
        />
        <input 
          className='email-input'
          value={this.state.email}
          name='email' 
          type='email' 
          placeholder='Enter Email' 
          onChange={this.handleChange} 
        />
        <textarea 
          className='message-input'
          value={this.state.message}
          name='message' 
          placeholder='Enter Message: CURRENTLY THIS FORM WILL NOT SEND AN ACTUAL EMAIL'
          onChange={this.handleChange} 
        />
        <input
          className='submit-btn'
          type='submit' 
          value='Send Email'
        />
      </form>;

    const closingForm = 
      <div className='closing-form'>
        <h5>Thank You!</h5>
        <p>You're email has been sent!</p>
        <button 
          onClick={this.props.closeForm}
          className='close-btn'>
          CLOSE
        </button>
      </div>;

    const displayForm = this.state.renderClose
      ? closingForm
      : emailForm;

    const errorMsg = this.state.submitError
      ? <p className='error-msg'>&#9888; Please enter a valid email address and message! &#9888;</p>
      : null;

    return (
      <div className='EmailForm'>
        <div className='form-wrapper'>
          {displayForm}
          {errorMsg}
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = dispatch => ({
  closeForm: () => dispatch(closeForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);

EmailForm.propTypes = {
  theme: PropTypes.string,
};