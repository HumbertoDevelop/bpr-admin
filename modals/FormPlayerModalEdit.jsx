// Hooks
import React from "react";
import useMounted from "hooks/useMounted";
import { Fragment, useCallback, useState } from "react";

const { Modal, Button, Form, Row, Col } = require("react-bootstrap");

export default function FormPlayerModalEdit(props) {
  const hasMounted = useMounted();
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(!show), [show]);

  const handleActive = (event) => {
    const checkbox = event.target;
    const isChecked = checkbox.checked;

    if (isChecked) {
      // El checkbox ha sido chequeado, así que incrementa el contador en 1.
      setContador(contador + 1);
    } else {
      // El checkbox ha sido deschequeado, así que decrementa el contador en 1.
      setContador(contador - 1);
    }
  };

  const handleApproved = (event) => {
    const checkbox = event.target;
    const isChecked = checkbox.checked;

    if (isChecked) {
      // El checkbox ha sido chequeado, así que incrementa el contador en 1.
      setContador(contador + 1);
    } else {
      // El checkbox ha sido deschequeado, así que decrementa el contador en 1.
      setContador(contador - 1);
    }
  };

  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData Object
    const formData = new FormData(event.target);

    // Data Object
    const formDataObj = {
      // Player name
      player_name: formData.get("player_name"),
      // Player genre
      player_genre: formData.get("player_genre"),
      // Player DNI
      player_dni: formData.get("player_dni"),
      // Player profile picture
      player_picture_profile: formData.get("player_picture_profile"),
      // Player phone number
      player_phone_number: formData.get("player_phone_number"),
      // Player email
      player_email: formData.get("player_email"),
      // Player nationality
      player_nacionality: formData.get("player_nacionality"),
      // Player country of birth
      player_born_country: formData.get("player_born_country"),
      // Player address
      player_address: formData.get("player_address"),
      // Player country of residence
      player_residence_country: formData.get("player_residence_country"),
      // Player state
      player_state: formData.get("player_state"),
      // Player city
      player_city: formData.get("player_city"),
      // Player middle body photo
      player_middle_body: formData.get("player_middle_body"),
      // Player full body photo
      player_full_body: formData.get("player_full_body"),
      // Player height
      player_height: formData.get("player_height"),
      // Player hand
      player_hand: formData.get("player_hand"),
      // Player position
      player_position: formData.get("player_position"),
      // Player approval status
      player_approved: formData.get("player_approved"),
      // Player active status
      player_active: formData.get("player_active"),
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
          descriptionModal={"Esta seguro que desea editar este jugador?"}
          titleModal={"¿Esta seguro?"}
        />
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar Jugador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* Form Edit */}
            {hasMounted && (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* Fullname */}
                    <Form.Group className="mb-3" controlId="player_name">
                      <Form.Label>
                        Nombre completo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_name"
                        placeholder="Pedro Celedon Martinez Gomez"
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* Genre */}
                    <Form.Group className="mb-3" controlId="player_genre">
                      <Form.Label>
                        Genero <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Select
                        name="player_genre"
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
                    <Form.Group
                      className="mb-3"
                      controlId="player_phone_number"
                    >
                      <Form.Label>
                        Numero de teléfono{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_phone_number"
                        placeholder="0424-555-5555"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="player_email">
                      <Form.Label>
                        Correo <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="player_email"
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
                    <Form.Group className="mb-3" controlId="player_dni">
                      <Form.Label>
                        Documento legal{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_dni"
                        placeholder="Documento legal"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Nacionality */}
                    <Form.Group className="mb-3" controlId="player_nacionality">
                      <Form.Label>
                        Nacionalidad <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="player_nacionality"
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
                    <Form.Group
                      className="mb-3"
                      controlId="player_born_country"
                    >
                      <Form.Label>
                        Pais de nacimiento{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_born_country"
                        placeholder="España"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Address */}
                    <Form.Group className="mb-3" controlId="player_address">
                      <Form.Label>
                        Dirección <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_address"
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
                    <Form.Group
                      className="mb-3"
                      controlId="player_residence_country"
                    >
                      <Form.Label>
                        Pais de residencia{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_residence_country"
                        placeholder="Inglaterra"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # State */}
                    <Form.Group className="mb-3" controlId="player_state">
                      <Form.Label>
                        Pais de residencia{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_state"
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
                    <Form.Group className="mb-3" controlId="player_city">
                      <Form.Label>
                        Ciudad <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_city"
                        placeholder="Barcelona"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    {/* # Height */}
                    <Form.Group className="mb-3" controlId="player_height">
                      <Form.Label>
                        Altura <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="player_height"
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
                    <Form.Group className="mb-3" controlId="player_position">
                      <Form.Label>
                        Posición <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="player_position"
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
                    <Form.Group className="mb-3" controlId="player_hand">
                      <Form.Label>
                        Mano preferida{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="player_hand"
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
                    <Form.Group className="mb-3" controlId="player_middle_body">
                      <Form.Label>
                        Foto medio cuerpo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="player_middle_body"
                        accept="image/*"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} xs={12} md={12}>
                    <Form.Group className="mb-3" controlId="player_full_body">
                      <Form.Label>
                        Foto cuerpo completo{" "}
                        <span style={{ color: "#FF0000" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="player_full_body"
                        accept="image/*"
                        required
                        onInvalid={handleInputChange}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* Active */}
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="player_active"
                      name="player_active"
                    >
                      <Form.Check
                        type="checkbox"
                        id="player_active"
                        name="player_active"
                        value="0"
                        className="mx-2"
                        onChange={handleActive}
                      >
                        <Form.Check.Input type="checkbox" name="active" />
                        <Form.Check.Label>Jugador Activo</Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </Col>
                  <Col xl={3} lg={3} xs={3} md={3}>
                    {/* Approved */}
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="player_approved"
                      name="player_approved"
                    >
                      <Form.Check
                        type="checkbox"
                        id="player_approved"
                        name="player_approved"
                        value="0"
                        className="mx-2"
                        onChange={handleApproved}
                      >
                        <Form.Check.Input
                          type="checkbox"
                          name="player_approved"
                        />
                        <Form.Check.Label>Jugador Aprovado</Form.Check.Label>
                      </Form.Check>
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
