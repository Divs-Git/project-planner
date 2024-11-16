<template>
  <main>
    <Filter :current="current" @filter-project="current = $event" />
    <div v-if="filteredProjects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <Project :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </main>
</template>

<script>
import Project from '../components/Project.vue'
import Filter from '@/components/Filter.vue'
export default {
  name: 'HomeView',
  components: {
    Project,
    Filter,
  },
  data() {
    return {
      projects: [],
      current: 'all',
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'all') {
        return this.projects
      } else if (this.current === 'completed') {
        return this.projects.filter((project) => project.complete === true)
      } else if (this.current === 'inProgress') {
        return this.projects.filter((project) => project.complete === false)
      }
    },
  },
  mounted() {
    fetch('http://localhost:8080/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    handleComplete(id) {
      let item = this.projects.find((project) => project.id === id)
      item.complete = !item.complete
    },
  },
}
</script>
