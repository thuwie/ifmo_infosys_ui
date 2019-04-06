import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../../_models/Task';
import { UserService } from '../../../_services/user.service';
import {
  MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef, MatSort, MatTableDataSource,
  PageEvent
} from '@angular/material';
import { TaskService } from '../../../_services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  private dataSourceTasks = new MatTableDataSource<Task>();
  private isLoading: boolean;
  private tasksCount: number;
  private displayedColumns = [
    'Id',
    'Name',
    'Owner',
    'RequestedDays',
    'EmlpoyeeId',
    'Actions'
  ];

  constructor(private taskService: TaskService,
              public dialog: MatDialog) {
    this.isLoading = true;
    this.tasksCount = 0;
  }

  ngOnInit() {
    this.getAllTasks();
  }

  ngAfterViewInit() {
    this.dataSourceTasks.sort = this.sort;
  }

  async getAllTasks() {
    try {
      const tasksData = await this.taskService.getAllTasks();
      console.log(tasksData);
      this.tasksCount = tasksData.tasksCount;
      this.dataSourceTasks.data = tasksData.tasks as Task[];
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

  async approveTask(row: Task) {
    try {
      await this.taskService.approveTask(row.taskId);
    } catch (error) {
      console.error(error.message);
    }
  }

}
