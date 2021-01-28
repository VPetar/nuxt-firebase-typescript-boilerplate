import API from '@/api'
import { Model } from './interfaces'

export default class User implements Model {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    public displayName?: string,
    public email?: string,
    public photoURL?: string,
    public uid?: string,
    public id?: string
  ) {}

  public instantiate (obj: string | object) {
    const o = typeof obj === 'string' ? JSON.parse(obj) : obj
    this.displayName = o.displayName
    this.email = o.email
    this.photoURL = o.photoURL
    this.uid = o.uid
    this.id = o.id

    return this
  }

  public async commit (): Promise<string> {
    // implement commit here
    if (this.uid) {
      const { message } = await API.user.update(this)
      return message
    }
    const { message } = await API.user.create(this)
    return message
  }

  public async retrieve (id: string): Promise<User> {
    return await API.user.read(id)
  }

  // ...
}
