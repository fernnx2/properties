import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTransform'
})
export class BooleanTransformPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    if(args != null){
      if(value === true){
        return 'SI'
      } else if( value == false){
        return 'NO'
      }
      else{
        return 'N/A'
      }
    }
    return null;
  }

}
