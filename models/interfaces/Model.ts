export default interface Model {
  id?: string
  instantiate: Function
  commit: Function
  retrieve: Function
}
