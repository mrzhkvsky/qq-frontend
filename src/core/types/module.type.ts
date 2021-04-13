import { RouteRecordRaw } from 'vue-router'
import LocalesType from '@/core/types/locales.type'

interface ModuleType {
  name: string,
  locales?: LocalesType,
  routes?: RouteRecordRaw[]
}

export default ModuleType
