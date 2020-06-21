import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {itemDeleteFromCart} from "../../actions";

const CartTable = ({itemsCart, itemDeleteFromCart}) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <ul className="cart__list">
        {
          itemsCart.map(({title, multiplePrices, url, id, count}) => {
            return (
              <li key={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{multiplePrices} ₽</div>
                <div className="cart__item-price">Кол-во: {count}</div>
                <div onClick={() => itemDeleteFromCart(id)} className="cart__close">&times;</div>
              </li>)
          })
        }
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsCart: state.itemsCart,
  }
}

const mapDispatchToProps = {itemDeleteFromCart}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);