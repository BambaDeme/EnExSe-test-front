import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/interface/agent.interfacce';
import { ApiResponse } from 'src/app/interface/apiResponse.interface';

@Component({
  selector: 'app-agents-card',
  templateUrl: './agents-card.component.html',
  styleUrls: ['./agents-card.component.scss']
})
export class AgentsCardComponent implements OnInit {

  @Input() title!: string;
  @Input() key!: string;
  // @Input() agents!: Agent[];
  @Input() response$!: Observable<ApiResponse>
  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string{
    if(this.key==='total'){
      return 'rgb(0, 107, 180),';
    }else if(this.key === 'active'){
      return 'rgb(0, 120, 113)';
    }else if(this.key === 'disconnected'){
      return 'rgb(189, 39, 30)';
    }else if(this.key === 'pending'){
      return 'rgb(254, 197, 20)';
    }

    return 'rgb(100, 106, 119)';
  }

  getAgentLength(agents: Agent[]) : number{
    if(this.key === 'total'){
      return agents.filter(agent => agent.name !== 'cyr-customer-ossec.local').length
    }else if(this.key === 'active'){
      return agents.filter(agent => agent.status === 'active' && agent.name !== 'cyr-customer-ossec.local').length
    }else if(this.key === 'disconnected'){
      return agents.filter(agent => agent.status === 'disconnected' && agent.name !== 'cyr-customer-ossec.local').length
    }else if(this.key === 'pending'){
      return agents.filter(agent => agent.status === 'pending' && agent.name !== 'cyr-customer-ossec.local').length
    }else{
      return agents.filter(agent => agent.status === 'never_connected' && agent.name !== 'cyr-customer-ossec.local').length
    }
  }

}
