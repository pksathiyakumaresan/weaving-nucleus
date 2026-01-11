require('dotenv').config();
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

console.log('DATABASE_URL:', process.env.DATABASE_URL);


const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
