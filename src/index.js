/**The following file is where the main logic of the web app
 * is stored the get request with axios and other functionalities,
 * plus it imports the language logic and proxy server of express app.
 */

import { languageLogic, APIurl } from "./langLogic.js";
import { animationRes } from "./anim.js";

// Function to handle GET request with Axios
export function makeReq(){
    const proxyUrl = `http://localhost:3000/api${APIurl.replace('https://evilinsult.com', '')};`
    console.log(`Making request to URL: ${proxyUrl}`);
    
    axios.get(proxyUrl, {
        params: {
            _t: new Date().getTime() // Adding timestamp to prevent caching
        }, 
    }).then((response) => {
        
        const responseArea = document.getElementById('response-text');
        
        responseArea.innerText = response.data;
        animationRes();

    }).catch((error) => {
        console.error('Error:', error);
    });
};

// Call language logic for language selection
languageLogic();

// Event listener for insult button
const insultButton = document.getElementById('bottom-section__button');
insultButton.addEventListener('click', function(){
    makeReq();
});