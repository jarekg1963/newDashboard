import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkidocuments',
  templateUrl: './linkidocuments.component.html',
  styleUrls: ['./linkidocuments.component.css']
})
export class LinkidocumentsComponent implements OnInit {
  link_id: string;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.link_id = this.actRoute.snapshot.params.id;
  }

}
