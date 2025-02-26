import { Component, Input } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, RouterModule],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
    @Input() breadcrumbList!: Breadcrumb[];
}
