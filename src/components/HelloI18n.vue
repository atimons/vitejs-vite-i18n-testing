<template>
  <div>
    <h1>{{ t('hello') }}</h1>

    <button @click="count++">{{ t('count', { count }) }}</button>

    <p>
      <a href="https://vue-i18n.intlify.dev/" target="_blank">{{
        t('docs.vue-i18n')
      }}</a>
      |
      <a
        href="https://github.com/intlify/vite-plugin-vue-i18n#globe_with_meridians-intlifyvite-plugin-vue-i18n"
        target="_blank"
        >{{ t('docs.vite-plugin') }}</a
      >
    </p>

    <p>
      {{ t('recommended') }}:
      <a href="https://github.com/lokalise/i18n-ally/" target="_blank"
        >i18n ally (Visutal Studio Code extension)</a
      >
      +
      <a href="https://eslint-plugin-vue-i18n.intlify.dev/" target="_blank"
        >eslint-plugin-vue-i18n</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'HelloI18n',
  setup() {
    const count = ref(0);
    // use local scope
    const { t } = useI18n({
      // `locale` inherit from global scope
      inheritLocale: true,
    });

    return { count, t };
  },
});
</script>
