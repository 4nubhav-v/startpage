import Container from "./components/Container.tsx";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
