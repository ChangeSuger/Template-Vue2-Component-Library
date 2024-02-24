<template>
  <div class="my-component-content">
    <JsonImporter :updateData="handle_update_data" />

    <el-input
      type="textarea"
      :rows="10"
      v-model="jsonData"
      placeholder="Enter data here"
    />
  </div>
</template>

<script>
import JsonImporter from './components/JsonImporter.vue';

export default {
  name: 'my-component',
  props: {
  },
  components: {
    JsonImporter,
  },
  data() {
    return {
      data: undefined,
    }
  },
  computed: {
    jsonData() {
      return JSON.stringify(this.data, null, 2);
    }
  },
  mounted() {
  },
  methods: {
    handle_update_data(data) {
      this.data = data;
    }
  }
}
</script>

<style scoped>
.my-component-content {
  max-width: 500px;
  padding: 0.5rem;
}
</style>