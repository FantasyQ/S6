import { defineStore } from 'pinia'
import { getProductList } from '~/api'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: []
  }),
  getters: {
    getProductByID (state) {
      return pdID => (state.productList.filter((element) => {
        return element.product_id === pdID
      }))
    }
  },
  actions: {
    async fetchProductList () {
      const result = await getProductList
      this.productList = [...result]
    }
  }
})
