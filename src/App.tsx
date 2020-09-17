import React from "react";
import Header from "./modules/components/Header";
import Layout from "./modules/components/Layout";
import Routing from "./modules/routes/Routing";

type Props = {
  children: React.ReactElement;
};

const App = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
};
export default App;
