import { animate, style, transition, trigger } from '@angular/animations';

const uReveal = trigger('uReveal', [
  transition(':enter', [
    style({ transform: 'translateY(30%)', opacity: 0 }),
    animate('400ms ease', style({ transform: 'translateY(0%)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)', opacity: 1 }),
    animate('400ms ease', style({ transform: 'translateY(30%)', opacity: 0 })),
  ]),
]);
const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('400ms ease', style({ opacity: 0 })),
  ]),
]);

export { uReveal, fade };
