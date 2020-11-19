import get from './utils/getElement.js'
import getUser from './utils/fetchUser.js'
import displayUser from './utils/displayUser.js'

const showUser = async () =>{
    // get user from API
    const person = await getUser() 
    console.log(person);
    // display user
    displayUser(person)
} 
window.addEventListener('DOMContentLoaded', showUser)
button.addEventListener('click', showUser)