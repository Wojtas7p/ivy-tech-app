import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataMgmtComponent } from './data-mgmt/data-mgmt.component';
import { FormPageComponent} from './form-page/form-page.component';
import { AnimateComponent } from './animate/animate.component';
 
const routes: Routes = [
  { path: '', component: DataMgmtComponent },
  { path: 'form-page', component: FormPageComponent },
  { path: 'info', component: AnimateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
