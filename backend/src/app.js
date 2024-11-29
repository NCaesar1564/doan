const express = require('express');
const connectDB = require('./config/server');
const User = require('./models/User');
const Product = require('./models/Product');
const Brand = require('./models/Brand')
const cors = require('cors');

const app = express();

app.use(cors());
connectDB();

app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({ name, email, password });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message })
    }
});
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
        })
        .catch(err => res.status(500).json({ message: "Error fetching product data" }));
});
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.nameProduct = req.body.nameProduct;
      product.description = req.body.description;
      product.firstprice = req.body.firstprice;
      product.lastprice = req.body.lastprice;
      product.quantity = req.body.quantity;
  
      if (req.file) {
        product.imageProduct = req.file.path; 
      }
  
      await product.save();
      res.json({ message: 'Product updated successfully', product });
    } catch (err) {
      console.error('Error updating product:', err);
      res.status(500).json({ message: 'Error updating product', error: err.message });
    }
  });
  
app.get('/brands', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching brands', error: error.message })
    }
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`products api:  http://localhost:${PORT}/products`);
    console.log(`users api api: http://localhost:${PORT}/users`);
    console.log(`brands api api: http://localhost:${PORT}/brands`);

});
