import {request} from '@/network/request.js'

export function getGoodsDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}