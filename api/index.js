const mockDada = [
  {
    product_id: 'P1', // string
    product_name: '他是一隻絨毛玩偶他是綠色的', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '他的填充物是遺憾笑臉是假裝'
  },
  {
    product_id: 'P2', // string
    product_name: '企鵝嘟嘟玩偶2', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P3', // string
    product_name: '企鵝嘟嘟玩偶3', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P4', // string
    product_name: '企鵝嘟嘟玩偶4', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P5', // string
    product_name: '企鵝嘟嘟玩偶5', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P6', // string
    product_name: '企鵝嘟嘟玩偶6', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  },
  {
    product_id: 'P7', // string
    product_name: '企鵝嘟嘟玩偶7', // string
    product_price: 55023.0, // number
    product_category: '玩偶', // string
    product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  }
]

const getProductList = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockDada)
  }, 2000)
})

export {
  getProductList
}
