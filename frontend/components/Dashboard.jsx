import React from "react";

import Meta from "@components/Meta";
import { Layout, Container, Main } from "@components/Layout";
import Card from "@components/Card";
import CurrentUser from "@components/CurrentUser";
import Sidebar from "@components/Sidebar";

function Dashboard() {
  return (
    <CurrentUser>
      {({ data }) => {
        return (
          <Layout>
            <Meta title="Dashboard - Dinero" />
            <Main as="main">
              <Sidebar />
              <Container>
                <Card px={3} py={4} boxShadow="md">
                  User logged
                </Card>
              </Container>
            </Main>
          </Layout>
        );
      }}
    </CurrentUser>
  );
}

export default Dashboard;