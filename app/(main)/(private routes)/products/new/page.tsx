import {useMutation} from '@tanstack/react-query';
import css from './New.module.css';
import ProductForm from '@/components/ProductForm/ProductForm';
import {createPlant} from '@/lib/plants';
import SellerOnly from '@/components/SellerOnly/SellerOnly';
import CreateProductClient from './CreateProduct.client';

const New = () => {
  const onSubmit = () => {};
  return (
    <div className="wrapper">
      <h2 className="page-heading">New product</h2>
      <SellerOnly>
        <CreateProductClient />
      </SellerOnly>
    </div>
  );
};

export default New;
