const mongoose = require('mongoose');

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.URL_BD);

    console.log('MongoDB connecté');
    console.log('URI MongoDB :', process.env.URL_BD);

  } catch (error) {
    console.error('Erreur MongoDB :', error.message);
    process.exit(1);
  }
};

module.exports = connectBD;