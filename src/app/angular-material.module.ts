import { NgModule } from "@angular/core";

import {
    MatGridListModule, MatFormFieldModule, MatDatepickerModule, 
    MatButtonModule, MatNativeDateModule, MatInputModule, MatTableModule, 
    MatIconModule, MatProgressSpinnerModule
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
        MatProgressSpinnerModule
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
        MatProgressSpinnerModule
    ]
})

export class AngularMaterialModule {}