"use client";
import { useState } from "react";
import { ALLOWED_TYPES } from "@/constants/imageTypes";

const ImageDrop = ({ onChange }: { onChange: (file: File) => void }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);

  const pick = (file?: File) => {
    if (!file || !ALLOWED_TYPES.includes(file.type)) return;
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsOver(false);
        pick(e.dataTransfer.files[0]);
      }}
    >
      <input
        type="file"
        accept={ALLOWED_TYPES.join(",")}
        hidden
        onChange={(e) => {
          pick(e.target.files?.[0]);
        }}
      />
      {preview ? ( // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="product preview" />
      ) : (
        <p>Set Image here</p>
      )}
    </label>
  );
};

export default ImageDrop;
