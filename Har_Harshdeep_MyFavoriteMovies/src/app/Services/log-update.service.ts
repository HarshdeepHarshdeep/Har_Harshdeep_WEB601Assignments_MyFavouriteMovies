import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates:SwUpdate) { }

  public init(){
    this.updates.versionUpdates.subscribe(event=>{
      switch(event.type){
        case: 'VERSION_DETECTED' :
        console.log('Download new app version');
        break;

        case 'VERSION_INSTALLATION_FAILED':
          console.log('New Version updated');
          break;
      }
    })
  }
}
