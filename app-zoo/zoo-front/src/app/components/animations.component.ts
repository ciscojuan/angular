import {trigger,state,transition,style,animate} from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    transition(':enter', [
      style({
        opacity: '0'
      }),
      animate('500ms linear')
    ])
  ]);
