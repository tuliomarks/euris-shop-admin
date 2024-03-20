import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    MatIconModule
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
