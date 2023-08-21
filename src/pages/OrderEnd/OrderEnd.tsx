import thankYou from "../../images/pages/order-end/thankYou.svg";
export const OrderEnd = () => {
  return (
    <>
      <div className="app__order-end order-end">
        <div className="order-end__header textH1">Thank you for your order</div>
        <div className="order-end__image">
          <img src={thankYou} alt="thank you" className="order-end__pic"/>
        </div>
      </div>
    </>
  );
};
