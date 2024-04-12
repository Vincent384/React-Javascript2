export const registerValidate = (newUser, setError) => {
    const err = {}
    
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(newUser.name.trim() === ''){
        err.firstName = 'Please enter your first name'
    }else if(newUser.name.length < 3){
        err.firstName = 'Your name must be at least 3 characters long'
    }
    
    if(newUser.lastName.trim() === ''){
        err.lastName = 'Please enter your last name'
    }else if(newUser.lastName.length < 3){
        err.lastName = 'Your name must be at least 3 characters long'
    }
    
    if(newUser.email.trim() === ''){
        err.email = 'Please enter your email'
    }else if(!emailRegEx.test(newUser.email)){
        err.email = 'Enter a valid email'
    }

    if(newUser.password.trim() === ''){
        err.password = 'Please enter your password'
    }

    
    setError(err)
    
    return Object.keys(err).length === 0
    

    }