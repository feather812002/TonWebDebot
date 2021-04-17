import { Component } from '@angular/core';
import {TonClient,AppDebotBrowser,ParamsOfInit,DebotHandle,ParamsOfStart} from "@tonclient/core/src/";
import {libWeb} from "@tonclient/lib-web";
//import {ParamsOfInit} from './ParamsOfInit';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TonWebDebot';
  constructor() { 
    TonClient.useBinaryLibrary(libWeb);
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    const client = new TonClient({
      network: { 
          server_address: 'net.ton.dev' 
      } 
    });
    const browser:AppDebotBrowser={log:null,switch:null,switch_completed:null,show_action:null,input:null,get_signing_box:null,invoke_debot:null,send:null,approve:null};
    const paramsInit: ParamsOfInit = { address:"0:038081930f6b5211ba2c9e36cb28945954c35ccd913872a4b17b2671b83f2a88"};
    const paramsOfStart:ParamsOfStart={debot_handle:0};
    
    client.debot.init(paramsInit,browser);
    client.debot.start(paramsOfStart);

  }


}
