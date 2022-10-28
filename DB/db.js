// it is present in todos of my database
const PooL = require("pg").Pool;
const Pool = new PooL({
  database: "uploadpdf_db",
  port: 5432,
  user: "postgres",
  password:"lmvit123"
});
module.exports = Pool;

// Host: ec2-54-242-120-138.compute-1.amazonaws.com

// Username: krkgvucaujkfor

// Password: 37e625ac0fba0d3623694a0f8d555349aec2236a559adbfc0600d28dd4ddc147

// Maintance DB Name: d429t50fdehsb9
