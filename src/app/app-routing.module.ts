import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'emploi',component:OffresEmploiComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
  {path:"articles",component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
