import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './components/imc/imc.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EditAddProductModalComponent } from './../app/components/edit-add-product-modal/edit-add-product-modal.component';
import { ProductsComponent } from './../app/components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ImcComponent,
    HomeComponent,
    ProductsComponent,
    EditAddProductModalComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
