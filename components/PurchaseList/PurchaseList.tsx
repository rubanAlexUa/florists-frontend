'use client';

import css from './PurchaseList.module.css';
import {useQuery} from '@tanstack/react-query';
import {getAllPurchases} from '@/lib/purchases';
import {Purchase} from '@/types/purchase';
import PurchaseItem from '../PurchaseItem/PurchaseItem';
import Verity from '@/public/verity.svg';

const PurchaseList = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['purchases'],
    queryFn: getAllPurchases,
  });

  const hasPurchases = !!data && data.length > 0;

  return (
    <div className={css['purchases-list-box']}>
      <h2 className={css['purchase-heading']}>Purchases</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasPurchases ? (
        <ul className={css['purchases-list']}>
          {data?.map((purchase: Purchase) => (
            <PurchaseItem key={purchase._id} product={purchase} />
          ))}
        </ul>
      ) : (
        <div className={css['purchase-no-items']}>
          <p className={css['description-no-purchases']}>
            There will be displayed your purchases.You haven't buy anything
          </p>
          <Verity className={css['svg-smile']} />
        </div>
      )}
    </div>
  );
};

export default PurchaseList;
