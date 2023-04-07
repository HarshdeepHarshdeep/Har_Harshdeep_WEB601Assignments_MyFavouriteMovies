import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentTypePipe } from './filter-content-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessageComponent } from './message/message.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterContentTypePipe,
    HoverAffectDirective,
    MessageComponent,
    ModifyContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
      dataEncapsulation: false,
      delay: 1000
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
