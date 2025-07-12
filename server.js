const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/db');
const userRoutes = require('./router/userRoutes');




const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);


sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('DB Sync Error:', err));
