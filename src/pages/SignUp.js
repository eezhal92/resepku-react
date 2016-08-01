import React from 'react';
import ModalLayout from './layouts/ModalLayout'
import RegisterForm from './../components/RegisterForm'

class SignUp extends React.Component {
  render() {
    return (
      <ModalLayout title="Sign Up" subTitle="Lorem ipsum sit amte dolor">
        <RegisterForm />
      </ModalLayout>
    )
  }
}

export default SignUp
