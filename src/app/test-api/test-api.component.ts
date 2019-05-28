import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpClient } from '@angular/common/http';
import { PostCallBack } from '../services/PostCallBack';

@Component({
  selector: 'testapi',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit , OnDestroy {
      constructor(private service: PostService, callback: PostCallBack) {
          this.service.getPosts(callback.getCallBack);
          this.posts = callback.posts;
          this.posts = JSON.parse( localStorage.getItem('DBPosts'));


      }
      url = 'https://jsonplaceholder.typicode.com/posts';
      posts: any;
      title = 'itshareShop';
  ngOnDestroy(): void {
    localStorage.removeItem('DBPosts');
      }
      ngOnInit(): void {

      }
      // obs=Observable.interval(1000).map((d) => Date.now()).subscribe(a => {
        // console.log(a);

      // })

      createPost(input: HTMLInputElement) {
          const post = {title : input.value , id: ''};
          this.service.create(post).subscribe(
            response => {this.posts.splice(0, 0, post); }
          );
      }

      updatePost(post, updatedValue) {
        const updatedPost = {title : updatedValue , id: post.id};
        this.service.update(updatedPost).subscribe(response => {
            const index = this.posts.indexOf(post);
            this.posts[index] = updatedPost;
          });
      }

      deletePost(post) {
        const index = this.posts.indexOf(post);
        this.service.delete(post).subscribe(response => {
            this.posts.splice(index, 1);
          });
      }


}
