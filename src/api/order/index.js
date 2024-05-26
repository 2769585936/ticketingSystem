import request from '@/utils/axios'

// 获取订单接口
export const getOrderApi = params => {
  return request.get('userorder', {
    params
  })
}
export const updateOrderApi = data => {
  return request.post('updateuserorder', data)
}

// 获取用户订单列表
export const getOrdersApi = params => {
  return request.get('userorders', {
    params
  })
}
// 删除用户订单列表
export const deleteOrdersApi = params => {
  return request.delete('deleteuserOrder', {
    params
  })
}
