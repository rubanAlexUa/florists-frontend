'use client';

import ProductForm from '@/components/ProductForm/ProductForm';
import {createPlant} from '@/lib/plants';
import css from './New.module.css';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

const CreateProductClient = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {mutate, isPending, isError} = useMutation({
    mutationFn: createPlant,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['my-products']});
      router.push('/profile');
    },
  });

  return (
    <div className={css['form-box']}>
      <ProductForm
        submitLabel="Create product"
        isPending={isPending}
        onSubmit={mutate}
        isError={isError}
      />
    </div>
  );
};

export default CreateProductClient;
