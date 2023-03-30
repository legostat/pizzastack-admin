import { Menu } from "@app/core/types";
import { MenuListExpand } from "@app/modules/components/menu-list-expand/menu-list-expand.component";
import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  TextField,
  TextInput,
} from "react-admin";

const filters = [<TextInput source="title" label="Пошук по назві" />];

export const MenuList = () => (
  <List filters={filters} exporter={false}>
    <Datagrid
      expand={MenuListExpand}
      rowClick="expand"
      bulkActionButtons={false}
      expandSingle={true}
    >
      <TextField source="title" label="Назва" />
      <FunctionField
        label="Ціна"
        render={(record: Menu) => `${record.price} грн`}
        sortable={true}
      />
      <EditButton />
    </Datagrid>
  </List>
);
