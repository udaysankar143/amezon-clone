import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  //const value= getBasketTotal(basket);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>
          <CurrencyFormat
            displayType={"text"}
            decimalScale={2}
            value={getBasketTotal(basket)}
            thousandSeparator={true}
            prefix={"Rs:"}
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This is order contains a gift
      </small>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
