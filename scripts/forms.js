

export function passwordLengthCheck(password){
    let trimmed_password = password.trim();
    if(trimmed_password.length >= 10){
        
        return true;
    }else{
        return false;
    }
}