<template>
  <p>{{ $t("hello") }}</p>
</template>

<script>
export default {
  name: "HelloI18n",
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!",
    "message": "Hello world"
  },
  "fr": {
    "hello": "Bonjour monde",
    "message": "Bonjour monde"
  }
}
</i18n>
