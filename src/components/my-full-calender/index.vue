<template>
  <FullCalendar ref="calendar" :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import zhCN from '@fullcalendar/core/locales/zh-cn'
import './assets/iconfont.css'

var instance;

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  mounted() {
    instance = this
  },
  data() {
    return {
      calendarOptions: {
        plugins: [timeGridPlugin, dayGridPlugin, listPlugin, interactionPlugin],
        // 初始视图
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'today prev title next',
          right: 'timeGridWeek,dayGridMonth,listMonth'
        },
        // 定义dayHeaderContent
        dayHeaderDidMount: function (arg) {
          const viewType = arg.view.type;
          const el = arg.el;
          const date = arg.date;
          const weekday = arg.text.substr(-2);
          const div = document.createElement('div')
          const p2 = document.createElement('p')
          p2.innerText = weekday
          p2.classList.add('weekday')
          div.appendChild(p2)
          if (viewType === 'timeGridWeek') {
            const p1 = document.createElement('p')
            p1.innerText = date.getDate()
            p1.classList.add('date')
            div.appendChild(p1)
          }
          el.innerText = ''
          el.appendChild(div)
        },
        // 添加hover到event时操作按钮
        eventDidMount: function (arg) {
          if (arg.view.type === 'listMonth') {
            const el = arg.el.lastChild
            const event = arg.event
            const span = document.createElement('span')
            span.classList.add('event-operation')
            span.style.visibility = 'hidden'
            const i1 = document.createElement('i')
            const i2 = document.createElement('i')
            i1.classList.add('iconfont', 'icon-edit')
            i2.classList.add('iconfont', 'icon-delete')
            i1.addEventListener('click', () => {
              instance.$emit('eventEdit', event)
            })
            i2.addEventListener('click', () => {
              instance.$emit('eventDelete', event)
            })
            span.appendChild(i1)
            span.appendChild(i2)
            el.appendChild(span)
          }
        },
        eventMouseEnter: function (arg) {
          const el = arg.el
          const oper = el.querySelector('.event-operation')
          if (oper) oper.style.visibility = 'visible'
        },
        eventMouseLeave: function (arg) {
          const el = arg.el
          const oper = el.querySelector('.event-operation')
          if (oper) oper.style.visibility = 'hidden'
        },
        locale: zhCN,
        // 显示当前时间点指示器
        nowIndicator: true,
        // 可拖选
        select: this.handleSelect,
        selectable: true,
        // 事件相关设置
        eventColor: '#dee6f4',
        eventTextColor: '#333',
        eventClick: this.handleEventClick,
        events: []
      }
    }
  },
  methods: {
    handleSelect: function (arg) {
      this.$emit('select', arg)
    },
    handleEventClick: function (arg) {
      this.$emit('eventClick', arg.event)
    },
    addEvent: function (arg) {
      this.$refs.calendar.getApi().addEvent(arg)
    },
    deleteEvent: function (arg) {
      const api = this.$refs.calendar.getApi()
      api.getEventById(arg.id).remove()
    },
  },
}
</script>

<style>
:root {
  --fc-button-bg-color: #f0f2f5;
  --fc-button-text-color: #333;
  --fc-button-border-color: #f0f2f5;
  --fc-button-hover-bg-color: #f0f2f5;
  --fc-button-hover-border-color: #f0f2f5;
  --fc-button-active-bg-color: #f0f2f5;
  --fc-daygrid-day-bg-color: #fff;
}

.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
.fc .fc-button-primary:not(:disabled):active:focus {
  box-shadow: none;
}

.fc .fc-button-primary,
.fc .fc-button-primary:hover {
  background: #fff;
  border-color: #e2e2e2;
  color: #333;
  cursor: pointer;
}

.fc .fc-button-primary:not(:disabled).fc-button-active,
.fc .fc-button-primary:not(:disabled):active {
  background: rgba(65, 195, 204, 0.2);
  border-color: #01afb4;
  color: #01afb4;
  cursor: pointer;
}

.fc .fc-toolbar-title {
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  vertical-align: middle;
}

.fc-col-header-cell .fc-scrollgrid-sync-inner {
  display: none;
}

.fc-day .weekday {
  margin: 10px 0 5px;
}

.fc-day .date {
  width: 50px;
  height: 50px;
  color: #afadad;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
  margin: 0 auto 10px;
}

.fc-day-today .date {
  background-color: #01afb4;
  border-radius: 50%;
  color: #fff;
}

.fc-timegrid-event .fc-event-main {
  padding-left: 7px;
  border-left: 4px solid #88abda;
}

.fc-timegrid-axis,
.fc-timegrid-slot-label {
  background-color: #f0f2f5;
}

.event-operation {
  float: right;
}

.event-operation .iconfont {
  font-size: 24px;
  cursor: pointer;
}

.fc .fc-list-table td {
  line-height: 24px;
}
</style>