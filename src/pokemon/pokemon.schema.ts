import { model , Schema} from 'mongoose'

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: []
    },
    stats: {
        required: true,
        type: {}
    },
    dex: {
        required: true,
        type: Number
    },
    height: {
        required: true,
        type: Number
    },
    weight: {
        required: true,
        type: Number
    },
    version: {
        required: true,
        type: String
    },
}, {
    timestamps: true
})

export default model('Product', ProductSchema)