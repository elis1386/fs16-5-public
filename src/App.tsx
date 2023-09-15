import React from "react";
import Header from "./components/Header";
import { Box, Stack } from "@mui/system";
import ListBrew from "./components/ListBrew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SingleBrew from "./components/SingleBrew";

const App = () => {
  return (
    <Router>
    <Box>
      <Header />
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        margin={2}
      >
        <Routes>
          <Route path="/" element={<ListBrew />} />
          <Route path="/brewery/:id" element={<SingleBrew />} />
        </Routes>
      </Stack>
    </Box>
  </Router>
  );
};

export default App;
