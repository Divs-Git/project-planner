<template>
  <div class="project">
    <div class="actions" @click="toggleProjectDetails">
      <h3>{{ project.title }}</h3>
    </div>
    <div class="details" v-if="showProjectDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['project'],
  data() {
    return {
      showProjectDetails: false,
    }
  },
  methods: {
    toggleProjectDetails() {
      this.showProjectDetails = !this.showProjectDetails
    },
  },
}
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}

h3 {
  cursor: pointer;
  font-weight: bold;
}

.details {
  margin-top: 6px;
  margin-bottom: 4px;
}
</style>
