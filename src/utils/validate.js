export const validate = (postMessage, setError) => {
const err = {}

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d+$/;

if(postMessage.name.trim() === ''){
    err.name = 'Please enter your first name'
}else if(postMessage.name.length < 3){
    err.name = 'Your name must be at least 3 characters long'
}

if(postMessage.lastName.trim() === ''){
    err.lastName = 'Please enter your last name'
}else if(postMessage.lastName.length < 3){
    err.lastName = 'Your name must be at least 3 characters long'
}

if(postMessage.email.trim() === ''){
    err.email = 'Please enter your first email'
}else if(!emailRegEx.test(postMessage.email)){
    err.email = 'Enter a valid email'
}

if(postMessage.phone.trim() === ''){
    err.phone = 'Please enter your phone number'
}
else if(!phoneRegex.test(postMessage.phone)){
    err.phone = 'Enter a valid phone number'
}

if(postMessage.message.trim() === ''){
    err.message = 'Please enter your message'
}else if(postMessage.message.length < 4){
    err.message = 'Your message must be atleast 4 characters long'
}


setError(err)

return Object.keys(err).length === 0

}