import { Box } from "@mui/material";
import "./App.css";
import Call2Action from "./Call2Action";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Hero />
      <ProductOne />
      <ProductTwo />
      <Call2Action />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
