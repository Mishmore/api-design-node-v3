import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
  await connect('mongodb://localhost:27017/api-test')

  const item = await Item.create({
    name: 'Clean up',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId()
  })

  // console.log(await Item.findById(item._id).exec())
  // console.log(item)

  // const updated = await Item.findByIdAndUpdate(
  //   item._id,
  //   { name: 'eat' },
  //   { new: true }
  // ).exec()
  //
  // console.log(updated)

  const removed = await Item.findByIdAndRemove(item._id).exec()

  console.log(removed)
}

run()

// export default {}
