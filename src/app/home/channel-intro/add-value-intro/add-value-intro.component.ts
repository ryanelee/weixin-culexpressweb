import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-value-intro',
  templateUrl: './add-value-intro.component.html',
  styleUrls: ['./add-value-intro.component.css']
})
export class AddValueIntroComponent implements OnInit {

  panelOpenState = false;
  ADDVALUE_DATA = [
    {
      serviceName: '取出发票',
      price: '免费',
      intro: '方便代购, 不让客户了解价格'
    },
    {
      serviceName: '去除包装',
      price: '免费',
      intro: '去除鞋盒/包装,减少运输重量'
    },
    {
      serviceName: '合箱服务',
      price: '免费',
      intro: '多个包裹合成一箱'
    },
    {
      serviceName: '分箱服务',
      price: '免费',
      intro: '把一个包裹分成多个包裹'
    },
    {
      serviceName: '弃货服务',
      price: '免费',
      intro: '将商品或者包裹丢弃'
    },
    {
      serviceName: '自提服务',
      price: '免费',
      intro: '从仓库取走您从网上下单的包裹'
    },
    {
      serviceName: '退货服务',
      price: '￥20/次',
      intro: '将包裹退回购物网站或其他地方'
    },
    {
      serviceName: '加套外箱',
      price: '￥20/箱',
      intro: '在原外箱的基础上进行加固'
    },
    {
      serviceName: '仓储服务',
      price: '免费',
      intro: '包裹入库后, 没有提出出库, 也没有自提. 备注:60天之后￥3/天, 365天后弃货处理'
    },
    {
      serviceName: '清点拍照',
      price: '￥20',
      intro: '对包裹内物品进行清点并拍照'
    },
    {
      serviceName: '复秤服务',
      price: '￥10/件',
      intro: '核实包裹重量, 并拍照回复客户'
    },
    {
      serviceName: '内件加固',
      price: '￥3',
      intro: '对包裹内商品用防震气泡进行加固服务'
    },
    {
      serviceName: '购买保险',
      price: '5%',
      intro: '在商品丢失后, 按保额进行赔偿, 保险为保额的5%'
    },
    // {
    //   serviceName: '退库费',
    //   price: '￥20',
    //   intro: '将顾客在系统上的余额退款给顾客(手续费20元, 最大余额120元)'
    // }
  ];

  constructor() { }

  ngOnInit() {
  }
}
