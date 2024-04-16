"use client";
import React from "react";
// import node module libraries
import { useState } from "react";
import { Col, Row, Card, Form, Table, Alert } from "react-bootstrap";

const Notifications = () => {
  const AlertDismissible = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          To start using Slack for personal notifications, you should first
          connect Slack.
        </Alert>
      );
    }
  };

  return (
    <Row className="mb-8 p-2">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Notificaciones</h4>
          <p className="mb-0 fs-5 text-muted">
            Configuración de notificaciones
          </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Notificaciones</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(Notifications);
