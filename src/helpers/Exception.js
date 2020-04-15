import AuthService from '@/helpers/auth.service'
class Exception{
    handle(error){
        this.isExpired(error.response.data)
    }
    isExpired(error){
        if(error == 'Token is expired'){
            AuthService.logout()
        }
    }
}

export default Exception = new Exception()