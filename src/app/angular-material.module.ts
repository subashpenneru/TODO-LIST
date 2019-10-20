import { NgModule } from "@angular/core";

import {
    MatGridListModule, MatFormFieldModule, MatDatepickerModule, 
    MatButtonModule, MatNativeDateModule, MatInputModule, MatTableModule, 
    MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatSortModule
} from '@angular/material';

@NgModule({
    imports: [
        MatGridListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSortModule
        
    ],
    exports: [
        MatGridListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSortModule
    ]
})

export class AngularMaterialModule {}