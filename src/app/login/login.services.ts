import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


@Injectable()
export class LoginService{
    token: string;
    auth: Auth;
    constructor(private router:Router){}

    login(email: string, password: string){
         this.auth= getAuth();
        signInWithEmailAndPassword(this.auth, email, password)
        .then(
            response => {
              response.user.getIdToken().then(
                  token=>{
                    this.token = token;
                    console.log("Token obtenido --- " + token);
                    this.router.navigate(['/']);
                  })
            }
          )

     }

     getIdToken(){
         return this.token;
     }

     isAutenticado(){
       return this.token != null;
     }

     logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
          this.token = '';
          this.router.navigate(['login']);
      }).catch(error => console.log("error logout:" + error));
   }
}
