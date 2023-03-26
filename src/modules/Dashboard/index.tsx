import React from 'react';
import DashboardLayout from "@/layouts/DashboardLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Breadcrumbs title='Dashboard'/>
    </DashboardLayout>
  );
}

export default Dashboard;