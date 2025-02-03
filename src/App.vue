<template>
  <div id="app" :data-theme="currentTheme">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      // 기본 테마 설정, DaisyUI의 테마 목록 중 하나 사용 ('cupcake', 'light', 'dark', 등)
      currentTheme: 'cupcake'
    }
  },
  methods: {
    // 예시: NavBar에서 테마 변경 이벤트를 받아서 테마를 동적으로 변경할 때 사용
    changeTheme(newTheme) {
      this.currentTheme = newTheme
    }
  }
}
</script>
