import { Nav, NavLink } from "../components/Nav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/workshops">Workshops</NavLink>
        <NavLink href="/admin/participants">Participants</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
