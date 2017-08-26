import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  plan = {
    title : 'R7',
    date : '2017/10/02',
  steps : [
    {
      block: 'PRE',
      sort: '1',
      state: 'OPEN',
      title: 'Step 1',
      assignee: {
        group: 'DEV',
        name: 'Developer 1'
      }
    },
    {
      block: 'TUE',
      sort: '2',
      state: 'OPEN',
      title: 'Step 2',
      assignee: {
        group: 'OPER',
        name: 'Operator 1'
      }
    },
    {
      block: 'FRI',
      sort: '3',
      state: 'OPEN',
      title: 'Step 3',
      assignee: {
        group: 'IAS',
        name: 'IAS 1'
      }
    }
  ]
}

  constructor() { }

  ngOnInit() {
  }

}
