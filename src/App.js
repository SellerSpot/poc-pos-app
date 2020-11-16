import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { config } from "./config";
import Landing from "./Landing";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tenantDetails, setTenantDetails] = useState(null);
  useEffect(() => {
    const validateTenant = async () => {
      let tenant = await Axios.get(`${config.baseUrl}/validatetenant?tenant=${window.location.hostname.split(".")[0]}`);
      if (!(tenant?.data?.status)) {
        window.location.replace(config.redirectUrl);
      } else {
        setTenantDetails(JSON.stringify(tenant.data.payload, null, 2))
        setIsLoading(false);
      }
    }
    validateTenant();
  }, [])
  return (
    <>
      {
        isLoading && <div>Please wait loading...</div>
      }
      {
        !isLoading &&
        <Switch>
          <Route exact path="/">
            <Landing tenantDetails={tenantDetails} />
          </Route>
        </Switch>
      }
    </>
  );
}

export default App;
