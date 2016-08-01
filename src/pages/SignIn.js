import React from 'react';
import ModalLayout from './layouts/ModalLayout'
import LogInForm from './../components/LogInForm'

class SignIn extends React.Component {
  render() {
    return (
      <ModalLayout title="Sign In" subTitle="Lorem ipsum sit amte dolor">
        <LogInForm />
      </ModalLayout>
    )
  }
}

export default SignIn
