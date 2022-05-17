<script lang="ts">
    export default {
        name: 'TodoListItem'
    }
</script>

<template>
      <div class="todo-list">
        <div class="todo-item">
          <label>
            <input type="checkbox">
            Todo 1
            <span class="check-button"></span>
          </label>
        </div>
      </div>
</template>

<style scoped>
  .todo-item {
    background: white;
    padding: 16px;
    border-radius: 8px;
    color: #626262;
  }

  .todo-item label {
    position: relative;
    display: flex;
    align-items: center;;
    user-select: none;
  }

  .todo-item label span.check-button {
    position: absolute;
    top: 0;
  }

  .todo-item label span.check-button::before, 
  .todo-item label span.check-button::after  {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  .todo-item label span.check-button::before {
    border: 1px solid #b382f9;
  }

  .todo-item label span.check-button::after {
    background: #b382f9;
    transition: 0.4s;
    transform: translate(1px, 1px) scale(0.8);
    opacity: 0;
  }

  .todo-item input {
    margin-right: 16px;
    /* 隐藏默认 input 框*/
    opacity: 0;
  }

  .todo-item input:checked + span.check-button::after {
    opacity: 1;
  }
</style>