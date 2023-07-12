import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  imports: [CommonModule, MatCardModule, MatDividerModule],
})
export class PostCardComponent implements OnInit {
  @Input() title = 'Default Title';
  @Input() message = 'Default Message';
  @Input() date = new Date().toLocaleDateString();
  @Input() user = 'Camilo Cifuentes';
  constructor() {}

  ngOnInit(): void {}
}
