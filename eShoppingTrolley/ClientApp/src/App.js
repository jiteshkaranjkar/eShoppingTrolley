import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Router, Switch, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingTrolley from './components/ShoppingTrolley';
import CartWithBadge from './components/controls/CartWithBadge';
import history from './components/history';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trolleys: [],
      products: [],
      promotionOffers: [],
      itemCount: 0,
      totalCount: 0,
      loading: true
    }
    this.updateCount = this.updateCount.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.fetchShoppingTrolley = this.fetchShoppingTrolley.bind(this);
  }

  componentDidMount() {
    this.fetchShoppingTrolley();
  }

  updateCount(currentCount) {
    this.setState(prevState => {
      return {
        itemCount: Number(prevState.itemCount) + currentCount,
        totalCount: Number(prevState.itemCount) + currentCount
      }
    });
    localStorage.setItem("totalCount", Number(this.state.totalCount) + currentCount);
  }

  addToCart(){
    history.push('/shopping-trolley');
  }

  async fetchShoppingTrolley() {
    this.setState(prevState => {
      return {
        itemCount: Number(localStorage.getItem("totalCount"))
      }
    });

    const response = await fetch("https://tgifdrinks.azurewebsites.net/api/ShoppingTrolley");
    const result = await response.json();
    this.setState(() => {
      return {
        trolleys: result.shoppingTrolleyItems,
        promotionOffers: [result.promotionOffer],
        loading: false
      }
    });
  }

  render() {
    return (
      <Router history={history}>
      <Layout count={this.state.itemCount}>
        {this.state.loading
          ?
          <p><em>Loading...</em></p>
          :
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products}>
                <Products onAddToCart={this.addToCart} onUpdateCount={this.updateCount} trolleys={this.state.trolleys} />
            </Route>
            <Route path='/shopping-trolley' component={ShoppingTrolley}>
              <ShoppingTrolley onUpdateCount={this.updateCount} trolleys={this.state.trolleys} promotion={this.state.promotionOffers} />
            </Route>
            <Route path='/CartWithBadge' component={CartWithBadge} />
          </div>
        }
        </Layout>
      </Router>
    );
  }
}