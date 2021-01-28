<template>
  <div>
    <Navbar />
    <Header :title="$route.name" />
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <Nuxt />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Header, Navbar } from '@/components'

export default Vue.extend({
  name: 'Dashboard',
  components: { Header, Navbar },
  middleware: 'authenticated'

})
</script>
