import React, { lazy, Suspense } from "react";

//internal lib imports
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import MasterLayout from "../../components/MasterLayout/MasterLayout";
const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard"));
const DashboardPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Dashboard Page">
        <Dashboard />
      </MasterLayout>
    </Suspense>
  );
};

export default DashboardPage;
