import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  @Input() imgUrl : string;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}
