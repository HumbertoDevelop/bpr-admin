"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormInscriptionsModalPost from "modals/FormInscriptionsModalPost";
import InscriptionTable from "sub-components/dashboard/InscriptionTable";

export const metadata = {
  title: "Inscripciones | Backoffice BPR",
  description: "Inscripciones | Backoffice BPR",
  keywords: "Inscripciones, Backoffice, Padel",
};

const Inscriptions = () => {
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
                Crear un Inscripción
              </Button>
              <FormInscriptionsModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Inscriptions table  */}
              <InscriptionTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Inscriptions);
