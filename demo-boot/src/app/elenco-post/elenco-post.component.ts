import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/posts';
import { Commento } from '../models/commento';

@Component({
  selector: 'app-elenco-post',
  templateUrl: './elenco-post.component.html',
  styleUrls: ['./elenco-post.component.css']
})
export class ElencoPostComponent implements OnInit {
  elencoPost: Post[];
  elencoCommenti: Commento[];
  constructor(private servizioPost: PostsService) { }

  ngOnInit() {
    this.servizioPost.estraiPost().subscribe(post => {
      this.elencoPost = post;
      console.log(post); });
  }

  visualizzaPost(post: Post) {
    this.servizioPost.estraiCommenti(post.id).subscribe(commenti => {
      this.elencoCommenti = commenti;
      console.log(commenti); });
  }

}
