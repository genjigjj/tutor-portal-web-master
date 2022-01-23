import request from '@/utils/request'

export function listByCode(code) {
  return request({
    url: '/system/dicts/code/'+code,
    method: 'get',
  })
}
