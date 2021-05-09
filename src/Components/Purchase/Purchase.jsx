import React, { forwardRef, useEffect, useState } from "react";

//import style
import "../../styles/Purchase.css";

//import assets
import purchaseImage from "../../assets/images/Albrecht.jpg";

function Purchase({ props }, ref) {
  const [basicCount, setBasicCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const seniorTicketsPrice = 120;
  const basicTicketsPrice = 220;

  useEffect(() => {
    setTotalPrice(
      seniorCount * seniorTicketsPrice + basicCount * basicTicketsPrice
    );
  }, [seniorCount, basicCount]);

  return (
    <div className="purchase" ref={ref}>
      <h2>Buy Tickets</h2>
      <div className="purchase-container">
        <div className="purchase-text">
          <div className="purchase-ticket-type">
            <h3 className="ticket-title">Ticket Type</h3>
            <div>
              <input className="rounded-checkbox" type="radio" name="" id="" />{" "}
              <label>Permanent exhibition</label>
            </div>
            <div>
              <input className="rounded-checkbox" type="radio" name="" id="" />{" "}
              <label>Temporary exhibition</label>
            </div>
            <div>
              <input className="rounded-checkbox" type="radio" name="" id="" />{" "}
              <label>Combined Admission</label>
            </div>
          </div>
          <div className="purchase-amount">
            <h3 className="amount-title">Amount</h3>
            <div className="purchase-amount-container">
              <div className="amount-input">
                <span className="input-title">Basic 27+</span>
                <div>
                  <button
                    onClick={() =>
                      setBasicCount(basicCount ? basicCount - 1 : 0)
                    }
                  >
                    -
                  </button>
                  <span>{basicCount}</span>
                  <button onClick={() => setBasicCount(basicCount + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="amount-input">
                <span className="input-title">Senior 65+</span>
                <div>
                  <button
                    onClick={() =>
                      setSeniorCount(seniorCount ? seniorCount - 1 : 0)
                    }
                  >
                    -
                  </button>
                  <span>{seniorCount}</span>
                  <button onClick={() => setSeniorCount(seniorCount + 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-total">
            <h3>
              Total {totalPrice} <span>CZK</span>
            </h3>
          </div>
          <a className="purchase-button" href="#buy">
            Buy Now
          </a>
        </div>
        <div className="purchase-img">
          <img src={purchaseImage} alt="" />
        </div>
      </div>
    </div>
  );
}

const forwardedPurchase = forwardRef(Purchase);

export default forwardedPurchase;