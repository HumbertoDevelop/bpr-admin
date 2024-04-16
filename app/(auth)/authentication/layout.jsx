
import IAuthLayoutProps from "Interfaces/IAuthLayoutProps";
import { ClientComponentAuth } from "components/ClientComponentAuth";

export default function AuthLayout({ children }) {
  return <ClientComponentAuth>{children}</ClientComponentAuth>;
}
