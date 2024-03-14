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
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchPreviousAccountNumbers } from "../../api/payment.ts";

// @ts-expect-error Ignore unused accountId
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PaymentPage = ({ accountId }: { accountId: string }) => {
  return (
    <>
      <main>
        <Container justifyContent={"center"} mt={10}>
          <PaymentContainer />
        </Container>
      </main>
    </>
  );
};

const PaymentContainer = () => {
  const query = useQuery({
    queryKey: ["previous-accounts"],
    queryFn: () => fetchPreviousAccountNumbers(true),
  });

  if (query.isLoading) {
    return <p>Loading</p>;
  }
  if (query.isError) {
    return (
      <ErrorComponent
        onRetry={() => query.refetch()}
        isLoading={query.isLoading}
      />
    );
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
        <Button isLoading={false} onClick={() => undefined} colorScheme="blue">
          Overfør
        </Button>
      </Flex>
    </>
  );
};

const ErrorComponent = ({
  onRetry,
  isLoading,
}: {
  onRetry: () => void;
  isLoading: boolean;
}) => {
  return (
    <div>
      <Text>En teknisk feil har oppstått.</Text>
      <Button isLoading={isLoading} onClick={onRetry}>
        Prøv på nytt
      </Button>
    </div>
  );
};
