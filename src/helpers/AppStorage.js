class AppStorage{
    storeToken(token){
        localStorage.setItem('token',token);
    }
    storeUser(user){
        localStorage.setItem('user',user); 
    }
    storeExpiration(expiration){
        localStorage.setItem('expiration',expiration); 
    }
  
    store(token,user){      
        this.storeToken(token);
        this.storeUser(user);
       
    }
    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiration');
       
    }

    getToken(){
        var token = localStorage.getItem('token')
        var expiration = this.getExpiration();

        if(token){
            return token;
        }
        return false
       // }
    }
    getUser(){
        return localStorage.getItem('user')
    }  
    getExpiration(){
        return localStorage.getItem('expiration')
    }

}


export default AppStorage = new AppStorage();