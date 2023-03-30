import { MenuEditTitle } from "@app/modules/components/menu-edit-title/menu-edit-title.component";
import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const MenuEdit = () => {
  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth label="Назва" />
        <TextInput source="image" fullWidth label="Зображення" />
        <TextInput source="ingredients" fullWidth label="Інгредієнти" />
        <NumberInput source="price" label="Ціна в гривнях" />
        <NumberInput source="weight" label="Вага в грамах" />
      </SimpleForm>
    </Edit>
  );
};
