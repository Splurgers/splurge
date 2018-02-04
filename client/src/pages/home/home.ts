import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import 'rxjs/Rx';

import { ADD_POSTS } from '../../actions/actions';
import { PostsService } from '../../../codegen/controllers/Posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostsService]
})
export class HomePage {
  items : any;
  public posts$;
  constructor(public navCtrl: NavController,
              public postsService: PostsService,
              private store: Store<any>) {

    this.posts$ = this.store.select('posts')
  }

  public ngOnInit() {
    setInterval(() => this.fetchPosts(), 1000);
  }

  public fetchPosts() {
    this.postsService
      .fetchPosts()
      .subscribe(data => this.store.dispatch({ type: ADD_POSTS, payload: data }));
  }

}
