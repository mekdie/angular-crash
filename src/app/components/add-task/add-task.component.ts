import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { TaskInterface } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();

  textBind: string;
  dayBind: string;
  reminderBind: boolean = false; //false as default value
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.textBind) {
      alert('Please add a task!');
      return;
    }

    //this is what will be submitted to the server (fake json db)
    const newTask = {
      text: this.textBind,
      day: this.dayBind,
      reminder: this.reminderBind,
    };

    this.onAddTask.emit(newTask);

    // @todo - emit event
  }
}
