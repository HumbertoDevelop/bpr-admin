"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormCategoryModalPost from "modals/FormCategoryModalPost";
import CategoryTable from "sub-components/dashboard/CategoryTable";

export const metadata = {
  title: "Categorias | Backoffice BPR",
  description: "Categorias | Backoffice BPR",
  keywords: "Categorias, Backoffice, Padel",
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
                Crear un Categoria
              </Button>
              <FormCategoryModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Reservations table  */}
              <CategoryTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Categories);
