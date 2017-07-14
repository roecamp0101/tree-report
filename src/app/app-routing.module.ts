import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionsComponent } from './routing/instructions/instructions.component';
import { HomeComponent } from './routing/home/home.component';
import { AuthorComponent } from './routing/author/author.component';
/*import { ServersComponent } from './routes/servers/servers.component';
import { ServerComponent } from './routes/servers/server/server.component';
import { ExtraserversComponent } from './routes/extraservers/extraservers.component';
import { ObservableComponent } from './observable/observable.component';*/


//alias routes links to the Routes angular structure
const routes: Routes = [
    
    {path: '', component: HomeComponent},
    {path: 'instructions', component: InstructionsComponent, data: {message: 'The instructions page'}},
    {path: 'author', component: AuthorComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], 
    providers: []
})
export class TreeHouseRoutingModule { }
