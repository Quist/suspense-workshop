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
  Text,
  Select,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPreviousAccountNumbers, postPayment } from "../../api/payment.ts";
import { ErrorBoundary } from "react-error-boundary";

export const PaymentPage = ({ accountId }: { accountId: string }) => {
  return (
    <>
      <main>
        <Container justifyContent={"center"} mt={10}>
          <ErrorBoundary
            fallback={
              <>
                <p>Oppps. En teknisk feil skjedde</p>
              </>
            }
          >
            <PaymentContainer />
          </ErrorBoundary>
        </Container>
      </main>
    </>
  );
};

const PaymentContainer = () => {
  const mutation = useMutation({ mutationFn: postPayment });
  const query = useQuery({
    queryKey: ["previous-accounts"],
    queryFn: () => fetchPreviousAccountNumbers(true),
  });

  if (query.isLoading) {
    return <p>Loading</p>;
  }
  if (query.isError) {
    return <ErrorComponent />;
  }
  return (
    <>
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
          onClick={() => mutation.mutate("accountId")}
          colorScheme="blue"
        >
          Overfør
        </Button>
      </Flex>
    </>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <Text>En teknisk feil har oppstått.</Text>
    </div>
  );
};
