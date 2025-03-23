import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import ContactUs from "./routes/contactus/contactus.component";
import Shop from "./routes/shop/shop.component";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./theme";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
