import { NgModule, Type } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { BookTableComponent } from './book-table/book-table.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookTableComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
  ],
  providers: [
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}