// routes/users.js


const router = require('express').Router();




module.exports = (db) => {

  /* GET users listing. */
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });

  router.get("/registeruser", (req, res) => {
    const email = req.query.email
    const password = req.query.password

    db.query(`SELECT * FROM users WHERE email = $1`, [email]
    )
      .then((res) => {
        if (res.rows.length !== 0) {
          res.json(res.rows)
        } else {
          db.query(`INSERT INTO users (email, password) VALUES ($1, $2)`, [email, password]
          )
        }


      })

  });

  return router;

}


