import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input } from 'reactstrap';

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
  handleInputE = (e) => {
    // per official react docs
    const target = e.target
    const value = target.value
    const email = target.email


    this.setState({
        [email]: value
    })
}

handleInputP = (e) => {
    // per official react docs
    const target = e.target
    const value = target.value
    const password = target.password


    this.setState({
        [password]: value
    })
}

// handleSubmit = (e) => {
//     e.preventDefault()
//     let post = {
//         comment: this.state.comment,
//         author: generateName()
//     }
//     createComment(this.state.review._id, post)
//         .then((response) => {
//             this.setState({
//                 comments: response.data.comments
//             })

//         })
//         .catch(err => console.log(err))
// }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Sign in</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
          <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplemail@bacon.com" className="mr-sm-2" >Email</Label>
          <Input valid={false} type="email" name="email" id="exampleEmail" placeholder="Enter Your Email!" onChange={this.handleInputE}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Sixletter" className="mr-sm-2">Password</Label>
          <Input valid={false}type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={this.handleInputP}/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>  
      <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplemail@bacon.com" className="mr-sm-2" >Email</Label>
          <Input valid={false} type="email" name="email" id="exampleEmail" placeholder="Enter Your Email!" onChange={this.handleInputE}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Sixletter" className="mr-sm-2">Password</Label>
          <Input valid={false}type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={this.handleInputP}/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>  
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUp;