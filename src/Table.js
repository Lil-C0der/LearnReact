import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input value={this.props.searchText} onChange={this.props.onIptChange} />
        <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.onCBChange} /> Only show products
        in stock
      </div>
    )
  }
}

class ProductTableRow extends Component {
  render() {
    const { goods } = this.props
    return (
      <tr>
        <td style={goods.stocked ? {} : { color: 'red' }}>{goods.name}</td>
        <td>{goods.price}</td>
      </tr>
    )
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sportGoods: this.props.products.filter((product) => product.category === 'Sporting Goods'),
      elecGoods: this.props.products.filter((product) => product.category === 'Electronics')
    }
  }

  render() {
    const { sportGoods, elecGoods } = this.state
    const { searchText, inStockOnly } = this.props

    const filterFn = (goods) =>
      inStockOnly
        ? goods.stocked && goods.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        : goods.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1

    const sportRow = sportGoods.filter(filterFn).map((goods) => <ProductTableRow key={goods.name} goods={goods} />)
    const elecRow = elecGoods.filter(filterFn).map((goods) => <ProductTableRow key={goods.name} goods={goods} />)

    const rows = [
      sportRow.length > 0 && (
        <tr key="category1">
          <th colSpan="2">Sporting Goods</th>
        </tr>
      ),
      ...sportRow,
      elecRow.length > 0 && (
        <tr key="category2">
          <th colSpan="2">Electronics</th>
        </tr>
      ),
      ...elecRow
    ]

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      inStockOnly: false
    }
  }
  onIptChange(e) {
    this.setState({ searchText: e.target.value })
  }
  onCBChange(e) {
    this.setState({ inStockOnly: e.target.checked })
  }
  render() {
    const { searchText, inStockOnly } = this.state
    const { products } = this.props
    return (
      <div>
        <SearchBar
          searchText={searchText}
          inStockOnly={inStockOnly}
          onIptChange={this.onIptChange.bind(this)}
          onCBChange={this.onCBChange.bind(this)}
        ></SearchBar>
        <ProductTable products={products} searchText={searchText} inStockOnly={inStockOnly}></ProductTable>
      </div>
    )
  }
}

export default Table
