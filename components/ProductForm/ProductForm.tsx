import {useState} from 'react';
import {Product} from '../AddToCart/AddToCart';
import css from './ProductForm.module.css';
import ImageDrop from '../ImageDrop/ImageDrop';
import {BackendPlantsTypes, PLANTS_TYPES_MAP} from '@/constants/plantsTypes';

type ProductFormProps = {
  initialValues?: ProductFormValue;
  onSubmit: (data: FormData) => void;
  isPending: boolean;
  isError: boolean;
  submitLabel: string;
};

export interface ProductFormValue {
  name: string;
  description: string;
  amount: number;
  price: number;
  type: string;
  productImage: string;
}

const ProductForm = ({
  initialValues,
  onSubmit,
  submitLabel,
  isPending,
  isError,
}: ProductFormProps) => {
  const productTypes = Object.values(PLANTS_TYPES_MAP);

  const [file, setFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // при створенні фото обов'язкове, при редагуванні лишається старе
    if (!file && !initialValues?.productImage) {
      setImageError('Please add a product image');
      return;
    }

    const formData = new FormData(e.currentTarget);
    if (file) formData.set('productImage', file); // назва поля як у multer

    setImageError('');
    onSubmit(formData);
  };

  return (
    <form className={css['form']} onSubmit={handleSubmit}>
      <ImageDrop
        onChange={setFile}
        currentImage={initialValues?.productImage}
      />

      <div className={css['form-fields']}>
        <label className={css.label} htmlFor="name">
          Name
          <input
            className={css.input}
            id="name"
            name="name"
            minLength={5}
            maxLength={25}
            defaultValue={initialValues?.name}
            required
          />
        </label>

        <div className={css['form-row']}>
          <label className={css.label} htmlFor="amount">
            Amount
            <input
              className={css.input}
              id="amount"
              name="amount"
              type="number"
              min={1}
              step={1}
              defaultValue={initialValues?.amount}
              required
            />
          </label>

          <label className={css.label} htmlFor="price">
            Price, $
            <input
              className={css.input}
              id="price"
              name="price"
              type="number"
              min={1}
              step={1}
              defaultValue={initialValues?.price}
              required
            />
          </label>
        </div>

        <label className={css.label} htmlFor="description">
          Description
          <textarea
            className={css.textarea}
            id="description"
            name="description"
            defaultValue={initialValues?.description}
            required
          />
        </label>

        <fieldset className={css.types}>
          <legend className={css.legend}>Products type</legend>
          {productTypes.map(type => (
            <label key={type} className={css.type}>
              <input
                className={css['type-input']}
                type="radio"
                name="type"
                value={type}
                defaultChecked={
                  type === (initialValues?.type ?? productTypes[0])
                }
              />
              <span className={css['type-pill']}>{type}</span>
            </label>
          ))}
        </fieldset>

        {imageError && (
          <p className={css.error} role="alert">
            {imageError}
          </p>
        )}
        {isError && (
          <p className={css.error} role="alert">
            Something went wrong. Please try again.
          </p>
        )}

        <button className={css.submit} type="submit" disabled={isPending}>
          {isPending ? 'Saving...' : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
