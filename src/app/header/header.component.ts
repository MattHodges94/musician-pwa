import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd){
        this.headerTitle = event.urlAfterRedirects.replace('-', ' ')
                                                  .replace(/[^a-zA-Z ]/g, "")
                                                  .replace(/(^| )(\w)/g, s => s.toUpperCase());
      }
    });
  }

}
 