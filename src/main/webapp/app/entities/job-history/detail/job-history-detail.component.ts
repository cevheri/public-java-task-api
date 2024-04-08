import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IJobHistory } from '../job-history.model';

@Component({
  standalone: true,
  selector: 'jhi-job-history-detail',
  templateUrl: './job-history-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class JobHistoryDetailComponent {
  @Input() jobHistory: IJobHistory | null = null;

  previousState(): void {
    window.history.back();
  }
}
