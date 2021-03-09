export default function guest(to, from, next) {
  // eslint-disable-next-line no-constant-condition
  if (false) {
    return next({ name: 'home-index' })
  } else {
    next()
  }
}
