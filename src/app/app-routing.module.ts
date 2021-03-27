import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailComponent } from './countries/countries-detail/countries-detail.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch:'full' },
  { path: 'country/:country', component: CountriesDetailComponent },
  { path: 'list', component: CountriesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
