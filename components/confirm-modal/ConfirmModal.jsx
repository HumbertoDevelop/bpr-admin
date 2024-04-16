"use client";
import React from "react";
import { Button, Modal } from "bootstrap";
import { Fragment } from "react";

const ConfirmModal = React.memo(
  ({ show, titleModal, descriptionModal, handleClose }) => {
    // if show is false, return null
    if (!show) {
      return false;
    }
    return (
      <Fragment>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{descriptionModal}</Modal.Body>
          <Modal.Footer>
            <Button variant="success">Confirmar</Button>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
);

ConfirmModal.displayName = "ConfirmModal";

export default ConfirmModal;
