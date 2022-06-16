import { computed, ref } from "vue"

export default function useFilteredTod(todos) {
    const filter = ref('all') 
    const filteredTodo = computed(() => {
      switch (filter.value) {
        case 'done':
          return todos.value.filter(todo => todo.completed)
        case 'todo':
          return todos.value.filter(todo => !todo.completed)
        default:
          return todos.value
      }
    })
    return {
        filter,
        filteredTodo
    }
}