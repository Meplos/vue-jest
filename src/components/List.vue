<template>
  <list-group></list-group>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
