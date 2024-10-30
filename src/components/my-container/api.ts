/// <reference types="@nasl/types" />
namespace extensions.lib_example.viewComponents {
  const { Component, Prop, ViewComponent, Slot, Method, Event, ViewComponentOptions } = nasl.ui;

  @ExtensionComponent({
    type: 'pc',
    ideusage: {
      idetype: 'container',
      // structured: true,
    }
  })
  @Component({
    title: '日程管理',
    description: '日程管理',
  })
  export class MyContainer extends ViewComponent {
    constructor(options?: Partial<MyContainerOptions>) {
      super();
    }

    
  }

  export class MyContainerOptions extends ViewComponentOptions {
    
    @Slot({
      title: '默认插槽',
      description: '默认插槽',
    })
    slotDefault: () => Array<nasl.ui.ViewComponent>;
  }
}