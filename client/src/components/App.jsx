import React from 'react'
import GroceryItem from './GroceryItems.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      groceries : []
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchAddItem = this.fetchAddItem.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.incrementGrocery = this.incrementGrocery.bind(this)
    this.decrementGrocery = this.decrementGrocery.bind(this)
    this.removeGrocery = this.removeGrocery.bind(this)
    this.fetchItems = this.fetchItems.bind(this)
  }

  componentDidMount() {
    this.fetchItems()
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState ({
      [name] : value
    })
  }

  // addItem(e) {
  //   this.setState(prevState => {
  //     const newList = [...prevState.groceries]
  //     const newItem = {
  //       item: this.state.item,
  //       amount: parseInt(this.state.amount, 10)
  //     }
  //     newList.push(newItem)
  //     return {
  //       groceries: newList
  //     }
  //   })
  // }

  // removeGrocery(index) {
  //   const newList = []
  //   for (let i = 0; i < this.state.groceries.length; i++) {
  //     if (i !== index) {
  //       newList.push(this.state.groceries[i])
  //     }
  //   }
  //   this.setState({groceries : newList})
  // }

  fetchItems() {
    fetch('http://localhost:3001/groceries/')
    .then(response => response.json())
    .then(data => this.setState({
      groceries : data
    }))
  }

  fetchAddItem() {
    const data = {
      item: this.state.item,
      amount: this.state.amount
    }
     fetch('http://localhost:3001/groceries/add',
     {
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
       },
       body: JSON.stringify(data),
     })
     .then(response => response.json())
     .then(data => {
       if(data.success === true) {
         this.fetchItems()
       }
     });
  }

  removeGrocery(index) {
    let data = {
      item: this.state.groceries[index].item,
      amount: this.state.groceries[index].amount
    }
    // console.log(data)
    fetch('http://localhost:3001/groceries/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if(data.success === true) {
        this.fetchItems()
      }
    })
  }


  removeAll() {
    let data = {
      item: this.state.groceries,
      amount: this.state.groceries
    }
    fetch('http://localhost:3001/groceries/deleteAll', {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if(data.success === true) {
        this.fetchItems()
      }
    })
    }


  incrementGrocery(index) {
    const newList = [...this.state.groceries]
    const itemToChange = newList[index]
    itemToChange.amount = itemToChange.amount + 1
    this.setState ({groceries : newList})
  }

  decrementGrocery(index) {
    const newList = [...this.state.groceries]
    const itemToChange = newList[index]
    if (itemToChange.amount === 0) return
    itemToChange.amount = itemToChange.amount - 1
    this.setState ({groceries : newList})
  }

  render() {
    return (
    <div>
      <h1>Groceries Omg</h1>
      <input type='text' name='item' placeholder='Item' value={this.state.groceries.item} onChange={this.handleChange}/>
      <br></br>
      <br></br>
      <input type='text' name='amount' placeholder='Amount' value={this.state.groceries.amount} onChange={this.handleChange}/>
      <br></br>
      <br></br>
      <button onClick={this.fetchAddItem}>Add Items </button>
      <button onClick={this.removeAll}>Clear List </button>
      <ul>
      {this.state.groceries.map(((grocery, index) =>
        <li key={grocery.item + index}> {grocery.item} {grocery.amount} <button onClick={() =>this.incrementGrocery(index)}> + </button>
        <button onClick={() =>this.decrementGrocery(index)}> - </button>
        <button onClick={() =>this.removeGrocery(index)}> Remove Item </button></li>))}
        <GroceryItem item={this.state.groceries.item}
        amount={this.state.groceries.amount}
        />
        </ul>
    </div>
    );
  }
}

export default App
