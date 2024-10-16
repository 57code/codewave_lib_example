<template>
  <Mentionable :keys="['@']" :items="items">
    <textarea v-model="text" />

    <template #item-@="{ item }">
      <div class="user">
        <img :src="item.avatar" class="avatar" />
        <span class="dim">
          {{ item.label }}
        </span>
      </div>
    </template>
  </Mentionable>
</template>
<script>
import { Mentionable } from 'vue-mention'
import 'floating-vue/dist/style.css'

export default {
  name: 'my-mention',
  components: {
    Mentionable,
  },

  props: {
    text: {
      type: String,
      default: 'Hello'
    },
    items: {
      type: Array,
      default: () =>
        [
          {
            value: 'cat',
            label: 'Mr Cat',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
          },
          {
            value: 'dog',
            label: 'Mr Dog',
            avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
          },
        ]
    },
  },
};
</script>
<style>
.mention-item {
  padding: 4px 10px;
  border-radius: 4px;
}

.avatar {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  vertical-align: middle;
  border-radius: 50%;
}

.mention-selected {
  background: rgb(226, 226, 225);
}
</style>
