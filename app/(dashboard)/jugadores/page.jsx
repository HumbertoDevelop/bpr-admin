"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormPlayerModal from "modals/FormPlayerModalPost";
import PlayerTable from "sub-components/dashboard/PlayerTable";

export const metadata = {
  title: "Nuevo Jugador",
  description: "Nuevos Jugadores | Backoffice BPR",
  keywords: "Nuevos Jugadores, Backoffice, Padel",
};

const NuevoJugador = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Container className="px-4">
        <div className="pt-4">
          <Row>
            <Col xl={4} lg={4} md={4} xs={4}>
              <Button
                variant="dark"
                className="me-1 text-white mb-4"
                onClick={() => setModalShow(true)}
              >
                Crear un jugador
              </Button>
              <FormPlayerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            {/* card  */}
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Player table  */}
              <PlayerTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(NuevoJugador);
