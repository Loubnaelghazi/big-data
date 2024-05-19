import React, { useEffect, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Card from "./components/Card";
import logo from "./assets/react.svg";
import graph from "./assets/graphs.png";
import table from "./assets/tables.png";
// Make sure to import Outlet from the correct path

export default function App() {
  const location = useLocation();
  const [showOutlet, setShowOutlet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current path has changed
    // You can customize this logic based on your requirements
    if (location.pathname !== "/") {
      setShowOutlet(true);
    } else {
      setShowOutlet(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {!showOutlet ? (
        <>
          <Layout className="flex gap-10 justify-center">
            <Card
              img={table}
              title="Results of Test Data"
              description="Examining test results ! "
              button="Click Me"
              onclick={(e) => {
                navigate("/tab");
              }}
            />
            <Card
              img={graph}
              title="Visualization of The Data"
              description="You can visualize your data in the form of graphs here ! "
              button="Click Me"
              onclick={(e) => {
                navigate("/graph");
              }}
            />
          </Layout>
        </>
      ) : (
        <Outlet />
      )}

      {!showOutlet ? <Footer /> : null}
    </>
  );
}
