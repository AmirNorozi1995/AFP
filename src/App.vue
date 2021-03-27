<template>
  <Header @toggle-add-task="toggleAddTask" title="سامانه ثبت انتقادات، پیشنهادات و شکایات"/>
  <div class="container">
    <div>
      <AddSuggest @add-Sgt="addSuggest"/>
    </div>
    <Suggests :tasks="sgts"/>
  </div>
</template>

<script>
  import Header from "./views/register/Header";
  import Suggests from "./views/register/Suggests";
  import AddSuggest from "./views/register/AddSuggest";

  export default {
    name: 'App',
    components: {
      Header,
      Suggests,
      AddSuggest
    },
    data() {
      return {
        sgts: []
      }
    },
    methods: {
      async addSuggest(task) {
        const res = await fetch('api/tasks', {
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(task)
        })

        const data = await res.json()
        this.tasks = [...this.tasks, data]
      },
      async fetchTasks() {
        const res = await fetch(`api/tasks`)
        const data = await res.json()
        return data
      },
      async fetchTask(id) {
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
      }
    },
    async created() {
      this.tasks = await this.fetchTasks();
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'B Titr', sans-serif;
    background-image: url("./assets/Suggestion.png");
    background-repeat: no-repeat;
    direction: rtl;
  }

  .container {
    max-width: 1000px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }

  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }

  .btn:focus {
    outline: none;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-block {
    display: block;
    width: 100%;
  }
</style>
