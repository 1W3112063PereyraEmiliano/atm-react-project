import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import LogoArp from '../assets/images/logo.png'
import AnimatedText from '../utils/AnimatedText';

const ArpNavBar = () => {

    const animatedProps = {
        type: "chars",
        text: "Menú",
        animationType: "wave"
    }

    return (
        <>
            <Navbar key="xxl" bg="dark" expand="xxl" className="mb-3" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={LogoArp}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ATM React Project
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-xxl"
                        aria-labelledby="offcanvasNavbarLabel-expand-xxl"
                        placement="end"
                        className="bg-dark text-light"
                    >
                        <Offcanvas.Header closeButton className="bg-warning text-dark">
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                                <AnimatedText {...animatedProps}></AnimatedText>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Ingresar</Nav.Link>
                                <Nav.Link href="#action2">Acerca de</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default ArpNavBar;