import { defineStore } from 'pinia'
import { getProductList } from '~/api'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: []
  }),
  actions: {
    async fetchProductList () {
      const result = await getProductList
      this.productList = [...result]
    }
  }
})
