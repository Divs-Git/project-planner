<template>
  <main>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        {{ project.title }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
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
