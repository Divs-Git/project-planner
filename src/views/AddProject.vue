<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" v-model="title" />
    <label for="details">Details</label>
    <textarea name="details" id="details" v-model="projectDetails"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: 'AddProject',
  data() {
    return {
      title: '',
      projectDetails: '',
    }
  },
  methods: {
    handleSubmit() {
      let projectData = {
        title: this.title,
        details: this.projectDetails,
        complete: false,
      }

      fetch('http://localhost:8080/projects', {
        method: 'POST',
        body: JSON.stringify(projectData),
      })
        .then(() => this.$router.push('/'))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
