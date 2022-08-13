import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import MasterLayout from "../../components/MasterLayout/MasterLayout";

const Profile = lazy(() => import("../../components/Profile/Profile"));

const ProfilePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProfilePage;
