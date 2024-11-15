<template>
  <div class="project" :class="{ complete: this.project.complete }">
    <div class="actions">
      <h3 @click="toggleProjectDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons"> edit </span>
        <span class="material-icons" @click="deleteProject"> delete </span>
        <span
          class="material-icons"
          :class="{ tick: this.project.complete }"
          @click="completeProject"
        >
          done
        </span>
      </div>
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
  emits: ['delete', 'complete'],
  data() {
    return {
      showProjectDetails: false,
      url: `http://localhost:8080/projects/${this.project.id}`,
    }
  },
  methods: {
    toggleProjectDetails() {
      this.showProjectDetails = !this.showProjectDetails
    },
    deleteProject() {
      fetch(this.url, {
        method: 'DELETE',
      })
        .then(() => this.$emit('delete', this.project.id))
        .catch((error) => console.log(error))
    },
    completeProject() {
      fetch(this.url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit('complete', this.project.id))
        .catch((error) => console.log(error))
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

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  cursor: pointer;
  font-weight: bold;
}

.details {
  margin-top: 6px;
  margin-bottom: 4px;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.complete {
  border-left: 4px solid #00ce89;
}

.tick {
  color: #00ce89;
}
</style>
