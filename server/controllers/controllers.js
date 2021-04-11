const db = require('../db')


module.exports = {
  get: function (req, res) {
    const queryStr = 'SELECT * FROM groceries;'
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(err)
      }
      res.send(results)
    })
  },
  addGroceries: function(req, res) {
    const item = req.body.item
    const amount = req.body.amount
    const queryStr = `INSERT INTO groceries (item, amount) values ('${item}', ${amount});`
    db.query(queryStr, (err, results) => {
      if (err) {
        res.json({success: false, message :`ITEM NOT ADDED, ${err}`})
      }
      res.json({success : true, message : 'ITEM WAS SUCCESSFULLY ADDED'})
    })
  },
  deleteItem: function(req, res) {
    const item = req.body.item
    const queryStr = `DELETE FROM groceries.groceries WHERE item = '${item}'`
    db.query(queryStr, (err, results) => {
      if (err) {
         res.json({success: false, message :`ITEM NOT DELETED, ${err}`})
      } else {
        res.json({success : true, message : 'ITEM WAS SUCCESSFULLY DELETED'})
      }
    })
  },
  deleteAll: function(req, res) {
    db.query('DELETE FROM groceries.groceries', (err, results) => {
      if (err) {
        res.json({success: false, message :`ITEMS NOT DELETED, ${err}`})
      } else {
        res.json({success : true, message : 'ITEMS SUCCESSFULLY DELETED'})
      }
    })
  },
  increment: function(req, res) {
    const item = req.body.item
    const amount = req.body.amount
    const queryStr = `UPDATE groceries.groceries SET amount = ${amount} WHERE item LIKE '${item}'`
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(item, amount)
         res.json({success: false, message :`ITEM NOT UPDATED, ${err}`})
      } else {
        res.json({success : true, message : 'ITEM WAS SUCCESSFULLY UPDATED'})
      }
    })
  },
  decrement: function(req, res) {
    const item = req.body.item
    const amount = req.body.amount
    const queryStr = `UPDATE groceries.groceries SET amount = ${amount} WHERE item LIKE '${item}'`
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(item, amount)
         res.json({success: false, message :`ITEM NOT UPDATED, ${err}`})
      } else {
        res.json({success : true, message : 'ITEM WAS SUCCESSFULLY UPDATED'})
      }
    })
  }
}



