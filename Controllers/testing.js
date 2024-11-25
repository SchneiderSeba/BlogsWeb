import { Blog } from '../Models/Blog.js'
import { User } from '../Models/User.js'
const testinRouter = require('express').Router()

testinRouter.post('/reset', async (req, res) => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  res.status(204).end()
})

module.exports = testinRouter
