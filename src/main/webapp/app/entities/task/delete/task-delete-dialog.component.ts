import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITask } from '../task.model';
import { TaskService } from '../service/task.service';

@Component({
  standalone: true,
  templateUrl: './task-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class TaskDeleteDialogComponent {
  task?: ITask;

  protected taskService = inject(TaskService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.taskService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
