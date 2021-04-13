import { RouteLocationNormalized } from 'vue-router'

/**
 * @return null|string Route name
 */
type MiddlewareType = (to: RouteLocationNormalized, from: RouteLocationNormalized) => null|string

export default MiddlewareType
