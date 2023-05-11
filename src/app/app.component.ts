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
  private birthYear: number = 1986;
  public age: number;


  ngOnInit(): void {
    this.updateAge();
    setTimeout(() => {
      this.loading = true
    }, 3500);
  }

  updateAge() {
    const now: Date = new Date();
    this.age = now.getFullYear() - this.birthYear;
  }
}
