<script lang="ts">
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import useTodos from '@/composables/useTodos.js'
import useFilteredTodo from '@/composables/useFilteredTodo.js'

export default {
  name: 'App',
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    useTodos();
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodo } = useFilteredTodo(todos);
    return {
      todos,
      addTodo,
      filter,
      filteredTodo,
    }
  },
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Vue Todo App</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo"/>
      <todo-filter :selected="filter" @change-filter="filter = $event"/>
      <todo-list :todos="filteredTodo"/>
    </div>
  </main>
</template>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
  }

  main {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background: rgb(203, 210, 240);
  }

  .container {
    width: 60%;
    max-width: 400px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    padding: 48px 28px;
    background: rgb(245, 246, 252);
    transition: height 2s;
  }

  h1 {
    margin: 24px 0;
    font-size: 28px;
    text-align: center;
    color: #414873;
  }
</style>
