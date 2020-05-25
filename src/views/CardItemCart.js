import React from 'react';

class CardItemCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.item.title,
      qtd: props.item.qtd,
    };
  }

  decrease() {
    this.setState((state) =>
    ({ qtd: state.qtd - 1 }));
  }
  increase() {
    this.setState((state) =>
      ({ qtd: state.qtd + 1 }));
  }
  render() {
    console.log(this.state.title);
    return (
      <div>
        <form>
          <label
            htmlFor="IncluiOTexto"
            data-testid="shopping-cart-product-name"
          >
            {this.state.title}
          </label>
          <label
            htmlFor="IncluiOTexto3"
            data-testid="shopping-cart-product-quantity"
          >
            {this.state.qtd}
          </label>
          <input
            type="button"
            data-testid="product-increase-quantity"
            value="+" onClick={() => this.increase()}
          />
          <input
            type="button"
            data-testid="product-decrease-quantity"
            value="-"
            onClick={() => this.decrease()}
          />
        </form>
      </div>
    );
  }
}

export default CardItemCart;
