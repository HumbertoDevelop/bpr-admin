"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormPayMethodModalPost from "modals/FormPayMethodModalPost";
import PayMethodTable from "sub-components/dashboard/PayMethodTable";

export const metadata = {
  title: "Formas de pago | Backoffice BPR",
  description: "Formas de pago | Backoffice BPR",
  keywords: "Formas de pago, Backoffice, Padel",
};

const Sponsors = () => {
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
                Crear Forma de Pago
              </Button>
              <FormPayMethodModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* PayMethod table  */}
              <PayMethodTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Sponsors);
