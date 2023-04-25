import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC, useRef } from "react";
import { Button } from "react-admin";

interface CloudinaryInputProps {
  label: string;
  disabled: boolean;
  onImageSelected: (image: File) => void;
  value?: string;
}

export const CloudinaryInputUi: FC<CloudinaryInputProps> = ({
  label,
  disabled,
  value,
  onImageSelected,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const [file] = Array.from(e.target.files);
    onImageSelected(file);
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(value);
  image.addTransformation("w_384,h_240,dpr_2.0");

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleImageChange}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          {value ? (
            <AdvancedImage cldImg={image} style={{ width: "384px" }} />
          ) : (
            <Skeleton variant="rectangular" width={384} height={240} />
          )}

          <CardActions>
            <Button
              variant="contained"
              onClick={handleUploadClick}
              disabled={disabled}
            >
              <Typography>Завантажити</Typography>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
