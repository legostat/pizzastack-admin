import { FC } from "react";
import axios, { AxiosError } from "axios";
import { InputProps, useInput, useNotify } from "react-admin";
import { CloudinaryInputUi } from "@app/common/components/cloudinary-input-ui/cloudinary-input-ui.component";
import { useCloudinarySignatureQuery } from "@app/core/types";
import { CloudinaryUploadDto } from "@app/common/components/cloudinary-input/cloudinary-upload.dto";

export const CloudinaryInput: FC<InputProps> = (props) => {
  const { source, label } = props;

  const computedLabel: string = String(label) ?? source;
  const { data: cloudSignature, loading } = useCloudinarySignatureQuery({
    fetchPolicy: "network-only",
  });

  const notify = useNotify();

  const {
    field: { onChange, value },
  } = useInput(props);

  const onImageSelected = async (image: File) => {
    if (!cloudSignature?.cloudinarySignature) {
      return;
    }

    const { cloudName, apiKey, publicId, signature, timestamp } =
      cloudSignature.cloudinarySignature;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("api_key", apiKey);
    formData.append("publicId", publicId);
    formData.append("signature", signature);
    formData.append("timestamp", String(timestamp));
    formData.append("folder", "menu");

    try {
      const { data } = await axios.post<CloudinaryUploadDto>(url, formData);
      onChange(data.public_id);
    } catch (error) {
      notify((error as AxiosError).message);
    }
  };

  return (
    <CloudinaryInputUi
      label={computedLabel}
      value={value}
      disabled={loading}
      onImageSelected={onImageSelected}
    />
  );
};
