"use client";

import React from "react";

// import next module libraries
import Image from "next/image";

// import node module libraries
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";

// import hooks
import { useAuth } from "Context/AuthContext";

// SignIn function to login
const SignIn = () => {
  
  // Hook to validate context information.
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData Object
    const formData = new FormData(event.target);

    // User Data to login
    const userData = {
      email: formData.get("email") as string, // Extract the string value from FormDataEntryValue
      password: formData.get("password") as string, // Extract the string value from FormDataEntryValue
    };
    login(userData);
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
              <h1 className="my-4">Iniciar Sesion</h1>
              <p className="mb-6">Porfavor ingrese sus credenciales.</p>
            </div>
            {/* Form */}

            <Form onSubmit={handleSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="Ingrese su correo electronico"
                  onInvalid={handleInputChange}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    e.target.setCustomValidity("")
                  }
                />
              </Form.Group>

              {/* Password */}

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Clave</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required
                  onInvalid={handleInputChange}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    e.target.setCustomValidity("")
                  }
                />
              </Form.Group>
              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="dark" type="submit">
                    Ingresar
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      ¿Olvide mi contraseña?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SignIn;
