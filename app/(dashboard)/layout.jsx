
// import theme style scss file
import "styles/theme.scss";

import { ClientComponentDashboard } from "components/ClientComponentDashboard";

export default function DashboardLayout({ children }) {

  return <ClientComponentDashboard>{children}</ClientComponentDashboard>;
}
