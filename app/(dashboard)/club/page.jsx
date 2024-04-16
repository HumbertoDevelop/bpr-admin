"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// import hooks
import { Fragment, useState } from "react";
import FormClubsModalPost from "modals/FormClubsModalPost";
import ClubTable from "sub-components/dashboard/ClubsTable";

export const metadata = {
  title: "Club | Backoffice BPR",
  description: "Club | Backoffice BPR",
  keywords: "Club, Backoffice, Padel",
};

const Club = () => {
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
                Crear un Club
              </Button>
              <FormClubsModalPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            
            <Col xl={12} lg={12} md={12} xs={12}>
              {/* Club table  */}
              <ClubTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default React.memo(Club);
