import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { MenuEditTitle } from "@app/modules/components/menu-edit-title/menu-edit-title.component";

export const MenuEdit = () => {
  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth label="Назва" />
        <CloudinaryInput source="image" label="Фото" />
        <TextInput source="ingredients" fullWidth label="Інгредієнти" />
        <NumberInput source="price" label="Ціна в гривнях" />
        <NumberInput source="weight" label="Вага в грамах" />
      </SimpleForm>
    </Edit>
  );
};
