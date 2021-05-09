import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Products from './components/Products';
import ShoppingTrolley from './components/ShoppingTrolley';
import CartWithBadge from './components/controls/CartWithBadge';

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

  async fetchShoppingTrolley() {
    this.setState(prevState => {
      return {
        itemCount: Number(localStorage.getItem("totalCount"))
      }
    });

    const response = await fetch("https://shoppingtrolley.azurewebsites.net/api/ShoppingTrolley");
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
      <Layout count={this.state.itemCount}>
        {this.state.loading
          ?
          <p><em>Loading...</em></p>
          :
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products}>
              <Products onUpdateCount={this.updateCount} trolleys={this.state.trolleys} />
            </Route>
            <Route path='/shopping-trolley' component={ShoppingTrolley}>
              <ShoppingTrolley onUpdateCount={this.updateCount} trolleys={this.state.trolleys} promotion={this.state.promotionOffers} />
            </Route>
            <Route path='/CartWithBadge' component={CartWithBadge} />
          </div>
        }
      </Layout>
    );
  }
}