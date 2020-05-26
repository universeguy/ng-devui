import {Component} from '@angular/core';

@Component({
  selector: 'd-tree-select-demo',
  templateUrl: './tree-select-demo.component.html',
})

export class TreeSelectDemoComponent {
  TreeSelectBasicComponent = [
    {title: 'HTML', language: 'xml', code: require('!!raw-loader!./basic/tree-select-basic.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./basic/tree-select-basic.component.ts')},
  ];
  TreeSelectLeafOnlyComponent = [
    {title: 'HTML', language: 'xml', code: require('!!raw-loader!./leaf-only/tree-select-leaf-only.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./leaf-only/tree-select-leaf-only.component.ts')},
  ];
  TreeSelectHooksComponent = [
    {title: 'HTML', language: 'xml', code: require('!!raw-loader!./hooks/tree-select-hooks.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./hooks/tree-select-hooks.component.ts')},
  ];
  TreeSelectSearchableComponent = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./searchable/tree-select-searchable.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./searchable/tree-select-searchable.component.ts')},
  ];
  TreeSelectAppendToComponent = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./append-to/tree-select-append-to.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./append-to/tree-select-append-to.component.ts')},
  ];
  TreeSelectCustomIconComponent = [
    {title: 'HTML', language: 'xml', code: require('!!raw-loader!./custom-icon/tree-select-custom-icon.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./custom-icon/tree-select-custom-icon.component.ts')},
    {title: 'CSS', language: 'css', code: require('!!raw-loader!./custom-icon/tree-select-custom-icon.component.css')}
  ];
  navItems = [
    { dAnchorLink: 'basic-usage', value: '基本用法'},
    { dAnchorLink: 'leaf-only', value: '仅叶节点可选'},
    { dAnchorLink: 'init-hooks', value: '初始化完成时调用的钩子'},
    { dAnchorLink: 'simple-search', value: '可简易搜索树'},
    { dAnchorLink: 'append-to-element', value: 'Append To Element 能力'},
    { dAnchorLink: 'custom-icon', value: '自定义icon能力'}
  ];
}
