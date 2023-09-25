import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

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
