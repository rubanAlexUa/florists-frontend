'use client';

import ProductForm from '@/components/ProductForm/ProductForm';
import {createPlant, updatePlant} from '@/lib/plants';
import css from '@/app/(main)/(private routes)/products/new/New.module.css';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';
import {BackendPlantsTypes} from '@/constants/plantsTypes';
import {getChangedFields} from '@/lib/utils/getChangedFields';

export interface initialValuesProps {
  name: string;
  description: string;
  type: BackendPlantsTypes;
  price: number;
  amount: number;
  productImage: string;
}

type Props = {
  id: string;
  initialValues: initialValuesProps;
};

const EditClient = ({id, initialValues}: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {mutate, isPending, isError} = useMutation({
    mutationFn: (data: FormData) => updatePlant(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['my-products']});
      router.push('/profile');
    },
  });

  return (
    <div className={css['form-box']}>
      <ProductForm
        initialValues={initialValues}
        submitLabel="Edit product"
        isPending={isPending}
        onSubmit={data => {
          const changed = getChangedFields(data, initialValues);

          if ([...changed.keys()].length === 0) {
            router.push('/profile');
            return;
          }

          mutate(changed);
        }}
        isError={isError}
      />
    </div>
  );
};

export default EditClient;
