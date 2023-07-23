<template>
  <v-layout> 
    <v-navigation-drawer permanent>
      <v-list
        density="compact"
        nav
      >
        <!-- i18n 語系切換 -->
        <v-list-item class="d-flex justify-end mb-2">
          <v-btn
            variant="text"
            icon="mdi-translate"
            :color="isLanguageChinese ? 'primary' : 'primary-light'"
            @click="handleLanguage('zh-TW')"
          />
          <v-btn
            variant="text"
            icon="mdi-web"
            :color="isLanguageEnglish ? 'primary' : 'primary-light'"
            @click="handleLanguage('en-US')"
          />
        </v-list-item>
        <!-- navbar item -->
        <!-- cora todo: 重複點擊會取消問題＆重整點擊效果消失 -->
        <v-list-item
          v-for="item in navList"
          :key="item.title"
          :prepend-icon="item.icon" 
          :title="$t(`page.${item.title}.title`)" 
          :value="item.title"
          @click="$router.push(item.route)"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
      navList: [
        { title: 'home', route:'/', icon: 'mdi-home-circle' },
        { title: 'button', route:'/button', icon: 'mdi-square-rounded-badge-outline' },
        { title: 'popup', route:'/popup', icon: 'mdi-message-reply-text-outline' },
        { title: 'article', route:'/article', icon: 'mdi-note' },
        { title: 'table', route:'/table', icon: 'mdi-table' },
        { title: 'form', route:'/form', icon: 'mdi-format-list-bulleted-type' }
      ]
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  computed: {
    isLanguageChinese() {
      return this.locale === 'zh-TW';
    },
    isLanguageEnglish() {
      return this.locale === 'en-US';
    }
  },
  methods: {
    handleLanguage(newLanguage) {
      this.$i18n.locale = newLanguage;
      this.locale = this.$i18n.locale;
      localStorage.setItem("locale", newLanguage);
    }
  }
}
</script>

<style>
</style>