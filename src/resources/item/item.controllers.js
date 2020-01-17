import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
  await connect('mongodb://localhost:27017/api-test')

  const item = await Item.create({
    name: 'Clean up',
    createdBy: mongoose.Type.ObjectId,
    list: mongoose.Type.ObjectId
  })

  console.log(await Item.findById(item._id).exec())
}

run()

// export default {}
