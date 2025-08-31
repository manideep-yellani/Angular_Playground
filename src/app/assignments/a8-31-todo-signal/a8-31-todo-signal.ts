import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-a8-31-todo-signal',
  imports: [],
  templateUrl: './a8-31-todo-signal.html',
  styleUrl: './a8-31-todo-signal.css'
})
export class A831TodoSignal{

  todos = signal([
    { id: 1, text: 'Buy groceries', isCompleted: false },
    { id: 2, text: 'Walk the dog', isCompleted: false },
    { id: 3, text: 'Finish homework', isCompleted: false },
    { id: 4, text: 'Call mom', isCompleted: true }
  ]);

  
  completedToDos = computed(() => 
    this.todos().filter(todo => todo.isCompleted)
  );

  remainingToDos = computed(() => 
    this.todos().filter(todo => !todo.isCompleted)
  );

  
  toggleTodo(id: number) {
    this.todos.update(todos => 
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  }
}
