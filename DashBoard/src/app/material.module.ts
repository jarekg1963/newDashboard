import { NgModule } from '@angular/core';
import {
   MatDatepickerModule,
   MatNativeDateModule,
   MatFormFieldModule,
   MatInputModule,
} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
   imports: [
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule,
      MatCardModule,
      MatDialogModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatSelectModule
   ],
   exports: [
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatGridListModule,
      MatCardModule,
      MatDialogModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatSelectModule
   ]
})

export class MaterialModule { }
