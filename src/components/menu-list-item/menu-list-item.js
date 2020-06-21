import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
  const {title, price, url, category, id} = menuItem
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Категория: <span>{category}</span></div>
                <div className="menu__price">Цена: <span>{price} ₽</span></div>
                <button onClick={()=> onAddToCart(id)} className="menu__btn">Добавить в корзину</button>
            </li>
        </>
    )
}

export default MenuListItem;