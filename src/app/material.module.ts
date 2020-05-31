import { NgModule } from "@angular/core";
import { 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule, 
        MatCardModule, 
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule, 
        MatCardModule, 
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatDialogModule
    ]
})

export class MaterialModule{}