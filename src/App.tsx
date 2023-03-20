import { useState, useEffect } from "react";
import buildHasuraProvider from "ra-data-hasura";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import { CssBaseline } from "@mui/material";
import { Fragment } from "react";
import { MenuList } from "./modules/components/menu-list/menu-list.component";
import { MenuEdit } from "./modules/components/menu-edit/menu-edit.component";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        clientOptions: { uri: "http://localhost:8080/v1/graphql" },
      });
      setDataProvider(() => dp);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) {
    return <Loading />;
  }

  return (
    <Fragment>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource name="menu" list={MenuList} edit={MenuEdit} />
      </Admin>
    </Fragment>
  );
};
