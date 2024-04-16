"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import ManagerTable from "sub-components/dashboard/ManagerTable";
import FormManagerModalPost from "modals/FormManagerModalPost";

export const metadata = {
  title: "Crear Organizador",
  description: "Crear Organizador | ADMIN BPR",
  keywords: "ADMIN, Padel",
};

const NuevoOrganizador = () => {
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
                Crear un organizador
              </Button>
              <FormManagerModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            {/* card  */}
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Player table  */}
              <ManagerTable/>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(NuevoOrganizador);
