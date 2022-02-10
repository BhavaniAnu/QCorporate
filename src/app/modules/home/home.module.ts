import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SliderComponent } from './slider/slider.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';


const routes: Routes = [{
    path: 'home',
    component: HomeComponent
}];

@NgModule({
    declarations: [
        HomeComponent,
        SliderComponent,
        ImgSliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule {}