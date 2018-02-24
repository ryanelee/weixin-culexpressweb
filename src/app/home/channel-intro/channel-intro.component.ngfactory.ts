/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './channel-intro.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/material/expansion/typings/index.ngfactory';
import * as i3 from '@angular/material/expansion';
import * as i4 from '@angular/cdk/collections';
import * as i5 from '@angular/cdk/a11y';
import * as i6 from '@angular/common';
import * as i7 from '@angular/material/tabs/typings/index.ngfactory';
import * as i8 from '@angular/material/core';
import * as i9 from '@angular/material/tabs';
import * as i10 from './add-value-intro/add-value-intro.component.ngfactory';
import * as i11 from './add-value-intro/add-value-intro.component';
import * as i12 from './channel-intro.component';
import * as i13 from 'app/core/service/common-api.service';
const styles_ChannelIntroComponent:any[] = [i0.styles];
export const RenderType_ChannelIntroComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_ChannelIntroComponent,data:{}});
function View_ChannelIntroComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(1,
      0,(null as any),(null as any),1,'i',[['class','material-icons md-18']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
      (null as any),['device_hub'])),(_l()(),i1.ɵted(-1,(null as any),[' 渠道说明\n      ']))],
      (null as any),(null as any));
}
function View_ChannelIntroComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(2,0,(null as any),
      (null as any),1,'i',[['class','material-icons md-18']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['check_circle'])),(_l()(),i1.ɵted(-1,(null as any),[' 包关税 ']))],(null as any),
      (null as any));
}
function View_ChannelIntroComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(2,0,(null as any),
      (null as any),1,'i',[['class','material-icons md-18']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['remove_circle'])),(_l()(),i1.ɵted(-1,(null as any),[' 不包关税 ']))],(null as any),
      (null as any));
}
function View_ChannelIntroComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),43,'mat-expansion-panel',
      [['class','mat-expansion-panel']],[[2,'mat-expanded',(null as any)],[2,'mat-expansion-panel-spacing',
          (null as any)]],[[(null as any),'opened'],[(null as any),'closed']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('opened' === en)) {
          const pd_0:any = ((<any>(_co.panelOpenState = true)) !== false);
          ad = (pd_0 && ad);
        }
        if (('closed' === en)) {
          const pd_1:any = ((<any>(_co.panelOpenState = false)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MatExpansionPanel_0,i2.RenderType_MatExpansionPanel)),i1.ɵprd(6144,
      (null as any),i3.AccordionItem,(null as any),[i3.MatExpansionPanel]),i1.ɵdid(2,
      704512,(null as any),0,i3.MatExpansionPanel,[[2,i3.MatAccordion],i1.ChangeDetectorRef,
          i4.UniqueSelectionDispatcher],(null as any),(null as any)),(_l()(),i1.ɵted(-1,
      1,['\n          '])),(_l()(),i1.ɵeld(4,0,(null as any),0,12,'mat-expansion-panel-header',
      [['class','panel-title mat-expansion-panel-header'],['role','button']],[[1,'tabindex',
          0],[1,'aria-controls',0],[1,'aria-expanded',0],[1,'aria-disabled',0],[2,
          'mat-expanded',(null as any)],[40,'@expansionHeight',0]],[[(null as any),
          'click'],[(null as any),'keyup']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,5)._toggle()) !== false);
          ad = (pd_0 && ad);
        }
        if (('keyup' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,5)._keyup($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MatExpansionPanelHeader_0,i2.RenderType_MatExpansionPanelHeader)),
      i1.ɵdid(5,180224,(null as any),0,i3.MatExpansionPanelHeader,[i1.Renderer2,i3.MatExpansionPanel,
          i1.ElementRef,i5.FocusMonitor,i1.ChangeDetectorRef],(null as any),(null as any)),
      i1.ɵpod(6,{collapsedHeight:0,expandedHeight:1}),i1.ɵpod(7,{value:0,params:1}),
      (_l()(),i1.ɵted(-1,2,['\n            '])),(_l()(),i1.ɵeld(9,0,(null as any),
          0,2,'mat-panel-title',[['class','mat-expansion-panel-header-title']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(10,16384,
          (null as any),0,i3.MatExpansionPanelTitle,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted(11,(null as any),['\n              渠道: ','\n            '])),
      (_l()(),i1.ɵted(-1,2,['\n            '])),(_l()(),i1.ɵeld(13,0,(null as any),
          1,2,'mat-panel-description',[['class','mat-expansion-panel-header-description']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(14,16384,(null as any),0,i3.MatExpansionPanelDescription,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(15,(null as any),['\n              首重: ￥',
          ' 续重: ￥','\n            '])),(_l()(),i1.ɵted(-1,2,['\n          '])),(_l()(),
          i1.ɵted(-1,1,['\n\n          '])),(_l()(),i1.ɵeld(18,0,(null as any),1,24,
          'div',[['class','panel-detail']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ChannelIntroComponent_3)),
      i1.ɵdid(21,16384,(null as any),0,i6.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ChannelIntroComponent_4)),
      i1.ɵdid(24,16384,(null as any),0,i6.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵeld(26,0,(null as any),(null as any),4,'span',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i1.ɵeld(28,0,(null as any),
          (null as any),1,'i',[['class','material-icons']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['local_airport'])),(_l()(),i1.ɵted(30,(null as any),[' 限重',''])),(_l()(),
          i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(32,0,(null as any),
          (null as any),4,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(34,0,(null as any),(null as any),1,'i',[['class','material-icons']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['verified_user'])),(_l()(),i1.ɵted(36,(null as any),
          [' ',''])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(38,0,(null as any),(null as any),0,'span',([] as any[]),[[8,'innerHTML',
              1]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(40,0,(null as any),
          (null as any),1,'i',[['class','material-icons md-18']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['info'])),(_l()(),i1.ɵted(42,(null as any),[' ','\n          '])),(_l()(),
          i1.ɵted(-1,1,['\n        ']))],(_ck,_v) => {
    const currVal_11:any = (_v.context.$implicit.tax == 1);
    _ck(_v,21,0,currVal_11);
    const currVal_12:any = (_v.context.$implicit.tax == 0);
    _ck(_v,24,0,currVal_12);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,2).expanded;
    const currVal_1:any = i1.ɵnov(_v,2)._hasSpacing();
    _ck(_v,0,0,currVal_0,currVal_1);
    const currVal_2:any = (i1.ɵnov(_v,5).panel.disabled? (0 - 1): 0);
    const currVal_3:any = i1.ɵnov(_v,5)._getPanelId();
    const currVal_4:any = i1.ɵnov(_v,5)._isExpanded();
    const currVal_5:any = i1.ɵnov(_v,5).panel.disabled;
    const currVal_6:any = i1.ɵnov(_v,5)._isExpanded();
    const currVal_7:any = _ck(_v,7,0,i1.ɵnov(_v,5)._getExpandedState(),_ck(_v,6,0,
        i1.ɵnov(_v,5).collapsedHeight,i1.ɵnov(_v,5).expandedHeight));
    _ck(_v,4,0,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_8:any = _v.context.$implicit.serviceName;
    _ck(_v,11,0,currVal_8);
    const currVal_9:any = _v.context.$implicit.firstWeightRate;
    const currVal_10:any = _v.context.$implicit.continueWeightRate;
    _ck(_v,15,0,currVal_9,currVal_10);
    const currVal_13:any = _v.context.$implicit.maxWeight;
    _ck(_v,30,0,currVal_13);
    const currVal_14:any = _v.context.$implicit.idCard;
    _ck(_v,36,0,currVal_14);
    const currVal_15:any = _v.context.$implicit.serviceSummary;
    _ck(_v,38,0,currVal_15);
    const currVal_16:any = _v.context.$implicit.serviceLimitation;
    _ck(_v,42,0,currVal_16);
  });
}
function View_ChannelIntroComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(1,
      0,(null as any),(null as any),1,'i',[['class','material-icons md-18']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
      (null as any),['spellcheck'])),(_l()(),i1.ɵted(-1,(null as any),[' 增值服务      \n      ']))],
      (null as any),(null as any));
}
export function View_ChannelIntroComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),37,'div',[['class',
      'main-container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),0,'img',[['alt','CUL中美速递发货渠道说明'],['src','assets/images/channelintro.jpg']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(4,0,(null as any),
          (null as any),32,'mat-tab-group',[['class','mat-tab-group']],[[2,'mat-tab-group-dynamic-height',
              (null as any)],[2,'mat-tab-group-inverted-header',(null as any)]],(null as any),
          (null as any),i7.View_MatTabGroup_0,i7.RenderType_MatTabGroup)),i1.ɵdid(5,
          16384,(null as any),0,i8.MatPrefixRejector,([] as any[]),(null as any),(null as any)),
      i1.ɵdid(6,11714560,(null as any),1,i9.MatTabGroup,[i1.Renderer2,i1.ElementRef,
          i1.ChangeDetectorRef],(null as any),(null as any)),i1.ɵqud(603979776,1,{_tabs:1}),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(9,16777216,(null as any),
          (null as any),14,'mat-tab',[['label','渠道说明']],(null as any),(null as any),
          (null as any),i7.View_MatTab_0,i7.RenderType_MatTab)),i1.ɵdid(10,16384,(null as any),
          0,i8.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(11,
          770048,[[1,4]],1,i9.MatTab,[i1.ViewContainerRef],{textLabel:[0,'textLabel']},
          (null as any)),i1.ɵqud(335544320,2,{templateLabel:0}),(_l()(),i1.ɵted(-1,
          0,['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),0,1,(null as any),
          View_ChannelIntroComponent_1)),i1.ɵdid(15,16384,[[2,4]],0,i9.MatTabLabel,
          [i1.TemplateRef,i1.ViewContainerRef],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,0,['\n      '])),(_l()(),i1.ɵeld(17,0,(null as any),0,5,'mat-accordion',
          [['class','mat-accordion']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),i1.ɵdid(18,16384,(null as any),0,i3.MatAccordion,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ChannelIntroComponent_2)),
      i1.ɵdid(21,802816,(null as any),0,i6.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n      '])),(_l()(),i1.ɵted(-1,0,['\n    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n\n    '])),(_l()(),i1.ɵeld(25,16777216,(null as any),(null as any),
          10,'mat-tab',[['label','增值服务']],(null as any),(null as any),(null as any),
          i7.View_MatTab_0,i7.RenderType_MatTab)),i1.ɵdid(26,16384,(null as any),0,
          i8.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(27,
          770048,[[1,4]],1,i9.MatTab,[i1.ViewContainerRef],{textLabel:[0,'textLabel']},
          (null as any)),i1.ɵqud(335544320,3,{templateLabel:0}),(_l()(),i1.ɵted(-1,
          0,['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),0,1,(null as any),
          View_ChannelIntroComponent_5)),i1.ɵdid(31,16384,[[3,4]],0,i9.MatTabLabel,
          [i1.TemplateRef,i1.ViewContainerRef],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,0,['\n      '])),(_l()(),i1.ɵeld(33,0,(null as any),0,1,'app-add-value-intro',
          ([] as any[]),(null as any),(null as any),(null as any),i10.View_AddValueIntroComponent_0,
          i10.RenderType_AddValueIntroComponent)),i1.ɵdid(34,114688,(null as any),
          0,i11.AddValueIntroComponent,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted(-1,0,['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n\n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n']))],(_ck,_v) => {
    var _co:i12.ChannelIntroComponent = _v.component;
    const currVal_2:any = '渠道说明';
    _ck(_v,11,0,currVal_2);
    const currVal_3:any = _co.ELEMENT_DATA;
    _ck(_v,21,0,currVal_3);
    const currVal_4:any = '增值服务';
    _ck(_v,27,0,currVal_4);
    _ck(_v,34,0);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,6).dynamicHeight;
    const currVal_1:any = (i1.ɵnov(_v,6).headerPosition === 'below');
    _ck(_v,4,0,currVal_0,currVal_1);
  });
}
export function View_ChannelIntroComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-channel-intro',
      ([] as any[]),(null as any),(null as any),(null as any),View_ChannelIntroComponent_0,
      RenderType_ChannelIntroComponent)),i1.ɵdid(1,114688,(null as any),0,i12.ChannelIntroComponent,
      [i13.CommonApiService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ChannelIntroComponentNgFactory:i1.ComponentFactory<i12.ChannelIntroComponent> = i1.ɵccf('app-channel-intro',
    i12.ChannelIntroComponent,View_ChannelIntroComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL3dvcmtzdGF0aW9uL3dlaXhpbi1jdWwvd2VpeGluLWN1bHdlYi9zcmMvYXBwL2hvbWUvY2hhbm5lbC1pbnRyby9jaGFubmVsLWludHJvLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy93b3Jrc3RhdGlvbi93ZWl4aW4tY3VsL3dlaXhpbi1jdWx3ZWIvc3JjL2FwcC9ob21lL2NoYW5uZWwtaW50cm8vY2hhbm5lbC1pbnRyby5jb21wb25lbnQudHMiLCJuZzovLy93b3Jrc3RhdGlvbi93ZWl4aW4tY3VsL3dlaXhpbi1jdWx3ZWIvc3JjL2FwcC9ob21lL2NoYW5uZWwtaW50cm8vY2hhbm5lbC1pbnRyby5jb21wb25lbnQuaHRtbCIsIm5nOi8vL3dvcmtzdGF0aW9uL3dlaXhpbi1jdWwvd2VpeGluLWN1bHdlYi9zcmMvYXBwL2hvbWUvY2hhbm5lbC1pbnRyby9jaGFubmVsLWludHJvLmNvbXBvbmVudC50cy5DaGFubmVsSW50cm9Db21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cbiAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2NoYW5uZWxpbnRyby5qcGdcIiBhbHQ9XCJDVUzkuK3nvo7pgJ/pgJLlj5HotKfmuKDpgZPor7TmmI5cIj5cbiAgPG1hdC10YWItZ3JvdXA+XG4gICAgPG1hdC10YWIgbGFiZWw9XCLmuKDpgZPor7TmmI5cIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMThcIj5kZXZpY2VfaHViPC9pPiDmuKDpgZPor7TmmI5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWFjY29yZGlvbj5cbiAgICAgICAgPG1hdC1leHBhbnNpb24tcGFuZWwgKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgRUxFTUVOVF9EQVRBXCIgKG9wZW5lZCk9XCJwYW5lbE9wZW5TdGF0ZSA9IHRydWVcIiAoY2xvc2VkKT1cInBhbmVsT3BlblN0YXRlID0gZmFsc2VcIj5cbiAgICAgICAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlxuICAgICAgICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgICAgICAg5rig6YGTOiB7e2VsZW1lbnQuc2VydmljZU5hbWV9fVxuICAgICAgICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICDpppbph406IO+/pXt7ZWxlbWVudC5maXJzdFdlaWdodFJhdGV9fSDnu63ph406IO+/pXt7ZWxlbWVudC5jb250aW51ZVdlaWdodFJhdGV9fVxuICAgICAgICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1kZXRhaWxcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbWVudC50YXggPT0gMVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+Y2hlY2tfY2lyY2xlPC9pPiDljIXlhbPnqI4gPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtZW50LnRheCA9PSAwXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMThcIj5yZW1vdmVfY2lyY2xlPC9pPiDkuI3ljIXlhbPnqI4gPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhbF9haXJwb3J0PC9pPiDpmZDph417e2VsZW1lbnQubWF4V2VpZ2h0fX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnZlcmlmaWVkX3VzZXI8L2k+IHt7ZWxlbWVudC5pZENhcmR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudC5zZXJ2aWNlU3VtbWFyeVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMThcIj5pbmZvPC9pPiB7e2VsZW1lbnQuc2VydmljZUxpbWl0YXRpb259fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgICA8L21hdC1hY2NvcmRpb24+XG4gICAgPC9tYXQtdGFiPlxuXG4gICAgPG1hdC10YWIgbGFiZWw9XCLlop7lgLzmnI3liqFcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMThcIj5zcGVsbGNoZWNrPC9pPiDlop7lgLzmnI3liqEgICAgICBcbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8YXBwLWFkZC12YWx1ZS1pbnRybz48L2FwcC1hZGQtdmFsdWUtaW50cm8+XG4gICAgPC9tYXQtdGFiPlxuXG4gIDwvbWF0LXRhYi1ncm91cD5cblxuPC9kaXY+IiwiPGFwcC1jaGFubmVsLWludHJvPjwvYXBwLWNoYW5uZWwtaW50cm8+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSWlDLG9EQUN2QjtNQUFBO01BQUEsMERBQWdDO01BQUEsK0JBQWM7Ozs7b0JBYzVDO01BQUEsd0VBQStCO2FBQUEseUNBQzdCO01BQUE7TUFBQSw0Q0FBZ0M7TUFBQSxtQkFBZ0I7Ozs7b0JBQ2xEO01BQUEsd0VBQStCO2FBQUEseUNBQzdCO01BQUE7TUFBQSw0Q0FBZ0M7TUFBQSxvQkFBaUI7Ozs7b0JBZHZEO01BQUE7VUFBQTttQkFBQTtRQUFBO1FBQUE7UUFBMEQ7VUFBQTtVQUFBO1FBQUE7UUFBaUM7VUFBQTtVQUFBO1FBQUE7UUFBM0Y7TUFBQTtNQUFBLDRFQUFBO01BQUE7c0NBQUEsK0JBQTZIO01BQUEscUJBQzNIO01BQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBO2FBQUE7NERBQUE7YUFBQTtNQUFnRCwwQ0FDOUM7VUFBQTtVQUFBLGlFQUFBO1VBQUE7TUFBaUI7TUFFQywwQ0FDbEI7VUFBQTtVQUFBO2FBQUE7VUFBQSw2QkFBdUI7VUFBQSw2QkFFQyx3Q0FDRztpQkFBQSwyQkFFN0I7VUFBQTtVQUFBLDhCQUEwQjtNQUN4QjthQUFBO1VBQUEsaUNBQzhEO01BQzlEO2FBQUE7VUFBQSxpQ0FDZ0U7TUFDaEU7VUFBQSwwREFBTTtVQUFBLHFDQUNKO1VBQUE7VUFBQSw0Q0FBMEI7VUFBQSxvQkFBaUIsOENBQStCO2lCQUFBLHVDQUM1RTtVQUFBO1VBQUEsOEJBQU07TUFDSjtVQUFBO01BQTBCLHFEQUFpQjtVQUFBLFdBQTBCLHNEQUN2RTtpQkFBQTtjQUFBLDhEQUFrRDtpQkFBQSx1Q0FDbEQ7VUFBQTtVQUFBLDRDQUFnQztVQUFBLFdBQVEsd0RBQ3BDO2lCQUFBO0lBVkU7SUFBTixZQUFNLFVBQU47SUFFTTtJQUFOLFlBQU0sVUFBTjs7SUFiSjtJQUFBO0lBQUEsV0FBQSxtQkFBQTtJQUNFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtlQUFBO0lBQUEsV0FBQSwyREFBQTtJQUNtQjtJQUFBO0lBR007SUFBQTtJQUFBO0lBV3NCO0lBQUE7SUFFQTtJQUFBO0lBQ3ZDO0lBQU4sWUFBTSxVQUFOO0lBQ3dDO0lBQUE7Ozs7b0JBT25CLG9EQUN2QjtNQUFBO01BQUEsMERBQWdDO01BQUEsK0JBQWM7Ozs7b0JBcEN4RDtNQUFBO01BQTRCLDRDQUMxQjtVQUFBO1VBQUE7TUFBOEQsNENBQzlEO1VBQUE7Y0FBQTtVQUFBLHVFQUFBO1VBQUE7YUFBQTs4QkFBQTtNQUFlLDhDQUNiO1VBQUE7VUFBQSw2REFBQTtVQUFBLHlFQUFBO1VBQUE7VUFBQSxzREFBc0I7VUFBQSxpQkFDcEI7VUFBQSxzQ0FBQTtVQUFBLGtFQUVjO2lCQUFBLHFCQUNkO1VBQUE7VUFBQSx1QkFBQTtVQUFBLDZCQUFlO01BQ2I7YUFBQTs0QkFBQSx5Q0FzQnNCO1VBQUEsNkJBQ1Isa0NBQ1I7VUFBQSw2QkFFVjtVQUFBOytDQUFBLFVBQUE7K0JBQUEsa0RBQUE7VUFBQTtVQUFBLHNEQUFzQjtVQUFBLGlCQUNwQjtVQUFBLHNDQUFBO1VBQUEsa0VBRWM7aUJBQUEscUJBQ2Q7VUFBQTsrQ0FBQSxVQUFBO1VBQUE7TUFBMkMsa0NBQ25DO01BRUk7O0lBdENMO0lBQVQsWUFBUyxTQUFUO0lBS3lCO0lBQXJCLFlBQXFCLFNBQXJCO0lBMEJLO0lBQVQsWUFBUyxTQUFUO0lBSUU7O0lBcENKO0lBQUE7SUFBQSxXQUFBLG1CQUFBOzs7O29CQ0ZGO01BQUE7c0NBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=