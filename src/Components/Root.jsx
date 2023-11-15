import { Outlet } from "react-router-dom";
import Layout from "./UI/Layout";

export default function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
