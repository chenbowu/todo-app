<script setup lang="ts">
</script>

<template>
  <main>
    <div class="container">
      <h1>Vue Todo App</h1>
      <div class="input-add">
        <input type="text">
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          <label>
            <input type="checkbox">
            Todo 1
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox">
            Todo 2
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox">
            Todo 3
            <span class="check-button"></span>
          </label>
        </div>
      </div>
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
  }

  h1 {
    margin: 24px 0;
    font-size: 28px;
    text-align: center;
    color: #414873;
  }

  .input-add {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-add input {
    padding: 16px 52px 16px 18px;
    border-radius: 48px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
    width: 100%;
    font-size: 16px;
    color: #626262;
  }

  .input-add button {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(#c0a5f3, #7f95f7);
    border: none;
    outline: none;
    color: white;
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  .input-add .plus {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
    background-size: 50% 2px, 2px 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .filters {
    display: flex;
    margin: 24px 2px;
    color: #c0c2ce;
    font-size: 14px;
  }

  .filters .filter {
    margin-right: 14px;
    transition: 0.8s;
  }

  .filters .filter.active {
    color: #6b729c;
    transform: scale(1.2);
  }

  .todo-list {
    display: grid;
    row-gap: 14px;
  }

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
