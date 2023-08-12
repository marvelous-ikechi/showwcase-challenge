import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StudentProvider } from "./context/StudentContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StudentProvider>
        <Component {...pageProps} />
      </StudentProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
