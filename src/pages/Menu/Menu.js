import React from "react";
import PageInfo from "../../components/PageInfo/PageInfo";
import * as actions from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const Menu = (props) => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);

  return (
    <>
      <PageInfo title="Menu" />

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Best Sellers</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Margherita</h5>
                <p className="card-text">
                  Classic delight with 100% real mozzarella cheese.
                </p>
                {/* <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    dispatch(actions.depositMoney(100));
                  }}
                >
                  -
                </button>
                Update Your Bank Blance
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    dispatch(actions.withdrawMoney(100));
                  }}
                >
                  +
                </button> */}
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    withdrawMoney(1);
                  }}
                >
                  -
                </button>
                {amount}
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    depositMoney(1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Barbecue Chicken</h5>
                <p className="card-text">
                  Barbecue chicken for that extra zing.
                </p>
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    withdrawMoney(1);
                  }}
                >
                  -
                </button>
                {amount}
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    depositMoney(1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Farmhouse</h5>
                <p className="card-text">
                  Delightful combo of grilled mushroom & veggies.
                </p>
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    withdrawMoney(1);
                  }}
                >
                  -
                </button>
                {amount}
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    depositMoney(1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Non Veg Supreme</h5>
                <p className="card-text">
                  Supreme combo of 3 types of chicken.
                </p>
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    withdrawMoney(1);
                  }}
                >
                  -
                </button>
                {amount}
                <button
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    depositMoney(1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
