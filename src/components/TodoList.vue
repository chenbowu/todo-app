<script lang="ts">
    import TodoListItem from './TodoListItem.vue'
    export default {
    name: "TodoList",
    components: { TodoListItem }
}
</script>

<template>
    <div class="todo-list">
        <todo-list-item v-for="n in 4" :key="n"></todo-list-item>
    </div>
</template>

<style scoped>
  .todo-list {
    display: grid;
    row-gap: 14px;
  }
</style>