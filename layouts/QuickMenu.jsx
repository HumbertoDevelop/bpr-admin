import React from "react";
// import node module libraries
import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Row, Col, Dropdown, ListGroup, Modal, Button } from "react-bootstrap";
import { logoutAuth } from "../services/auth/logout"; // function to validate token

// simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// import data files
import NotificationList from "data/Notification";

// import hooks
import useMounted from "hooks/useMounted";

const QuickMenu = () => {
  const hasMounted = useMounted();
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => {
    setShow(!show);
    // logout function
    logoutAuth();
  }, [show]);
  const handleShow = useCallback(() => setShow(!show), [show]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  // Modal confirm
  const ConfirmModal = React.memo((props) => {
    return (
      <Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.descriptionModal}</Modal.Body>
          <Modal.Footer>
            <Link href={"/authentication/sign-in"}>
              <Button variant="success" onClick={handleClose}>
                Confirmar
              </Button>
            </Link>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  });

  ConfirmModal.displayName = "ConfirmModal";

  const Notifications = React.memo(() => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? "bg-light" : ""}
                key={index}
              >
                <Row>
                  <Col>
                    <Link href="#" className="text-muted">
                      <h5 className=" mb-1">{item.sender}</h5>
                      <p className="mb-0"> {item.message}</p>
                    </Link>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  });

  Notifications.displayName = "Notifications";

  const QuickMenuDesktop = React.memo(() => {
    return (
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-auto d-flex nav-top-wrap"
      >
        <ConfirmModal
          descriptionModal={"¿Esta seguro que desea Salir?"}
          titleModal={"¿Esta seguro?"}
        />
        <Dropdown as="li" className="stopevent">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          >
            <i className="fe fe-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notificaciones</span>
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/notification-history"
                  className="text-link fw-semi-bold"
                >
                  Ver Todas
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/user_1.png"
                className="rounded-circle"
                width={300}
                height={300}
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu dropdown-menu-end"
            align="end"
            aria-labelledby="dropdownUser"
            show
          >
            <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=" ">
              <div className="lh-1 ">
                <h5 className="mb-1"> John E. Grainger</h5>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </Dropdown.Item>
            {/* <Dropdown.Item eventKey="2" href="/settings"> */}
            <Link href="/settings" className="w-100 d-block p-1 px-3 text-dark">
              <i className="fe fe-user me-2"></i> Editar Perfil
            </Link>
            {/* </Dropdown.Item> */}
            {/* <Dropdown.Item> */}
            <Link
              href="#"
              className="w-100 d-block p-1 px-3 text-dark"
              onClick={handleShow}
            >
              <i className="fe fe-power me-2"></i> Salir
            </Link>
            {/* </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    );
  });

  QuickMenuDesktop.displayName = "QuickMenuDesktop";

  const QuickMenuMobile = React.memo(() => {
    return (
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-auto d-flex nav-top-wrap"
      >
        <ConfirmModal
          descriptionModal={"¿Esta seguro que desea Salir?"}
          titleModal={"¿Esta seguro?"}
        />
        <Dropdown as="li" className="stopevent">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          >
            <i className="fe fe-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="dropdownNotification"
            align="end"
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notifications</span>
                <Link href="/" className="text-muted">
                  <span className="align-middle">
                    <i className="fe fe-settings me-1"></i>
                  </span>
                </Link>
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/notification-history"
                  className="text-link fw-semi-bold"
                >
                  Ver todas
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/user_1.png"
                className="rounded-circle"
                width={300}
                height={300}
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu dropdown-menu-end "
            align="end"
            aria-labelledby="dropdownUser"
          >
            <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=" ">
              <div className="lh-1 ">
                <h5 className="mb-1"> John E. Grainger</h5>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </Dropdown.Item>
            {/* <Dropdown.Item eventKey="2" href="/settings"> */}
            <Link href="/settings" className="w-100 d-block p-1 px-3 text-dark">
              <i className="fe fe-user me-2"></i> Editar Perfil
            </Link>
            {/* </Dropdown.Item> */}
            {/* <Dropdown.Item> */}
            <Link
              href="#"
              className="w-100 d-block p-1 px-3 text-dark"
              onClick={handleShow}
            >
              <i className="fe fe-power me-2"></i> Salir
            </Link>
            {/* </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    );
  });

  QuickMenuMobile.displayName = "QuickMenuMobile";

  return (
    <Fragment>
      {hasMounted && isDesktop ? <QuickMenuDesktop /> : <QuickMenuMobile />}
    </Fragment>
  );
};

export default QuickMenu;
