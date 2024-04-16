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

    // Data Object
    const formDataObj = {
      full_name: formData.get("full_name"),
      genre: formData.get("genre"),
      phone_number: formData.get("phone_number"),
      email: formData.get("email"),
      dni: formData.get("dni"),
      nacionality: formData.get("nacionality"),
      born_country: formData.get("born_country"),
      address: formData.get("address"),
      residence_country: formData.get("residence_country"),
      state: formData.get("state"),
      city: formData.get("city"),
      height: formData.get("height"),
      position: formData.get("position"),
      hand: formData.get("hand"),
      middle_body: formData.get("middle_body"),
      full_body: formData.get("full_body"),
    };
    console.log(formDataObj);
    handleClose();

    postPlayer(formDataObj);
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
          descriptionModal={"Esta seguro que desea crear este jugador?"}
          titleModal={"¿Esta seguro?"}
        />
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear Jugador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* Form create */}
            {hasMounted && (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* Fullname */}
                    <Form.Group className="mb-3" controlId="full_name">
                      <Form.Label>
                        Nombre completo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="full_name"
                        placeholder="Pedro Celedon Martinez Gomez"
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* Genre */}
                    <Form.Group className="mb-3" controlId="genre">
                      <Form.Label>
                        Genero <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Select
                        name="genre"
                        required
                        onChange={handleInputChange}
                        onInvalid={(e) => e.target.setCustomValidity("")}
                      >
                        <option value="">Seleccione un género</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  {/* Phone number */}
                  <Col xl={6} lg={6} xs={12} md={12}>
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
                  <Col xl={6} lg={6} xs={12} md={12}>
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
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # DNI */}
                    <Form.Group className="mb-3" controlId="dni">
                      <Form.Label>
                        Documento legal{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="dni"
                        placeholder="Documento legal"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Nacionality */}
                    <Form.Group className="mb-3" controlId="nacionality">
                      <Form.Label>
                        Nacionalidad <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="nacionality"
                        required
                        onChange={handleInputChange}
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="venezuela">Venezuela</option>
                        <option value="inglaterra">Inglaterra</option>
                        <option value="australia">Australia</option>
                        <option value="francia">Francia</option>
                        <option value="alemania">Alemania</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Born country */}
                    <Form.Group className="mb-3" controlId="born_country">
                      <Form.Label>
                        Pais de nacimiento{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="born_country"
                        placeholder="España"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Address */}
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>
                        Dirección <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder="AV. 5 de Julio, Edif. 5 de Julio, Piso 5, Apto 5"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Residence country */}
                    <Form.Group className="mb-3" controlId="residence_country">
                      <Form.Label>
                        Pais de residencia{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="residence_country"
                        placeholder="Inglaterra"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # State */}
                    <Form.Group className="mb-3" controlId="state">
                      <Form.Label>
                        Pais de residencia{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        placeholder="Provincia de barcelona"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # City */}
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Label>
                        Ciudad <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder="Barcelona"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Height */}
                    <Form.Group className="mb-3" controlId="height">
                      <Form.Label>
                        Altura <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="height"
                        placeholder="130cm"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Position */}
                    <Form.Group className="mb-3" controlId="position">
                      <Form.Label>
                        Posición <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="position"
                        required
                        onChange={handleInputChange}
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="campo_derecho">Campo derecho</option>
                        <option value="campo_izquierdo">Campo izquierdo</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Hand */}
                    <Form.Group className="mb-3" controlId="hand">
                      <Form.Label>
                        Mano preferida{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="hand"
                        required
                        onChange={handleInputChange}
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="diestro">Diestro</option>
                        <option value="zurdo">Zurdo</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Middle-body photo */}
                    <Form.Group className="mb-3" controlId="middle_body">
                      <Form.Label>
                        Foto medio cuerpo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="middle_body"
                        accept="image/*"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    <Form.Group className="mb-3" controlId="full_body">
                      <Form.Label>
                        Foto cuerpo completo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="full_body"
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
                      Crear Jugador
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
