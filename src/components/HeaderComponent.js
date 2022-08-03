import React, {Component} from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, FormGroup, Input, Label
} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component{

    constructor(props) {
       super(props);
       this.state = {
           isNavOpen: false,
           isModalOpen: false
       };
       this.toggleNav = this.toggleNav.bind(this);
       this.toggleModal = this.toggleModal.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        console.log("Username: "+ this.username.value + "Password: " + this.password.value
            + "Remember" + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
          <React.Fragment>
              <Navbar dark expand="md">
                  <div className="container " >
                      <NavbarToggler onClick={this.toggleNav} />

                      <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-between">
                        <Nav navbar>
                            <NavbarBrand className="mr-auto" href="/">
                                <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                            </NavbarBrand>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                   <span className="fa fa-home fa-lg px-1"> </span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg px-1"> </span>About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg px-1"> </span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg px-1"> </span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                          <Nav className="float-right" navbar>
                              <NavItem>
                                  <Button outline onClick={this.toggleModal}>
                                      <span className="fa fa-sign-in fa-lg px-1"> </span>Login
                                  </Button>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </div>
              </Navbar>
              <div className = "header" className="mt-4 p-5 bg-primary text-white rounded">
                  <div className="container">
                      <div className='row row-header'>
                          <div className='col-12 col-sm-6'>
                              <h1>Ristorante Con Fusion</h1>
                              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will
                              will tickle your culinary senses</p>
                          </div>
                      </div>
                  </div>
              </div>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                      <Form onSubmit={this.handleLogin}>
                          <FormGroup>
                              <Label htmlFor="username">Username</Label>
                              <Input type="text" id="username" name="username"
                                  inenerRef={(input)=> this.username = input} />
                          </FormGroup>
                          <FormGroup>
                              <Label htmlFor="password">Password</Label>
                              <Input type="password" id="password" name="password"
                                     inenerRef={(input)=> this.password = input}/>
                          </FormGroup>
                          <FormGroup check>
                              <Label check>
                                  <Input type="checkbox" name="remeber"
                                         inenerRef={(input)=> this.remember = input} />
                                  Remember Me
                              </Label>
                          </FormGroup>
                          <Button type="submit" value="submit" color="primary">Login</Button>
                      </Form>
                  </ModalBody>
              </Modal>
          </React.Fragment>
        );
    }
}
export default Header;