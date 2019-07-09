import {animate, group, query, style, transition, trigger,} from '@angular/animations';


export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'})),
      ], {optional: true})
    ]),
  ]);


export const slider =

  trigger('routeAnimations', [
    transition('* => isLeft', SlideTo('work-pieces')),
    transition('* => isRight', SlideTo('resume')),
    transition('isRight => *', SlideTo('work-pieces')),
    transition('isLeft=> *', SlideTo('resume')),
  ]);


export const FadeBodyIn =
  trigger('routeAnimations', [
    transition('*<=>*', [
      query(':enter', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,

        }),
      ]),
      query(':enter', [
        animate('600ms ease', style({opacity: 1, transform: 'scale(1)'})),
      ]),
    ])
  ]);

// TODO understand what the steps are to kick off the animations for home body text
function FadeIn(direction) {
  const optional = {optional: true};

  return [
    query('enter', [
      style({
        position: 'absolute',
        width: '100%'
      })
    ]),
  ];
}

function SlideTo(direction) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0%'}))
      ])
    ])
  ];
}
