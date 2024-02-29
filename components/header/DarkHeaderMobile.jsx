import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DarkHeaderMobile() {
  return (
    <Navbar variant="dark" expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
                <img className='img-header' src="/assets/logos/opsm_logo_white.png" alt="" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
          <Nav className="me-auto my-3">
            <Nav.Link className='header-nav-link' href="#home">Events</Nav.Link>
            <Nav.Link  className='header-nav-link' href="#link">Players</Nav.Link>
            <Nav.Link className='header-nav-link' href="#link">Coaches</Nav.Link>
            <Nav.Link  className='header-nav-link' href="#link">About</Nav.Link>
            <Nav.Link className='header-nav-link' href="#link">Contact</Nav.Link>
            <Nav.Link className='header-nav-link' href="#link">Login</Nav.Link>
            <Nav.Link className='header-nav-link red_button' href="#link">Sign Up</Nav.Link>

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DarkHeaderMobile;