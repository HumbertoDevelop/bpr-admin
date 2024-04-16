// Hooks
import React from "react";
import useMounted from "hooks/useMounted";
import { Fragment, useCallback, useState } from "react";

const { Modal, Button, Form, Row, Col } = require("react-bootstrap");

export default function FormPlayerModal(props) {
  const hasMounted = useMounted();
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(!show), [show]);
  const handleShow = useCallback(() => setShow(!show), [show]);

  // const handlePrivado = (event) => {
  //   const checkbox = event.target;
  //   const isChecked = checkbox.checked;

  //   if (isChecked) {
  //     // El checkbox ha sido chequeado, así que incrementa el contador en 1.
  //     setContador(contador + 1);
  //   } else {
  //     // El checkbox ha sido deschequeado, así que decrementa el contador en 1.
  //     setContador(contador - 1);
  //   }
  // };

  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData Object
    const formData = new FormData(event.target);

    // Data
    if (formData.get("password") === formData.get("confirm-password")) {
      const formDataObj = {
        username: formData.get("user_name"),
        lastname: formData.get("last_name"),
        documenttype: formData.get("document_type"),
        documentnumber: formData.get("document_number"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm-password"),
        options: selectedOptions,
      };
      console.log(formDataObj);
      // setShow(true);
      handleClose();
    } else {
      alert("password are not the same");
    }
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
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <ConfirmModal
          descriptionModal={"Esta seguro que desea crear este Organizador?"}
          titleModal={"¿Esta seguro?"}
        />
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear Organizador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* Form */}
            {hasMounted && (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xl={12} lg={12} xs={12} md={12}>
                    {/* # Web */}
                    <Form.Group className="mb-3" controlId="web">
                      <Form.Label>
                        Web <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="web"
                        placeholder="web"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* Username */}
                    <Form.Group className="mb-3" controlId="user_name">
                      <Form.Label>
                        Nombre <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        placeholder="Pedro"
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* Lastname */}
                    <Form.Group className="mb-3" controlId="last_name">
                      <Form.Label>
                        Apellido <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Celedon"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* # Phone */}
                    <Form.Group className="mb-3" controlId="phone_number">
                      <Form.Label>
                        Numero de teléfono{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="phone_number"
                        placeholder="0424-555-5555"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>
                        Correo <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="pedroceledon@gmail.com"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* # Instagram */}
                    <Form.Group className="mb-3" controlId="instagram">
                      <Form.Label>
                        Instagram <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="instagram"
                        placeholder="Instagram"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* # Facebook */}
                    <Form.Group className="mb-3" controlId="facebook">
                      <Form.Label>
                        Facebook <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="facebook"
                        placeholder="Facebook"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* # Tiktok */}
                    <Form.Group className="mb-3" controlId="tiktok">
                      <Form.Label>
                        Tiktok <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="tiktok"
                        placeholder="Tiktok"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* # Twitter (X) */}
                    <Form.Group className="mb-3" controlId="twitter">
                      <Form.Label>
                        X <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="twitter"
                        placeholder="X"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12} lg={12} xs={12} md={12}>
                    {/* # Club logo */}
                    <Form.Group className="mb-3" controlId="clubLogo">
                      <Form.Label>
                        Logo club <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="clubLogo"
                        accept="image/*"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Button */}
                <Row>
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Button variant="dark" type="submit" className="text-white">
                      Crear Organizador
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
