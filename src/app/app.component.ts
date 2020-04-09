import { Component } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

interface TopMenu{
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wanqing';
  menus: TopMenu[ ] = [{
    title: '热门',
    link: ''
  },
  {
    title: '男装',
    link: ''
  },
  {
    title: '女装',
    link: ''
  },
  {
    title: '家居',
    link: ''
  },
  {
    title: '箱包',
    link: ''
  },
  {
    title: '鞋履',
    link: ''
  },
  {
    title: '户外',
    link: ''
  },
  {
    title: '零食',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '数码',
    link: ''
  },
  {
    title: '推荐',
    link: ''
  }
  ];
}
