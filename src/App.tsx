import React from "react";
import { Navbar } from "./Components/Navbar/navbar";
import { Dashboard } from "./Components/Dashboard/bbdashboard";
import { ServiceRequests } from "./Components/Dashboard/service-requests";
import { SearchResults } from "./Components/Dashboard/search-results";
import "../src/Components/Navbar/navbar.css";
import "../src/Components/Dashboard/dashboard.css";
import "../src/Components/Dashboard/service-requests.css";
import "../src/Components/Dashboard/search-results.css";

import { Card } from "./Components/Card/card";

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      &nbsp;
      {/* <ServiceRequests /> */}
<Card/>
      <SearchResults />
    </div>
  );
}

export default App;
