import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskInterface } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasksVar: TaskInterface[] = [];
  constructor(private taskService_local: TaskService) {}

  //to get all the list of tasks from services that connects to the db
  ngOnInit(): void {
    this.taskService_local
      .getTasks()
      .subscribe((tasks) => (this.tasksVar = tasks));
  }

  deleteTaskComp(task: TaskInterface) {
    this.taskService_local
      .deleteTaskService(task)
      .subscribe(
        () => (this.tasksVar = this.tasksVar.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: TaskInterface) {
    task.reminder = !task.reminder;
    this.taskService_local.updateTaskReminder(task);
  }

  addTask(task: TaskInterface) {
    this.taskService_local
      .addTask(task)
      .subscribe((task) => this.tasksVar.push(task));
  }
}
