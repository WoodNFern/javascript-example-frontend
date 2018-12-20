import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BoxComponent from "./components/box/BoxComponent";
import WelcomeComponent from "./components/page/WelcomeComponent";

class App extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.renderMainPage = this.renderMainPage.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/(|home)"
                           render={this.renderMainPage} />
                    <Route path={`/welcome`}
                           render={this.renderHiddenPage} />
                </div>
            </Router>
        );
    }

    renderMainPage() {
        return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">React App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Option 1</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <BoxComponent/>
                </div>
        );
    }

    renderHiddenPage() {
        return (
            <WelcomeComponent/>
        );
    }
}

export default App;