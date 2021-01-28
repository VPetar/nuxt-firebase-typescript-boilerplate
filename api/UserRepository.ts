import { User } from '~/models'

export default {
  index: async () => {},
  create: async (user: User) => {
    return await Promise.resolve({
      message: `Simulate: User created ${user.email}!`
    })
  },
  read: async (uid: string) => {
    // `Simulate user with uid ${uid} retrieve`
    return await Promise.resolve(new User('qwe', 'qwe@qwe.qwe', '', uid, 'mongoID_here'))
  },
  update: async (user: User) => {
    return await Promise.resolve({
      message: `Simulate: User with uid ${user.uid} updated!`
    })
  },
  delete: async (user: User) => {
    return await Promise.resolve({
      message: `Simulate: User with uid ${user.uid} deleted!`
    })
  }
}
