import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Tag } from '../shared/models/tag';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
   @Input()
  foodPagetags?:string[];
  @Input()
  justifyContent:string = 'center'
  tags?:Tag[] =[];
  /*foodPageTags: any;*/
  

  constructor(private fs:ApiService) { }

  ngOnInit(): void {
   if(!this.foodPagetags)

    this.tags = this.fs.getAllTag();

    } 
  }


