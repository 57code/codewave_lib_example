/// <reference types="@nasl/types" />
namespace extensions.lib_example.viewComponents {
  const { Component, Prop, ViewComponent, Slot, Method, Event, ViewComponentOptions } = nasl.ui;

  @ExtensionComponent({
    type: 'both',
    ideusage: {
      idetype: 'container',
      structured: true
    }
  })
  @Component({
    title: '菜单',
    description: '菜单',
  })
  export class MyMenu extends ViewComponent {
    constructor(options?: Partial<MyMenuOptions>) {
      super();
    }
  }

  export class MyMenuOptions extends ViewComponentOptions {
    @Prop({
      title: '内容',
      description: '显示文本',
      setter: {
        concept: 'InputSetter'
      }
    })
    text: nasl.core.String = '';

    @Slot({
      title: '内容',
      description: '显示文本',
      snippets: [ // ide 编辑 “+” 点击后的提示，  title提示描述， code 点击后默认添加代码
        {
          title: '子菜单',
          code: '<el-submenu></el-submenu>',
        },
        {
          title: '菜单分组',
          code: '<el-menu-item-group><template slot="title">菜单分组</template><el-menu-item>菜单项</el-menu-item></el-menu-item-group>',
        },
        { 
          title: '菜单项', 
          code: '<el-menu-item><i class="el-icon-setting"></i><span slot="title">菜单项</span></el-menu-item>' 
        },
      ],
    })
    slotDefault: () => Array<nasl.ui.ViewComponent>
  }
}