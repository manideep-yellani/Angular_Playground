import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Comment } from '../../models/comment';
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-comment-list',
  imports: [NgxPaginationModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css'
})
export class CommentList {
  comments_api_url = 'https://jsonplaceholder.typicode.com/comments';
  commentsArr: Comment[] = [];
p: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    this.httpClient.get<Comment[]>(this.comments_api_url)
      .subscribe((response: Comment[]) => {
        console.log(response);
        this.commentsArr = response;
      });
  }
}