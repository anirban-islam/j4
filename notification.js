function sendNotification(email){
    
    const symbol = (email.match(/@/g) || []).length;

    if(symbol !== 1){
        return "Invalid Email";
    }
    else{
        const [username, domain] = email.split('@');
        const notifacation = `${username} sent you an email from ${domain}`
        return notifacation;
    }
}


