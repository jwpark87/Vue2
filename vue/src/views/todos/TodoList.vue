<template>
  <div>
    <v-alert type="success">Write your code</v-alert>
    <v-row>
      <v-col cols="12" md="12">
        <p>
          <strong>TODOS</strong>
        </p>
        <v-col cols="12" sm="8" md="6">
          <v-text-field
            label="Solo"
            v-model="text"
            placeholder="What needs to be done?"
            solo
            v-on:keyup.enter="addTodo"
          ></v-text-field>
          <div v-for="(todo, index) in viewList" :key="index">
            <v-chip class="ma-2" color="orange" label outlined>
              <v-checkbox v-model="todo.checked" class="mx-2"></v-checkbox>
              {{ todo.text }}
              <v-btn text icon color="orange" @click="removeTodo(index)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-chip>
          </div>
          <div v-if="todoList.length > 0">
            <span color="orange" >{{ activeItemsLength }} Items left</span>
            <v-btn text small @click="viewAll">All</v-btn>
            <v-btn text small @click="viewActive">Active</v-btn>
            <v-btn text small @click="viewCompleted">Completed</v-btn>
            <v-btn v-if="completedItemsLength > 0" text small @click="viewClear">Clear completed</v-btn>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Todo } from './common/types';

@Component
export default class TodoList extends Vue {
  todoList: Todo[] = [];
  viewList: Todo[] = [];

  text: string = '';
  checked: boolean = false;

  get activeItemsLength() {
    return this.todoList.filter(todo => todo.checked === false).length;
  }

  get completedItemsLength() {
    return this.todoList.filter(todo => todo.checked === true).length;
  }

  get activeItems() {
    return this.todoList.filter(todo => todo.checked === false);
  }

  get completedItems() {
    return this.todoList.filter(todo => todo.checked === true);
  }

  addTodo() {
    this.todoList.push({
      text: this.text,
      checked: this.checked,
    });
    this.viewList = this.todoList;
    this.text = '';
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }

  viewAll() {
    this.viewList = this.todoList;
  }

  viewActive() {
    this.viewList = this.activeItems;
  }

  viewCompleted() {
    this.viewList = this.completedItems;
  }

  viewClear() {
    this.todoList = this.activeItems;
    this.viewList = this.todoList;
  }
}
</script>

<style scoped></style>
