<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCN from '@fullcalendar/core/locales/zh-cn'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        locale: zhCN,
        select: this.handleSelect,
        selectable: true,
        eventClick: this.handleEventClick,
        events: [
          { title: 'event 1', date: '2024-10-11' },
          { title: 'event 2', date: '2024-10-11' }
        ]
      }
    }
  },
  methods: {
    handleSelect: function (arg) {
      console.log(arg);
      this.$emit('select', arg)
    },
    handleEventClick: function (arg) {
      console.log(arg);
      this.$emit('eventClick', arg.event)
    },
    addEvent: function (arg) {
      this.calendarOptions.events.push(arg)
    }
  },
}
</script>
