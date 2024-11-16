<template>
  <div class="filter-nav">
    <button @click="updateProject('all')" :class="{ active: current === 'all' }">View All</button>
    <button @click="updateProject('completed')" :class="{ active: current === 'completed' }">
      Completed
    </button>
    <button @click="updateProject('inProgress')" :class="{ active: current === 'inProgress' }">
      In Progress
    </button>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: ['current'],
  emits: ['filterProject'],
  methods: {
    updateProject(filterBy) {
      this.$emit('filterProject', filterBy)
    },
  },
}
</script>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.filter-nav button.active {
  color: #555;
}
</style>
