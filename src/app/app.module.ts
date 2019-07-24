import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileScreeningComponent } from './profile-screening/profile-screening.component';
import { ApiService } from './app.service';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { DirectiveSortDirective } from '../directive/directive-sort.directive';




@NgModule({
  declarations: [
    AppComponent,
    ProfileScreeningComponent,
    FilterPipePipe,
    DirectiveSortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
