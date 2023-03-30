import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const MenuCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <TextInput source="image" fullWidth label="Зображення" />
      <TextInput source="ingredients" fullWidth label="Інгредієнти" />
      <NumberInput source="price" label="Ціна в гривнях" />
      <NumberInput source="weight" label="Вага в грамах" />
    </SimpleForm>
  </Create>
);
