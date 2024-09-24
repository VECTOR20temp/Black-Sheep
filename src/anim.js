/**This simple JavaScript file implements simple animation transition 
 * on the response text it gets
 */

export function animationRes(){
    const responseText = document.getElementById('response-text');
    if(responseText){
        responseText.classList.remove('animate-fade-in');
        void responseText.offsetWidth;
        responseText.classList.add('animate-fade-in');
    }else{
        console.error('No element found with id="response-area".');
    }
}