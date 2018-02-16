import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input } from 'reactstrap';

import { firebase, google_signin, check_session, google_signOut } from '../../utilities/firebase'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  google_signin() {
    google_signin()
    .then(resp => {
      // console.log(resp);
      let { displayName, email, uid } = resp.user;
      // console.log(this);
      this.setState({ online: true });
    })
    .catch(error => { console.log(error) })
  }
  google_signout() {
    google_signOut()
    .then(resp => {
      // console.log(resp);
      this.setState({ online: false });
    })
    .catch(error => { console.log(error) })
  }

  render() {
    let user = check_session();
    // console.log("session: ", user);
    return (
      <div>
        { user != null && 
          <Button color="danger" onClick={() => { this.google_signout() }}>Sign Out</Button>
        }
        { user == null && 
          <Button color="danger" onClick={() => { this.google_signin() }}>Sign in</Button>
        }
      </div>
    );
  }
}

export default SignUp;