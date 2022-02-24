import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ServicesComponent } from './modules/services/services.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUSComponent } from './modules/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './modules/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUSComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
