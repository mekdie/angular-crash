import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() taskInput: TaskInterface;
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
