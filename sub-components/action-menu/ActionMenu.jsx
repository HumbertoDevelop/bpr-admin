import { Dropdown } from "bootstrap";
import { MoreVertical } from "react-feather";

const ActionMenu = () => {
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
};

export default ActionMenu;
