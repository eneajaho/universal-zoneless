import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>Hello from Angular Universal!</div>

    <ul *ngIf="todos$ | async as todos">
      <li *ngFor="let item of todos | slice : 0 : 10">
        {{ item.title }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  #http = inject(HttpClient);
  #cdr = inject(ChangeDetectorRef);

  title = 'universal-standalone';

  todos$ = this.#http
    .get<any[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(tap(() => setTimeout(() => this.#cdr.detectChanges(), 0)));
}
