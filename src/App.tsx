import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
const router = createRouter({ routeTree });
// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const theme = extendTheme({
  fonts: {
    body: '"Fira Code", monospace',
    heading: '"Fira Code", monospace',
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
