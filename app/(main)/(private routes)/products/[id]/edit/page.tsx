import {useMutation} from '@tanstack/react-query';
import css from './New.module.css';
import ProductForm from '@/components/ProductForm/ProductForm';
import {createPlant, getPlantById} from '@/lib/plants';
import SellerOnly from '@/components/SellerOnly/SellerOnly';
import EditClient from './EditClient';

type Props = {
  params: Promise<{id: string}>;
};

const EditProductPage = async ({params}: Props) => {
  const {id} = await params;

  const product = await getPlantById(id);

  return (
    <div className="wrapper">
      <h2 className="page-heading">Edit product</h2>
      <SellerOnly>
        <EditClient
          id={id}
          initialValues={{
            name: product.name,
            description: product.description,
            productImage: product.productImage,
            price: product.price,
            amount: product.amount,
            type: product.type,
          }}
        />
      </SellerOnly>
    </div>
  );
};

export default EditProductPage;
