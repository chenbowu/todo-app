<script lang="ts">
  export default {
    name: 'TodoFilter',
    props: ['selected'],
    setup() {
      const filters = [
        { label: '全部', value: 'all' },
        { label: '已完成', value: 'done' },
        { label: '未完成', value: 'todo' },
      ]

      return {
        filters
      }
    }
  }
</script>

<template>
      <div class="filters">
        <span
          v-for="filter in filters"
          :key="filter.value"
          class="filter"
          @click="$emit('change-filter', filter.value)"
          :class="{ active: filter.value === selected }"
        >{{ filter.label }}
        </span>
      </div>
</template>

<style scoped>
.filters {
    display: flex;
    margin: 24px 2px;
    color: #c0c2ce;
    font-size: 14px;
  }

  .filters .filter {
    cursor: pointer;
    margin-right: 14px;
    transition: 0.8s;
  }

  .filters .filter.active {
    color: #6b729c;
    transform: scale(1.2);
  }
</style>