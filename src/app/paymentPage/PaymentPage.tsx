import {
  Alert,
  AlertIcon,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPreviousAccountNumbers, postPayment } from "../../api/payment.ts";

export const PaymentPage = ({ accountId }: { accountId: string }) => {
  const mutation = useMutation({ mutationFn: postPayment });
  const query = useQuery({
    queryKey: ["previous-accounts"],
    queryFn: fetchPreviousAccountNumbers,
    enabled: false,
  });
  console.log(query);
  return (
    <>
      <main>
        <Container justifyContent={"center"}>
          <Heading mb={5} mt={10} textAlign={"center"}>
            Betal fra konto
          </Heading>
          <Flex rowGap={10} flexDirection={"column"}>
            <FormControl>
              <FormLabel>Fra konto</FormLabel>
              <Select placeholder="Brukskonto" size="lg" />
            </FormControl>
            <FormControl>
              <FormLabel>Til konto</FormLabel>
              <Button
                isLoading={query.isFetching}
                onClick={() => query.refetch()}
                mb={6}
              >
                Hent sist brukte kontonummer
              </Button>
              {query.isError ? (
                <Alert status="error" mb={6}>
                  <AlertIcon />
                  There was an error processing your request
                </Alert>
              ) : null}
              <Input placeholder="Kontonummer" />
            </FormControl>
            <FormControl>
              <FormLabel>Beløp</FormLabel>
              <Input placeholder="Beløp" />
            </FormControl>
            <Button
              isLoading={mutation.isPending}
              onClick={() => mutation.mutate(accountId)}
              colorScheme="blue"
            >
              Overfør
            </Button>
          </Flex>
        </Container>
      </main>
    </>
  );
};
