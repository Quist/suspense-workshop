import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchAddressInfo, fetchBasicInfo } from "../../api/about.ts";
import { Suspense } from "react";

export const AboutPage = () => {
  return (
    <>
      <main>
        <Container justifyContent={"center"}>
          <Heading mb={5} mt={10} textAlign={"center"}>
            Om deg
          </Heading>
          <Suspense fallback={<p>Laster</p>}>
            <BasicInformation />
            <AddressInfo />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

const BasicInformation = () => {
  const query = useSuspenseQuery({
    queryFn: fetchBasicInfo,
    queryKey: ["basic-info"],
  });
  return (
    <Center>
      <Box
        role={"group"}
        p={2}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Stack align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {query.data.firstName} {query.data.lastName}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Alder: {query.data.age}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};

const AddressInfo = () => {
  const query = useSuspenseQuery({
    queryFn: fetchAddressInfo,
    queryKey: ["address-info"],
  });
  return (
    <Center mt={20}>
      <Box
        role={"group"}
        p={2}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Stack align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {query.data.street}
          </Text>
          <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
            {query.data.postal} {query.data.city}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};
