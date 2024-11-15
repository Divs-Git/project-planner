<template>
  <main>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </div>
    </div>
  </main>
</template>

<script>
import Project from '../components/Project.vue'
export default {
  name: 'HomeView',
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    fetch('http://localhost:8080/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err))
  },
}
</script>
