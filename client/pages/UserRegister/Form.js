import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import TextField from '../../components/Input/TextField'
import Button from '../../components/Button'

const Form = ({ handleSubmit, valid }) => (
  <form onSubmit={handleSubmit}>
    <TextField
      name="email"
      label="E-Mail"
      validations="isEmail"
      validationError="Please enter a valid email address"
      fullWidth
      required
    />

    <TextField
      name="password"
      type="password"
      label="Passwort"
      validations="minLength:5"
      validationError="Please enter at least 5 characters"
      fullWidth
      required
    />

    <TextField
      name="firstName"
      label="First Name"
      validations="isWords"
      validationError="Please enter your first name"
      fullWidth
      required
    />

    <TextField
      name="lastName"
      label="Last Name"
      validations="isWords"
      validationError="Please enter your last name"
      fullWidth
      required
    />

    <Button
      type="submit"
      label="Register"
      disabled={!valid}
      fullWidth
      secondary
    />
  </form>
)

Form.propTypes = {
  valid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({ form: 'register' })(Form)
