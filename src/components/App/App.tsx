import React, { FunctionComponent, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "components/App/Layout/Layout";
import Loading from "components/App/Loading/Loading";
// import Head from "components/App/Head/Head";
// import usePageTracking from "utils/usePageTracking";

const Legal = lazy(() => import("components/App/Legal/Legal"));

const App: FunctionComponent = () => {
  // usePageTracking();

  return (
    <>
      {/* <Head /> */}
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/legal" component={Legal} />
            <Route path="/" />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
