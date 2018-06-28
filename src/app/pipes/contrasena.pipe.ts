import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!args){
      return value;
    }else{
      let aux:string="";
        for (let i=0;i<=value.length;i++){
          aux += "*";
        }
      return aux;
    }
  }
}
