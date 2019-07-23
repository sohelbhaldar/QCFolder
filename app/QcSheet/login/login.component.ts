import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QCService } from '../qc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router : Router;
  constructor(private service:QCService, router: Router) {
    this.router = router;
     // check if user has already logged in
    //  if (sessionStorage['token'] === undefined) {
    // user is not yet logged in
    //  } else {
        // this.router.navigate(['/HomePage']);
     // }
   }

   Username = '';
  Password = '';

   entries = [
     {
       id : '1',
       description: 'Developer'
     },
     {
      id : '2',
      description: 'Code Reviewer'
    },
   ]

    selectedEntry;

    onSelectionChange(entry) {
        this.selectedEntry = entry;
    }
  
  Login() {

    this.service
        .loginUser(this.Username, this.Password,this.selectedEntry)
        .subscribe((response) => {

            // cache the token
           // const token = response.headers.get('x-auth-token');
            //sessionStorage['token'] = token;

            const result = response.json();
            
            alert(result.Username);
            debugger;
            if (result.Username === 'sohel') {
              alert('Success');
              this.router.navigate(['/HomePage']);
             
            } else {
                alert('invalid email or password');
            }
        });
}

  ngOnInit() {
  }

}
