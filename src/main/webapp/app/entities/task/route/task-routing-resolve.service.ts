import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITask } from '../task.model';
import { TaskService } from '../service/task.service';

const taskResolve = (route: ActivatedRouteSnapshot): Observable<null | ITask> => {
  const id = route.params['id'];
  if (id) {
    return inject(TaskService)
      .find(id)
      .pipe(
        mergeMap((task: HttpResponse<ITask>) => {
          if (task.body) {
            return of(task.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default taskResolve;
