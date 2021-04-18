<template>
  <Header
    @toggle-add-task="toggleAddTask"
    title="سامانه ثبت انتقادات، پیشنهادات و شکایات"
  />
  <div class="container">
    <div class="dpcontainer">
      <date-picker v-model="date"></date-picker>
      <date-picker v-model="date"></date-picker>
      <Multiselect class="dropdown" v-model="value" :options="options" />
      <Button @btn-click="onSearch" text="جستجو" color="green" icon-class="fa fa-search"/>
    </div>
    <Suggests :tasks="sgts" />
  </div>
</template>

<script>
import Header from "./views/register/Header";
import Suggests from "./views/register/Suggests";
import AddSuggest from "./views/register/AddSuggest";
import DatePicker from "vue3-persian-datepicker";
import "vue3-persian-datepicker/dist/datepicker.min.css";
import { reactive } from "@vue/reactivity";
import Multiselect from "@vueform/multiselect";
import Button from "./components/Button";


export default {
  name: "AppView",
  setup() {
    const state = reactive({
      date: "",
    });
    return {
      DatePicker,
      state,
    };
  },
  components: {
    Header,
    Suggests,
    AddSuggest,
    Multiselect,
    Button,
  },
  data() {
    return {
      sgts: [],
      date: "",
      value: null,
      options: ["انتقاد", "پیشنهاد", "شکایت"],
    };
  },
  methods: {
    onSearch() {
        
    },
    async addSuggest(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async fetchTasks() {
      const res = await fetch(`api/tasks`);
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "B Titr", sans-serif;
  background-image: url("./assets/Suggestion.png");
  background-repeat: no-repeat;
  direction: rtl;
}

.dropdown {
  width: 100%;
}

.dpcontainer {
  display: flex;
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
