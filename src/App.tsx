import "./App.css";
import { Frontpage } from "./app/frontpage/Frontpage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Frontpage />
    </QueryClientProvider>
  );
}

export default App;
