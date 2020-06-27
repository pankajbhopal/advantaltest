import { Component } from '@angular/core';

var a, b, c, d = '' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advantaltest';
  perSelect:any = "";
  data:any;

  onSelect(v){
    if(!a){ a = ""; }
    if(!b){ b = ""; }
    if(!c){ c = ""; }
    if(!d){ d = ""; }
   
    if(a.length < 7){
        a += v;
    }else if (a.length <= 7 && b.length < 6){
        if(b.length == 2){
          b+=" ";
          return;
        }
        b+=v;
    }
    else if(b.length >= 5 && c.length == 0){
        c=v;
    }else if(c.length == 1 && d.length == 0){
        d=v;
    }
      this.data = [{a},{b},{c},{d}];
      // console.log(this.ss)
  }

}
