import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";

import './menu-list.scss';
import WithRestoService from "../hoc";
import {itemAddToCart, menuLoaded, menuRequested} from "../../actions";
import Spinner from "../spinner";

class MenuList extends Component {
  componentDidMount() {
    const {RestoService, menuLoaded, menuRequested} = this.props
    menuRequested()
    RestoService.getData()
      .then((res) => {
        menuLoaded(res)
      })
  }

  render() {
    const {menu, loading, itemAddToCart} = this.props

    if (loading) {
      return <Spinner/>
    }

    return (
      <ul className="menu__list">
        {
          menu.map((item) => {
            const {id} = item
            return <MenuListItem key={id} menuItem={item} onAddToCart={itemAddToCart}/>
          })
        }
      </ul>
    )
  }
};

const mapStateToProps = ({menu, loading, error}) => {
  return {menu, loading, error}
}

const mapdispatchToProps = {
  menuLoaded,
  menuRequested,
  itemAddToCart,
}


export default WithRestoService()(connect(mapStateToProps, mapdispatchToProps)(MenuList));