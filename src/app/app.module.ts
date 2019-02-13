import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleService } from './single.service';
import { BlogService } from './blog.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigacijaService } from './navigacija.service';
import {RouterModule} from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { SingleComponent } from './single/single.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    SinglePageComponent,
    ContentComponent,
    BlogComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'singlePage',
        component: SinglePageComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
    ])
  ],
  providers: [NavigacijaService, FormBuilder, BlogService,SingleService],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
