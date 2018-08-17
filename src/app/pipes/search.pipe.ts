import { Pipe, PipeTransform } from '@angular/core';
// import * as Fuse from 'fuse.js';
import * as _ from "lodash";
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // boldWord(word:string, sentence) {
  //   sentence.replace(/word/gi, x => {
  //     return x.bold();
  //   });
  // }
  transform(items: any, filter: any, products: any): any {

    
    
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
      ]
    };
    
    
    
    
    // var fuse = new Fuse(products, options); // "list" is the item array
    // var result = fuse.search(filter);

    // return result;



  }

}
