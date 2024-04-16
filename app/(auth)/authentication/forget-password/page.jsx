"use client";

// import node module libraries
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";

// import hooks
// import useMounted from "hooks/useMounted";
import Image from "next/image";
import { recoverPasswordAuth } from "services/auth/recoveryPassword";

const ForgetPassword = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // FormData Object
    const formData = new FormData(event.target);

    // User Data to login
    const data = {
      email: formData.get("email"), // Extract the string value from FormDataEntryValue
    };

    recoverPasswordAuth(data);
  };
  // Handle input change
  const handleInputChange = (event) => {
    const input = event.target;
    const validity = input.validity;

    if (validity.valueMissing) {
      input.setCustomValidity("Este campo es requerido");
    } else if (validity.typeMismatch) {
      input.setCustomValidity("Por favor ingresa un valor válido");
    } else if (validity.patternMismatch) {
      input.setCustomValidity("Por favor ingresa un valor válido");
    } else {
      input.setCustomValidity("");
    }
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4 text-center">
              <Link href="/">
                <Image
                  src="/images/svg/full_color.svg"
                  className="mb-2"
                  alt=""
                  width={200}
                  height={50}
                />
              </Link>
              <h2 className="my-4">Recuperar contraseña</h2>
              <p className="mb-6">
                Un correo electronico sera enviado a su dirección de correo
                electronico.
              </p>
            </div>

            {/* Form */}
            {/* {hasMounted && ( */}
            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresar correo electronico"
                  required={true}
                  title="Este campo es obligatorio"
                  onInvalid={handleInputChange}
                  onInput={(e) =>
                    e.target.setCustomValidity("")
                  }
                />
              </Form.Group>
              {/* Button */}
              <div className="mb-3 d-grid">
                <Button variant="dark" type="submit">
                  Resetear
                </Button>
              </div>
              <span>
                Ya tienes cuenta?{" "}
                <Link
                  href="/authentication/sign-in"
                  className="text-purple-app fw-bold"
                >
                  Ingresar
                </Link>
              </span>
            </Form>
            {/* )} */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
