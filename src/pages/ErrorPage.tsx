import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box ml={5}>
      <Heading fontSize="5xl">Oops...</Heading>
      <Text fontSize="2xl">
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "Something went wrong."}
      </Text>
    </Box>
  );
};

export default ErrorPage;
