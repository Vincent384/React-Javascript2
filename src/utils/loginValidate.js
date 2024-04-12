export const loginValidate = (newUser, setError) => {
    const err = {}
    
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
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