import { PlanService } from './plan.service';
import { Component, OnInit } from '@angular/core';
import { Step } from './Step';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  step: Step = new Step();
  selectedStep: Step;
  newStep: boolean;
  displayDialog: boolean;

  plan: any;
  blocks: any[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.plan = this.planService.getPlan();
    this.plan.steps = this.planService.sortSteps(this.plan.steps);
    this.blocks = this.planService.blocks.map(function(item) { return { label: item, value: item}; });
  }

  showDialogToAdd() {
    this.newStep = true;
    this.step = new Step();
    this.displayDialog = true;
}

  save(): void {
    let steps = [...this.plan.steps];
    if (this.newStep) {
        steps.push(this.step);
    } else {
        steps[this.findSelectedStepIndex()] = this.step;
    }

    this.plan.steps = this.planService.sortSteps(steps);
    this.step = null;
    this.displayDialog = false;
  }

  cancel(): void {
    this.displayDialog = false;
    this.selectedStep = null;
  }

  delete() {
    const index = this.findSelectedStepIndex();
    this.plan.steps = this.plan.steps.filter((val, i) => i !== index);
    this.step = null;
    this.displayDialog = false;
  }

  onRowSelect(event): void {
    this.newStep = false;
    this.step = this.cloneStep(event.data);
    this.displayDialog = true;
  }

  cloneStep(s: Step): Step {
    const step = new Step();

    for(let prop in s) {
          step[prop] = s[prop];
      }
      return step;
    }

    findSelectedStepIndex(): number {
      return this.plan.steps.indexOf(this.selectedStep);
  }

}
