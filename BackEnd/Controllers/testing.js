import { Blog } from '../Models/Blog.js'
import { User } from '../Models/User.js'

export const testinRouter = Router()

testinRouter.post('/reset', async (req, res) => {
  await Blog.deleteMany({})
  await User.deleteMany({})
  res.json({ message: 'Database reset' })
  res.status(204).end()
})
// Compare this snippet from BackEnd/Controllers/testing.js: