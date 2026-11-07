import OrderList from "@/components/OrdersList/OrderList";
import css from "./Order.module.css";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

const Order = () => {
  return (
    <div className="wrapper">
      <div className={css["page-info"]}>
        <h2 className="page-heading">Your Order</h2>
      </div>
      <div className={css["order-content-styles"]}>
        <OrderList />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Order;
