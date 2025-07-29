import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "@/components/header";
import { Playground } from "@/components/playground";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        <main className="min-h-screen">
          <Header />
          <Playground />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
