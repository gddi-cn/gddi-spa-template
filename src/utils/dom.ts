import { StorageItem } from '@shared/enums/storage'

export const ls = {
  get: (key: StorageItem) => {
    try {
      const jsonValue = localStorage?.getItem(key)
      return jsonValue ? JSON.parse(jsonValue) : undefined
    } catch (e) {
      console.error(e)
      return undefined
    }
  },
  set: (key: StorageItem, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      localStorage?.setItem(key, jsonValue)
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}

export const ss = {
  get: (key: StorageItem) => {
    try {
      const jsonValue = sessionStorage?.getItem(key)
      return jsonValue ? JSON.parse(jsonValue) : undefined
    } catch (e) {
      console.error(e)
      return undefined
    }
  },
  set: (key: StorageItem, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      sessionStorage?.setItem(key, jsonValue)
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}