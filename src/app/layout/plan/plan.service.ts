import { Step } from './Step';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {
  blocks = ['PRE', 'TUE', 'FRI', 'SAT'];

  constructor() { }

  sortSteps(steps: Step[]): Step[] {
    return steps.sort((s1, s2) => {
      const s1Block = this.blocks.indexOf(s1.block);
      const s2Block = this.blocks.indexOf(s2.block);
      if (s1Block === s2Block) {
        return s1.order - s2.order;
      } else {
        return s1Block - s2Block;
      }
    });
  }

  getPlan(): any {
    return {
      title : 'R7',
      date : '2017/10/02',
    steps : [
      {
        block: 'PRE',
        order: 1,
        state: 'OPEN',
        title: 'Step 1',
        assignee: {
          group: 'DEV',
          name: 'Developer 1'
        },
        duration: '0:10'
      },
      {
        block: 'TUE',
        order: 1,
        state: 'OPEN',
        title: 'Step 2',
        assignee: {
          group: 'OPER',
          name: 'Operator 1'
        }
      },
      {
        block: 'FRI',
        order: 1,
        state: 'OPEN',
        title: 'Step 3',
        assignee: {
          group: 'IAS',
          name: 'IAS 1'
        }
      }
    ]
  }

}
}
