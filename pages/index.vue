<template>
  <div class="flex justify-center items-center flex-col space-y-6">
    <h1 class="font-medium text-xl text-center">
      Welcome to the dashboard page. <br>
      Hope you're liking nuxt-firebase-typescript-boilerplate so far!
    </h1>
    <p class="font-light text-center">
      This boilerplate comes pre-set for basic app development. You've got
      models set, and API with UserRepository pre-set, so you can further
      continue hackin' away! <br>
      Just as example, here's a button that'll commit you user to the database
      some day.
    </p>
    <button
      class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      @click="testCommit()"
    >
      Test commit of active user
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { User } from '@/models'

export default Vue.extend({
  name: 'Dashboard',
  layout: 'dashboard',
  head: {
    title: 'Dashboard'
  },
  computed: {
    ...mapState({
      user: (state: any) => new User().instantiate(state.auth.authUser)
    })
  },
  methods: {
    async testCommit () {
      const message = await this.user.commit()
      this.$toast.message(message)
    }
  }
})
</script>

<router>
  {
    name: 'Dashboard'
  }
</router>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
