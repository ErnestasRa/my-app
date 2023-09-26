import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage, FilmsPage } from "./pages";
import { SideNavBar } from "./components";
import { DataContextProvider } from "./context/DataContext";
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <SideNavBar />
      <BrowserRouter>
        <Routes>
          {/* text is hardcoded, yes I know lol */}
          <Route path="/" element={<FilmsPage />} />
          <Route path="/about" element={<AboutPage text="any random text" />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
};

export default App;
