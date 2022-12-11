import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( 
      res => console.log(res)
      )
    console.log(this.activatedRoute.firstChild?.params)
    console.log(this.activatedRoute.children)
  
    this.activatedRoute.queryParams.subscribe( 
      res => console.log(res)
      )

    setInterval( () => {
      this.activatedRoute.firstChild?.params.subscribe((res) => {
        if(res['username'] !== 'felipe'){
          this.router.navigate(['404']);
        }
      })
    
      //nao sai da tela
      //this.router.navigate(['404']);
      //da refresh
      //this.router.navigateByUrl('404');
    }, 5000)
  }

}
