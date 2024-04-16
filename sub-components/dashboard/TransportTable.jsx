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

import FormTransportModalEdit from "modals/FormTransportModalEdit";

// import required data files
import { Input, Table } from "antd";

const TransportTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(!show), [show]);
  const handleShow = useCallback(() => setShow(!show), [show]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  const ActionMenu = useCallback(() => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-muted" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={"end"}>
          <Dropdown.Item eventKey="1" onClick={() => setModalShow(true)}>
            Editar
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={handleShow}>
            Eliminar
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }, [handleShow, CustomToggle]);

  const ConfirmModal = React.memo(() => {
    return (
      <Fragment>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              ¿Esta seguro?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Eliminar Transporte</Modal.Body>
          <Modal.Footer>
            <Button variant="success">Confirmar</Button>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  });

  ConfirmModal.displayName = "ConfirmModal";

  // Define your data array here
  const data = useMemo(
    () => [
      {
        key: "1",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "2",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "3",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "4",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "5",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "6",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "7",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "8",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "9",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "10",
        mark: "Ford",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      {
        key: "11",
        mark: "Chevrolet",
        color: "Red",
        license: 41313515451,
        year: "2004",
        model: "ENCAVA JD",
        private: "Privado",
        able: "Disponible",
        disabled_seatings: 4,
        driver: "Pedro Romero",
        route: "El valle",
        acciones: <ActionMenu />,
      },
      // Add more data entries as needed
    ],
    []
  );

  const columns = [
    {
      title: "Marca",
      dataIndex: "mark",
      key: "mark",
      filters: [
        { text: "Ford", value: "Ford" },
        { text: "Chevrolet", value: "Chevrolet" },
      ],
      onFilter: (value, record) => record.mark.includes(value),
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Placa",
      dataIndex: "license",
      key: "license",
    },
    {
      title: "Año",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Modelo",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Privado",
      dataIndex: "private",
      key: "private",
    },
    {
      title: "Disponible",
      dataIndex: "able",
      key: "able",
    },
    {
      title: "Asientos discapacitados",
      dataIndex: "disabled_seatings",
      key: "disabled_seatings",
    },
    {
      title: "Conductor",
      dataIndex: "driver",
      key: "driver",
    },
    {
      title: "Ruta",
      dataIndex: "route",
      key: "route",
    },
    { title: "Acciones", dataIndex: "acciones", key: "acciones" },
  ];

  // Define handle search function
  const handleSearch = useCallback(
    (e) => {
      setSearchText(e.target.value);
      const filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredData(filtered);
    },
    [data]
  );
  return (
    <Card className="h-100">
      <FormTransportModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ConfirmModal />
      <Container>
        <Row className="mt-4">
          <Card.Header className="bg-white py-4">
            <h4 className="mb-0">Transportes registrados </h4>
          </Card.Header>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Form.Group className="mt-3" controlId="tableInput">
              <Form.Label className="fw-bold">Buscador</Form.Label>
            </Form.Group>
            <Input.Search
              placeholder="Buscar"
              onChange={handleSearch}
              style={{ width: 200 }}
            />
          </Col>
          <Table
            columns={columns}
            dataSource={searchText ? filteredData : data}
            pagination={{
              defaultPageSize: 8,
              showSizeChanger: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
          />
        </Row>
      </Container>
    </Card>
  );
};

export default React.memo(TransportTable);
