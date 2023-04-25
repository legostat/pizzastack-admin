import { theme } from "@app/core/theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "react-admin";
import { CloudinaryInputUi } from "@app/common/components/cloudinary-input-ui/cloudinary-input-ui.component";

export default {
  title: "Common/Cloudinary Input UI",
  component: CloudinaryInputUi,
} as ComponentMeta<typeof CloudinaryInputUi>;

const Template: ComponentStory<typeof CloudinaryInputUi> = (args) => (
  <ThemeProvider theme={theme}>
    <CloudinaryInputUi {...args} />
  </ThemeProvider>
);

export const View = Template.bind({});
View.args = {
  label: "Головне зображення",
};
