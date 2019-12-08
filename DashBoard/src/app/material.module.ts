
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
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import {MatIconModule} from '@angular/material';



@NgModule({
   imports: [
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatGridListModule,
      MatCardModule,
      MatDialogModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatIconModule
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
      MatSelectModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatIconModule
   ],
   providers: [
    // { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'} }
  ],

})

export class MaterialModule { }
