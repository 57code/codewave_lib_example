/// <reference types="@nasl/types" />
namespace extensions.lib_example.viewComponents {
  const { Component, Prop, ViewComponent, Slot, Method, Event, ViewComponentOptions } = nasl.ui;


  interface SelectionInfo {
    start: Date;
    end: Date;
    startStr: string;
    endStr: string;
    allDay: boolean;
  }
  
  interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    startStr: string;
    endStr: string;
    color: string;
    allDay: boolean;
  }


  @ExtensionComponent({
    type: 'pc',
    ideusage: {
      idetype: 'element',
    }
  })
  @Component({
    title: '日程管理',
    description: '日程管理',
  })
  export class MyFullCalender extends ViewComponent {
    constructor(options?: Partial<MyFullCalenderOptions>) {
      super();
    }

    @Method({
      title: '添加事件',
      description: '添加事件方法，传递的参数为事件对象，形如：{title: "事件标题", start: new Date(), end: new Date(), startStr: "2023-01-01", endStr: "2023-01-02", color: "#000000", allDay: false}',
    })
    addEvent: (event: CalendarEvent) => void;

    @Method({
      title: '删除事件',
      description: '删除事件方法，传递的参数为事件对象，形如：{title: "事件标题", start: new Date(), end: new Date(), startStr: "2023-01-01", endStr: "2023-01-02", color: "#000000", allDay: false}',
    })
    deleteEvent: (event: CalendarEvent) => void;
  }

  export class MyFullCalenderOptions extends ViewComponentOptions {
    // @Prop({
    //   title: '内容',
    //   description: '显示文本',
    //   setter: {
    //     concept: 'InputSetter'
    //   }
    // })
    // text: nasl.core.String = '';

    @Event({
      title: '点击日程',
      description: '点击日程触发，可用于获取日程信息',
    })
    onEventClick: (event: CalendarEvent) => void;

    @Event({
      title: '选择日程区间',
      description: '选择日程区间之后触发的事件，可获取起始和结束时间，用于创建新的日程',
    })
    onSelect: (event: SelectionInfo) => void;

    @Event({
      title: '修改日程',
      description: '点击修改日程触发的事件，可用于获取日程信息',
    })
    onEventEdit: (event: CalendarEvent) => void;

    @Event({
      title: '点击删除日程',
      description: '点击删除日程触发的事件，',
    })
    onEventDelete: (event: CalendarEvent) => void;
  }
}