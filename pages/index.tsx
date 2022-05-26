import type { NextPage } from "next";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import FormValidation from "../components/ChakraFormik";

import { Box, Text, Flex } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <Box bg="black">
      <FormValidation />
    </Box>
  );
};

export default Home;
