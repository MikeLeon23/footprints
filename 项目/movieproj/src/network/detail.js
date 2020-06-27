import {request} from '@/network/request.js'

export function getGoodsDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}