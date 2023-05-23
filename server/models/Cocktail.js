const mongoose = require('mongoose');

const { Schema } = mongoose;

const cocktailSchema = new Schema({
	name: {
		type: String,
		default: '',
	},
	glass: {
		type: String,
		default: 'Cocktail glass',
	},
	ingredients: {
		type: [String],
		default: '',
	},
	measure: {
		type: [String],
		default: '',
	},
	image: {
		type: String,
		default:
			'https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg',
	},
	author: {
		type: String,
		default: '',
	},
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

module.exports = Cocktail;
