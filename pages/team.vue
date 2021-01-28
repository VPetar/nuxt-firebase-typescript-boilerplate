<template>
  <div>
    <h1 class="text-lg font-medium">
      Example of Team page. Mostly created just to show you how navbar active
      menu changes. :)
    </h1>
    <p class="text-gray">
      Oh, and how router functions. Check out the page 'team.vue'.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Team',
  layout: 'dashboard',
  head: {
    title: 'Team'
  }
})
</script>

<router>
{
    name: 'Team page example'
}
</router>
