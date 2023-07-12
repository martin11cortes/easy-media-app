import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  standalone: true,
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    PostCardComponent,
  ],
})
export class PostsListComponent implements OnInit {
  mine = false;
  searchForm: FormGroup;
  posts = [
    {
      title: 'Title 1',
      message: 'Cillum consectetur qui fugiat tempor id reprehenderit laboris id commodo non. Ad amet cupidatat nulla est qui et esse. Non nulla elit ad quis est enim. Non id nostrud exercitation fugiat ullamco dolore reprehenderit anim nisi. Occaecat voluptate est do ipsum voluptate laboris magna exercitation elit culpa Lorem ad fugiat amet. Qui magna minim tempor reprehenderit. Fugiat est velit occaecat quis consectetur consequat ea.',
      date: new Date().toLocaleString(),
      username: 'username 1'
    },
    {
      title: 'Title 2',
      message: 'Cillum consectetur qui fugiat tempor id reprehenderit laboris id commodo non. Ad amet cupidatat nulla est qui et esse. Non nulla elit ad quis est enim. Non id nostrud exercitation fugiat ullamco dolore reprehenderit anim nisi. Occaecat voluptate est do ipsum voluptate laboris magna exercitation elit culpa Lorem ad fugiat amet. Qui magna minim tempor reprehenderit. Fugiat est velit occaecat quis consectetur consequat ea.',
      date: new Date().toLocaleString(),
      username: 'username 2'
    },
    {
      title: 'Title 3',
      message: 'Cillum consectetur qui fugiat tempor id reprehenderit laboris id commodo non. Ad amet cupidatat nulla est qui et esse. Non nulla elit ad quis est enim. Non id nostrud exercitation fugiat ullamco dolore reprehenderit anim nisi. Occaecat voluptate est do ipsum voluptate laboris magna exercitation elit culpa Lorem ad fugiat amet. Qui magna minim tempor reprehenderit. Fugiat est velit occaecat quis consectetur consequat ea.',
      date: new Date().toLocaleString(),
      username: 'username 3'
    },
    {
      title: 'Title 4',
      message: 'Cillum consectetur qui fugiat tempor id reprehenderit laboris id commodo non. Ad amet cupidatat nulla est qui et esse. Non nulla elit ad quis est enim. Non id nostrud exercitation fugiat ullamco dolore reprehenderit anim nisi. Occaecat voluptate est do ipsum voluptate laboris magna exercitation elit culpa Lorem ad fugiat amet. Qui magna minim tempor reprehenderit. Fugiat est velit occaecat quis consectetur consequat ea.',
      date: new Date().toLocaleString(),
      username: 'username 4'
    },
  ]

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.searchForm = this.fb.group({
      date: ['', Validators.required],
      keyword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    const data = this.activatedRoute.data;

    data.subscribe((data) => {
      if (data['mine']) {
        this.mine = true;
      }
    });
  }
}
