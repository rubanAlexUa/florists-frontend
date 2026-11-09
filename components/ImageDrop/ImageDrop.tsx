'use client';
import {useState} from 'react';
import {ALLOWED_TYPES} from '@/constants/imageTypes';
import css from './ImageDrop.module.css';
import Download from '@/public/download.svg';

type ImageDropProps = {
  onChange: (file: File) => void;
  currentImage?: string;
};

const ImageDrop = ({currentImage, onChange}: ImageDropProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);
  const [error, setErrror] = useState('');

  const pick = (file?: File) => {
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrror('Unsupported image format');
    }

    setErrror('');
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  const image = preview ?? currentImage;

  return (
    <div className={css['image-drop-place']}>
      <label
        onDragOver={e => {
          e.preventDefault();
          setIsOver(true);
        }}
        onDragLeave={() => setIsOver(false)}
        onDrop={e => {
          e.preventDefault();
          setIsOver(false);
          pick(e.dataTransfer.files[0]);
        }}
        className={css['drop-label']}>
        <input
          type="file"
          accept={ALLOWED_TYPES.join(',')}
          hidden
          onChange={e => {
            pick(e.target.files?.[0]);
          }}
        />
        {image ? ( // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            className={css['product-image']}
            alt="product preview"
          />
        ) : (
          <>
            <Download className={css['svg-download']} />
            <h3 className={css['heading-download']}>Download image here</h3>
            <p className={css['info-download']}>Set Image here</p>
          </>
        )}
      </label>
    </div>
  );
};

export default ImageDrop;
