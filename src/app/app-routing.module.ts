import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotePageComponent} from './components/vote-page/vote-page.component';
import { ResultPageComponent} from './components/result-page/result-page.component';
const routes: Routes = [
{path:'',redirectTo:'/vote-page',pathMatch:'full'},
{path:'vote-page',component: VotePageComponent},
{path:'result-page',component: ResultPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  