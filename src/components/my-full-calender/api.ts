/// <reference types="@nasl/types" />
namespace extensions.lib_example.viewComponents {
  const { Component, Prop, ViewComponent, Slot, Method, Event, ViewComponentOptions } = nasl.ui;

  interface SelectionInfo {
    start: nasl.core.Date | nasl.core.DateTime;
    end: nasl.core.Date | nasl.core.DateTime;
    startStr: nasl.core.String;
    endStr: nasl.core.String;
    allDay: nasl.core.Boolean;
  }

  interface CalendarEvent {
    id: nasl.core.String;
    title: nasl.core.String;
    start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
    end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
    startStr: nasl.core.String;
    endStr: nasl.core.String;
    color: nasl.core.String;
    allDay: nasl.core.Boolean;
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
  export class MyFullCalender<T> extends ViewComponent {
    constructor(options?: Partial<MyFullCalenderOptions<T>>) {
      super();
    }

    @Method({
      title: '添加事件',
      description: '添加事件方法，传递的参数为事件对象，形如：{title: "事件标题", start: new Date(), end: new Date(), startStr: "2023-01-01", endStr: "2023-01-02", color: "#000000", allDay: false}',
    })
    addEvent: (event: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;

    @Method({
      title: '删除事件',
      description: '删除事件方法，传递的参数为事件对象，形如：{title: "事件标题", start: new Date(), end: new Date(), startStr: "2023-01-01", endStr: "2023-01-02", color: "#000000", allDay: false}',
    })
    deleteEvent: (event: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;

    @Method({
      title: '重新加载数据',
      description: '重新加载数据'
    })
    reload(): void { } // 需要提供重新加载数据源的方法
  }

  export class MyFullCalenderOptions<T> extends ViewComponentOptions {
    @Prop({
      title: '初始日程列表',
      description: '日程列表，形如：[{title: "事件标题", start: "2024-10-14T09:00", end: "2024-10-14T09:00"}]',
    })
    initialEvents: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }[];

    @Prop({
      group: '数据属性',
      title: '数据源',
      description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
      docDescription: '列表展示的数据。数据源可以绑定变量或者逻辑。变量或逻辑的返回值可以是数组，也可以是对象。对象格式为{list:[], total:10}',
    })
    dataSource: { list: nasl.collection.List<T>; total: nasl.core.Integer } | nasl.collection.List<T>;

    @Prop({
      group: '数据属性',
      title: '数据类型',
      description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
      docDescription: '列表每一行的数据类型。该属性为展示属性，由数据源推倒得到，无需填写。',
    })
    dataSchema: T;

    @Event({
      title: '点击日程',
      description: '点击日程触发，可用于获取日程信息',
    })
    onEventClick: (event: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;

    @Event({
      title: '选择日程区间',
      description: '选择日程区间之后触发的事件，可获取起始和结束时间，用于创建新的日程',
    })
    onSelect: (event: {
      start: nasl.core.Date | nasl.core.DateTime;
      end: nasl.core.Date | nasl.core.DateTime;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;

    @Event({
      title: '点击修改日程',
      description: '点击修改日程触发的事件，可用于获取日程信息',
    })
    onEventEdit: (event: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;

    @Event({
      title: '点击删除日程',
      description: '点击删除日程触发的事件，',
    })
    onEventDelete: (event: {
      id: nasl.core.String;
      title: nasl.core.String;
      start: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      end: nasl.core.Date | nasl.core.DateTime | nasl.core.String;
      startStr: nasl.core.String;
      endStr: nasl.core.String;
      color: nasl.core.String;
      allDay: nasl.core.Boolean;
    }) => void;
  }
}