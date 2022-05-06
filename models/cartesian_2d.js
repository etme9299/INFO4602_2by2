const mongoose = require('mongoose');

const cartesian_2d_schema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		code: { type: String, required: true, unique: true },
		type: { type: String, required: true, default: 'cartesian_2d' },
        axis: { type: Array, required: true },
        descriptions: { type: Array},
        tags: { type: Array, required: true },
        points : { type: Array}
	},
	{ collection: 'Graphs' }

)

const cartesian_2d_model = mongoose.model('Completed', cartesian_2d_schema)
module.exports = cartesian_2d_model