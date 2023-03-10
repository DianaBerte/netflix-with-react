import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom";


class MyNetflixNavbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" >
                    <img style={{ width: 100 }} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link style={{ color: 'whitesmoke' }} href="#home">Home</Nav.Link>
                        <Link to="/tv-shows">
                        <div className="nav-link" style={{ color: 'whitesmoke' }}>TV Shows</div>
                        </Link>
                        <Nav.Link style={{ color: 'whitesmoke' }} href="#link">Movies</Nav.Link>
                        <Nav.Link style={{ color: 'whitesmoke' }} href="#link">Recently Added</Nav.Link>
                        <Nav.Link style={{ color: 'whitesmoke' }} href="#link">My List</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder={this.props.subtitle} className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar bg="dark" expand="lg">
                        <Navbar.Brand style={{ color: 'whitesmoke' }} href="#home">TV Shows</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <NavDropdown variant="outline-dark" title="Genres" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Thriller</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
                            </NavDropdown>
                            </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default MyNetflixNavbar