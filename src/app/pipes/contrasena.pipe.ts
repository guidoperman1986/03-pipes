import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  aux=[];
  transform(value: string, args?: any): string {
    if (args){
      return value;
    }else{

      for (let i=0;i<=value.length;i++){
        this.aux[i]="*";
      }
      return this.aux;
    }
  }
}
