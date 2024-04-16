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
import FormParadasModalEdit from "modals/FormParadasModalEdit";
import ParadasData from "data/route/ParadasData";
import { Input, Table } from "antd";

const ParadasTable = () => {
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

  const ConfirmModal = React.memo((props) => {
    return (
      <Fragment>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              ¿Esta seguro?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Eliminar Parada</Modal.Body>
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
        name: "John Doe",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "2",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "3",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "4",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "5",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "6",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "7",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "8",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "9",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "10",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "11",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      {
        key: "12",
        name: "Jane Smith",
        route: "Ruta A",
        acciones: <ActionMenu />,
      },
      // Add more data entries as needed
    ],
    []
  );

  const columns = [
    {
      title: "Nombre parada",
      dataIndex: "name",
      key: "name",
      filters: [
        { text: "John Doe", value: "John Doe" },
        { text: "Jane Smith", value: "Jane Smith" },
      ],
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: "Ruta",
      dataIndex: "route",
      key: "route",
    },
    { title: "Acciones", dataIndex: "acciones", key: "acciones" },
  ];

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
      <FormParadasModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ConfirmModal />
      <Container>
        <Row className="mt-4">
          <Card.Header className="bg-white py-4">
            <h4 className="mb-0">Paradas registradas </h4>
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

export default React.memo(ParadasTable);
