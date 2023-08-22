import React from "react";
import { Navbar } from "./Components/Navbar/navbar";
import { Dashboard } from "./Components/Dashboard/bbdashboard";
import { ServiceRequests } from "./Components/Dashboard/service-requests";
import "../src/Components/Navbar/navbar.css";
import "../src/Components/Dashboard/dashboard.css";
import "../src/Components/Dashboard/service-requests.css";

function App() {
  return (
    <div>
      <Navbar />
      &nbsp; <Dashboard />
      <ServiceRequests />
    </div>
  );
}

export default App;
