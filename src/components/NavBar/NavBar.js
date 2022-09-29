import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo.png";

function ContainerInsideExample() {
    return (
        <Navbar expand="lg" variant="white" bg="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo" width="50px" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#music">Music</Nav.Link>
                    <Nav.Link href="#more">More</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default ContainerInsideExample;
