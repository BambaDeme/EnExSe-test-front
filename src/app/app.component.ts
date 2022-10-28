import { Component, OnInit } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { Agent } from './interface/agent.interfacce';
import { ApiResponse } from './interface/apiResponse.interface';
import { AgentsService } from './services/agents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'EnExSe-test-front';
  public AgentStatus = AgentStatus;

  // agents!: Agent[];
  response$! : Observable<ApiResponse>

  constructor(private agentService: AgentsService){

  }
  ngOnInit(){
    this.response$ = this.agentService.getAgents().pipe(
      take(1)
    )
    
  }

}

export enum AgentStatus {
  active = "Active agents",
  disconnected = "Disconnected agents",
  pending = "Pending agents",
  never_connected = "Never connected agents"
}