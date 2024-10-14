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
  })
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
  })
};

export const Example3 = {
  name: '删除事件',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<my-full-calender v-bind="$props" @select="addEvent" @eventDelete="deleteEvent" ref="calender"></my-full-calender>',
    methods: {
      addEvent(e) {
        this.$refs.calender.addEvent({
          title: '测试',
          start: e.start,
          end: e.end,
        });
      },
      deleteEvent(e) {
        this.$refs.calender.deleteEvent(e);
      },
    },
  })
};

export const Example4 = {
  name: '初始事件数据',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<my-full-calender :initialEvents="events" ></my-full-calender>',
    data() {
      return {
        events: [
          {
            title: '测试',
            start: '2024-10-14T08:00:00',
            end: '2024-10-14T09:00:00',
          },
        ],
      }
    }
  }),
};

export const Example5 = {
  name: '使用数据源',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<my-full-calender :dataSource="events"></my-full-calender>',
    data() {
      return {
        events: [
          {
            title: '测试',
            start: '2024-10-14T08:00:00',
            end: '2024-10-14T09:00:00',
          },
        ]
      }
    },
    mounted () {
      setTimeout(() => {
        this.events.push({
          title: '测试2',
          start: '2024-10-14T09:00:00',
          end: '2024-10-14T10:00:00',
        })
      }, 1000);
    },
  }),
};