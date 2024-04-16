"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormMatchsModalPost from "modals/FormMatchsModalPost";
import MatchTable from "sub-components/dashboard/MatchTable";

export const metadata = {
  title: "Partidos | Backoffice BPR",
  description: "Partidos | Backoffice BPR",
  keywords: "Partidos, Backoffice, Padel",
};

const Categories = () => {
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
                Crear un Partido
              </Button>
              <FormMatchsModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Reservations table  */}
              <MatchTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Categories);
