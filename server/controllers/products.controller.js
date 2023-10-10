import { pool } from "../db.js";

export const getProduct = async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  if (req.body.id == undefined) {
    res.json(result[0]);
  } else {
    const id = req.body.id;
    const result = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    res.json(result[0]);
  }
};

export const postProduct = async (req, res) => {
  const { name, category, price } = req.body;
  const result = await pool.query(
    "INSERT INTO products (name, category,price) values (?,?,?)",
    [name, category, price]
  );
  console.log(result);
  res.send("received");
};

export const deleteProduct = async (req, res) => {
  const { id } = req.body;
  const result = await pool.query("DELETE FROM products WHERE id = ?", [id]);
  if (result[0].affectedRows <= 0) {
    res.status(404).send("Product not found");
  } else {
    const products = await pool.query("SELECT * FROM products");
    res.json(products[0]);
  }
};

export const patchProduct = async (req, res) => {
  const { id, name, category, price } = req.body;
  const result = await pool.query(
    "UPDATE products SET name = ifnull(?, name), category = ifnull(?, category), price = ifnull(?, price) where id = ?",
    [name, category, price, id]
  );
    if (result[0].affectedRows <= 0) {
        res.status(404).send("Product not found");
    } else {
        const products = await pool.query("SELECT * FROM products");
        res.json(products[0]);
    }   
};
