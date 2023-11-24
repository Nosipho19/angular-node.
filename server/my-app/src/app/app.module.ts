import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponentComponent } from './user-component/user-component.component';
import { DisplayBoardComponentComponent } from './display-board-component/diplay-board-component.component';
import { HeaderComponentComponent } from './header/hearder-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    DisplayBoardComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
