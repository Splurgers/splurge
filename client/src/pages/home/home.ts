import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsService } from '../../../codegen/controllers/Posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostsService]
})
export class HomePage {
  items : any;
  constructor(public navCtrl: NavController,
              public postsService: PostsService) {

  }

  public ngOnInit() {
    // 7. the returned observable is fully typed
    this.postsService
      .fetchPosts()
      // 8. returned data are fully typed
      .subscribe(data => {
        // 9. assignments type-checked
        this.items = data.length;
        // this.page = page;
      });
  }

}
