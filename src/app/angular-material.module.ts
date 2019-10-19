import { NgModule } from "@angular/core";

import {
    MatGridListModule, MatFormFieldModule, MatDatepickerModule, 
    MatButtonModule, MatNativeDateModule, MatInputModule, MatTableModule, 
    MatIconModule, MatProgressSpinnerModule, MatDialogModule
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
        MatDialogModule
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
        MatDialogModule
    ]
})

export class AngularMaterialModule {}