'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {useQuery} from '@tanstack/react-query';
import 'swiper/css';
import css from './MyProductsSwiper.module.css';
import {getAllMyProducts} from '@/lib/myProducts';
import CreateProductSlide from '../CreateProductSlide/CreateProductsSlide';
import MyProductsSlide from '../MyProductsSlide/MyProductsSlide';

const MyProductsSwiper = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['my-products'],
    queryFn: () => getAllMyProducts(),
  });

  return (
    <Swiper
      className={css['mySwiper']}
      slidesPerView="auto"
      spaceBetween={16}
      grabCursor>
      <SwiperSlide className={css['slide']}>
        <CreateProductSlide />
      </SwiperSlide>
      {data?.map(product => (
        <SwiperSlide key={product._id} className={css['slide']}>
          <MyProductsSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyProductsSwiper;
