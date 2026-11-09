import css from './PurchaseItem.module.css';
import {Purchase} from '@/types/purchase';
import Triangle from '@/public/tringle.svg';

type Props = {
  product: Purchase;
};

const PurchaseItem = ({product}: Props) => {
  const {totalPrice, createdAt} = product;

  const date = new Date(createdAt).toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Kyiv',
  });

  return (
    <li className={css['purchase-item']}>
      <div className={css['svg-wrapper']}>
        <Triangle className={css['triangle-svg']} />
      </div>
      <div className={css['purchase-info']}>
        <div className={css['data-container']}>
          <p className={css['data-para']}>Date</p>
          <h3 className={css['date-number']}>{date}</h3>
        </div>
        <div className={css['data-container']}>
          <p className={css['data-para']}>Total price</p>
          <h3 className={css['total-price-number']}>{totalPrice} $</h3>
        </div>
      </div>
    </li>
  );
};

export default PurchaseItem;
