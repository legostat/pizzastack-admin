import { theme } from "@app/core/theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";

export default {
  title: "Common/Cloudinary Input",
  component: CloudinaryInput,
} as ComponentMeta<typeof CloudinaryInput>;

const Template: ComponentStory<typeof CloudinaryInput> = (args) => (
  <ThemeProvider theme={theme}>
    <CloudinaryInput {...args} />
  </ThemeProvider>
);

export const View = Template.bind({});
View.args = {
  label: "Головне зображення",
};
