import {SwiperSlide} from 'swiper/react';
import Link from 'next/link';
import css from './CreateProductsSlide.module.css';
import Plus from '@/public/plus.svg';

const CreateProductSlide = () => {
  return (
    <div className={css['add-product-slide']}>
      <Link href="/products/new" className={css['add-product-link']}>
        <Plus className={css['add-product-svg']} />
      </Link>
      <p className={css['add-product-p']}>Add product</p>
    </div>
  );
};

export default CreateProductSlide;
