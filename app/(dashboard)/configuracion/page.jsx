"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormPublicityModalPost from "modals/FormPublicityModalPost";
import PublicityTable from "sub-components/dashboard/PublicityTable";

export const metadata = {
  title: "Publicidades",
  description: "Publicidades | Backoffice BPR",
  keywords: "Publicidades, Backoffice, Padel",
};

const Publicidad = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Container className="px-4">
        <div className="pt-4">
          <Row>
            <Col xl={4} lg={4} md={4} xs={4}>
              <Button
                variant="dark"
                className="me-1 text-white"
                onClick={() => setModalShow(true)}
              >
                Crear una publicidad
              </Button>
              <FormPublicityModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            {/* card  */}
            <Col xl={12} lg={12} md={12} xs={12}>
              <PublicityTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Publicidad);
