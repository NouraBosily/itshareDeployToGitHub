import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(callBack) {
    return this.http.get(this.url).subscribe(response => {
      callBack(response);
    });
  }
  get() {
    return this.http.get(this.url);
  }

  create(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  update(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  delete(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
