const mongoose = require('mongoose')
const md5 = require('js-md5')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://localhost:27017/sal')

const articleSchema = new Schema({
  id: Number,
  title: String,
  tag: String,
  content: String,
  commentNum: Number,
  pushTime: String,
  updateTime: String
})

const counterSchema = new mongoose.Schema({
  _id: String,
  seq: Number
})
//实现自增序列
articleSchema.pre('save', function (next) {
  let that = this
  mongooseDB.counter.find({}, (err, doc) => {
    try {
      if (!doc.length) {
        new mongooseDB.counter({ _id: 'entityId', seq: 1 }).save()
        next()
      } else {
        mongooseDB.counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, function (error, counter) {
          that.id = counter.seq
          next()
        })
      }
    } catch (err) {
      return next(err)
    }
  })
})

const mongooseDB = {
  article: mongoose.model('article', articleSchema),
  counter: mongoose.model('counter', counterSchema)
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('success')
});

module.exports = mongooseDB
