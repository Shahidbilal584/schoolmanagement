import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  step = 0;
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
currentlyOpenPanel: MatExpansionPanel | undefined;
togglePanel(_t5: number) {
throw new Error('Method not implemented.');
}
  panelOpenState = false;
}
