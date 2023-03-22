import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { MdAdminPanelSettings } from "react-icons/md";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (

        <Container fluid>
            <Row>
                <Col md="8">

                </Col>
                <Col clas md="4">
                    <Card className='text-light bg-dark bg-gradient'>
                        <Card.Header>
                            <MdAdminPanelSettings />{' '}
                            Ingresar
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="form-user">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresar usuario" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="form-password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresar contraseña" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="warning" type="submit">
                                        Ingresar
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Login;