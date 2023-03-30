import { useState, useEffect } from "react";
import buildHasuraProvider from "ra-data-hasura";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import { CssBaseline } from "@mui/material";
import { Fragment } from "react";
import { MenuList } from "@app/modules/components/menu-list/menu-list.component";
import { MenuEdit } from "@app/modules/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@app/modules/components/menu-create/menu-create.component";
import { authProvider } from "@app/core/auth-provider";
import { apolloClient } from "@app/core/apollo-client";
import { theme } from "@app/core/theme";
import { i18nProvider } from "@app/core/i18n";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        client: apolloClient,
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
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        theme={theme}
        requireAuth
      >
        <Resource
          name="menu"
          list={MenuList}
          create={MenuCreate}
          edit={MenuEdit}
          options={{ label: "Меню" }}
        />
      </Admin>
    </Fragment>
  );
};
