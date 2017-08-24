import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  plan = {
      title: 'R7',
      date: '2017-10-6',
     blocks : [
      {
          tag: 'PRE',
          title: 'Preparation steps',
          steps: [
                {
                  state: 'OPEN',
                  title: 'blabla',
                  assignee: {
                    group: 'DEV',
                    name: 'Robin E'
                  }
                }
          ]
      },
      {
          tag: 'TUE',
          title: 'Tuesday'
      },
      {
          tag: 'FRI',
          title: 'Friday'
      },
      {
          tag: 'SAT',
          title: 'Saturday'
      }
  ]
}


  constructor() { }

  ngOnInit() {
  }

}
