import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Container maxW="1400">
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
