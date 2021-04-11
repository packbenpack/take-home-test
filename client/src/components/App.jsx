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
      let data = {
        item : this.state.groceries[index].item,
        amount : this.state.groceries[index].amount + 1
      }
      console.log(data)
      fetch('http://localhost:3001/groceries/increment', {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if(data.success === true) {
          this.fetchItems()
        }
      })
    }

    decrementGrocery(index) {
      let data = {
        item : this.state.groceries[index].item,
        amount : this.state.groceries[index].amount - 1
      }
      console.log(data)
      fetch('http://localhost:3001/groceries/decrement', {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if(data.success === true) {
          this.fetchItems()
        }
      })
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