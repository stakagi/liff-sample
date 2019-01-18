<template>
  <v-app>
    <v-content>
      <LiffComponent />
    </v-content>
  </v-app>
</template>

<script>
import LiffComponent from './components/LiffComponent'

export default {
  name: 'App',
  components: {
    LiffComponent
  },
  data () {
    return {
    }
  }
}
</script>
