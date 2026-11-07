'use client';

import css from './OrderSummary.module.css';

const OrderSummary = () => {
  return (
    <div className={css['order-summary-box']}>
      <h2 className={css['summary-heading']}>Order summary</h2>
      <h3>
        Items: <span></span>
      </h3>
      <hr />
    </div>
  );
};

export default OrderSummary;
