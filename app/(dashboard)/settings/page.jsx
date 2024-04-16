"use client";
// import node module libraries
import { Container } from "react-bootstrap";

// import sub components
import { GeneralSetting } from "sub-components";

export const metadata = {
  title: "Configuración",
  description: "Configuración profile page | Backoffice BussKM",
  keywords: "Configuración, Backoffice, BussKM",
};

const Settings = () => {
  return (
    <Container fluid className="p-6">
      {/* General Settings */}
      <GeneralSetting />
    </Container>
  );
};

export default Settings;
