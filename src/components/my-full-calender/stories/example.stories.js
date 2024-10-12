import Component from '../index';

export default {
  id: 'my-full-calender-examples',
  title: '组件列表/MyFullCalender/示例',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export const Example1 = {
  name: '基本用法',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<my-full-calender v-bind="$props"></my-full-calender>',
  }),
  args: {
    text: 'Hello world',
  },
};

export const Example2 = {
  name: '添加事件',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<my-full-calender v-bind="$props" @select="addEvent" ref="calender"></my-full-calender>',
    methods: {
      addEvent(e) {
        this.$refs.calender.addEvent({
          title: '测试',
          start: e.start,
          end: e.end,
        });
      },
    },
  }),
  args: {
    text: 'Hello world',
  },
};