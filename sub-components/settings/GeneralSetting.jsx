"use client";

// React import
import React from "react";
// import node module libraries
import { Col, Row, Form, Card, Button, Modal } from "react-bootstrap";

// import hooks
import useMounted from "hooks/useMounted";
import { Fragment, useState } from "react";

const GeneralSetting = () => {
  // Check if the component is mounted
  const hasMounted = useMounted();
  // State for modal
  const [show, setShow] = useState(false);
  // Validated fields then modal appears
  const handleClose = React.useCallback(() => setShow(!show), [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData Object
    const formData = new FormData(e.target);

    // Submit config profile
    const userData = {
      nombre: formData.get("nombre_usuario"),
      apellido: formData.get("apellido_usuario"),
      dni: formData.get("dni"),
      newpassword: formData.get("newpassword"),
      oldpassword: formData.get("oldpassword"),
      email: formData.get("email"),
    };
    console.log(userData);
    handleClose();
    // try {
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password
    //     })
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Store the token in a secure way (such as in a HTTP-only cookie)
    //     document.cookie = `token=${data.token}; path=/`;

    //     // Redirect the user to a protected page
    //     window.location.href = '/dashboard';
    //   } else {
    //     console.error(data.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  const ConfirmModal = React.memo((props) => {
    return (
      <Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.descriptionModal}</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Confirmar
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  });

  ConfirmModal.displayName = "ConfirmModal";
  
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
    <Row className="mb-8">
      <ConfirmModal
        descriptionModal={"¿Esta seguro que desea guardar los cambios?"}
        titleModal={""}
      />
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Ajustes generales</h4>
          <p className="mb-0 fs-5 text-muted">Perfil de configuración </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            <div className=" mb-6">
              <h4 className="mb-1">Ajustes generales</h4>
            </div>

            <div>
              {/* <div className="mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div> */}
              {hasMounted && (
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="nombre_usuario"
                    >
                      Nombre
                    </Form.Label>
                    <Col sm={4} className="mb-3 mb-lg-0">
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="nombre_usuario"
                        id="nombre_usuario"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>

                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="apellido_usuario"
                    >
                      Apellido
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control
                        type="text"
                        name="apellido_usuario"
                        placeholder="Apellido"
                        id="apellido_usuario"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>

                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="dni"
                    >
                      Documento
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="dni"
                        name="dni"
                        placeholder="Nro documento"
                        id="dni"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>

                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="email"
                    >
                      Correo
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Correo"
                        id="email"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>

                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="oldpassword"
                    >
                      Contraseña anterior
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="password"
                        name="oldPassword"
                        placeholder="Contraseña anterior"
                        id="oldpassword"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>

                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label
                      className="col-sm-4 col-form-label form-label"
                      htmlFor="newpassword"
                    >
                      Contraseña nueva
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="password"
                        name="newpassword"
                        placeholder="Contraseña nueva"
                        id="newpassword"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Button type="submit" className="btn text-white">
                        Guardar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(GeneralSetting);
