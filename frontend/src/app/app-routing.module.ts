import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: "full"
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'add',
    component: ItemEditComponent
  },
  {
    path: 'items/:id',
    component: ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
