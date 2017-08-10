import {Component} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('products => product-detail', [
        query(':leave', style({
          position: 'absolute',
          left: 0,
          right: 0,
          transform: 'translate3d(0%,0,0)'
        }), {optional: true}),
        query(':enter', style({
          position: 'absolute',
          left: 0,
          right: 0,
          transform: 'translate3d(100%,0,0)'
        }), {optional: true}),

        group([
          query(':leave', group([
            animate('1000ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(-100%,0,0)'})), // y: '-100%'
          ]), {optional: true}),
          query(':enter', group([
            animate('1000ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(0%,0,0)'})),
          ]), {optional: true})
        ])
      ]),
      transition('product-detail => products', [
        query(':leave', style({
          position: 'absolute',
          left: 0,
          right: 0,
          transform: 'translate3d(0%,0,0)'
        }), {optional: true}),
        query(':enter', style({
          position: 'absolute',
          left: 0,
          right: 0,
          transform: 'translate3d(-100%,0,0)'
        }), {optional: true}),
        group([
          query(':leave', group([
            animate('1000ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(100%,0,0)'})), // y: '-100%'
          ]), {optional: true}),
          query(':enter', group([
            animate('1000ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(0%,0,0)'})),
          ]), {optional: true})
        ])
      ]),
    ])
  ]
})
export class AppComponent {

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
