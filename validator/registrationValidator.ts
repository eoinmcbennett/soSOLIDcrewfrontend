import { Register } from "../model/register";

module.exports.validateRegister = (register:Register) : string |null => {

   const password: string = register.password;
   const passwordConfirmation:string = register.passwordConfirmation;
   
   if(password !== passwordConfirmation){
        return "Passwords do not match";

    }
    return null;
}