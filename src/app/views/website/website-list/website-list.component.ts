import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
            console.log(this.websites);
          }
        );
      }
    );


  }
}
