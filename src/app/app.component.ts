import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newportefolio';

  scrollToId(id){
    document.querySelector("#" + id).scrollIntoView({behavior: "smooth"});
  }
  public loading = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true
    }, 3500);
  }
}
