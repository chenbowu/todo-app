import { ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    const addTodo = (todo) => todos.value.push(todo);
    return {
        todos,
        addTodo
    }
}