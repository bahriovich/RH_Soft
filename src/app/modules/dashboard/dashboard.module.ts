import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from 'src/app/shared/widgets/line/line.component';
import { PieComponent } from 'src/app/shared/widgets/pie/pie.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LineComponent,
    PieComponent,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
