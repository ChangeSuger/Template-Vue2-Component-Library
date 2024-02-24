<template>
  <el-button type="primary" @click="importData">Import Data</el-button>
</template>

<script>
export default {
  props: {
    updateData: {
      type: Function,
      required: true
    }
  },
  methods: {
    importData() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          const data = JSON.parse(e.target.result);
          this.updateData(data);
        };
        reader.readAsText(file);
      };
      input.click();
    }
  }
}
</script>