<script lang="ts">
import TodoListItem from './TodoListItem.vue'
export default {
  name: "TodoList",
  props: ['todos'],
  components: { TodoListItem }
}
</script>

<template>
    <div class="todo-list">
        <todo-list-item
          v-for="todo in todos"
          :key="todo.id"
          :todo-item="todo"
          @change-state="todo.completed = $event.target.checked"
        ></todo-list-item>
    </div>
</template>

<style scoped>
  .todo-list {
    display: grid;
    row-gap: 14px;
  }
</style>