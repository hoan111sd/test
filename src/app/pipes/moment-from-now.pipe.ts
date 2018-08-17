import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
