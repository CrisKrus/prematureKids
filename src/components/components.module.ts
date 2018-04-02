import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { NavbarTabsComponent } from './navbar-tabs/navbar-tabs';
@NgModule({
	declarations: [LoginComponent,
    NavbarTabsComponent],
	imports: [],
	exports: [LoginComponent,
    NavbarTabsComponent]
})
export class ComponentsModule {}
