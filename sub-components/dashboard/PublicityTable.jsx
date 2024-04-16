// import node module libraries
import React, { Fragment, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {
  Card,
  Dropdown,
  Modal,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { MoreVertical } from "react-feather";

// import required data files
import FormPublicityModalEdit from "modals/FormPublictyModalEdit";

// import required data files
import PublicityData from "data/dashboard/PublicityData";
import { StatRightTopIcon } from "widgets";

const PublicityTable = () => {
  // modal edit state
  const [modalShow, setModalShow] = useState(false);
  // modal confirm state
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(!show), [show]);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="text-muted text-primary-hover"
    >
      {children}
    </Link>
  ));

  CustomToggle.displayName = "CustomToggle";



  return (
    <Container className="mx-0 px-0 mb-4 mb-md-0">
      <FormPublicityModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        buttonText={"Editar"}
        titleModal={"Editar Publicidad"}
      />
      
      <Row>
        {PublicityData.map((item, index) => {
          return (
            <Col
              xl={3}
              lg={6}
              md={12}
              xs={12}
              className="mt-6" style={{ cursor: "pointer" }}
              key={index}
              onClick={() => setModalShow(true)}
            >
              <StatRightTopIcon info={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default React.memo(PublicityTable);
