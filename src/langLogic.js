/**The following file contains and maintains the language logic 
 * of the Black sheep project.
 */

    export let APIurl = 'https://evilinsult.com/generate_insult.php?lang=en&type=text';

export function languageLogic(){

        const languageSelect = document.getElementById('dropDown');
        languageSelect.addEventListener('change', function(){
            let selectedLang = this.value;
            let apiURL;

        switch(selectedLang){
            case 'cn':
                APIurl = 'https://evilinsult.com/generate_insult.php?lang=cn&type=text';
            break;
            case 'de':
                APIurl = 'https://evilinsult.com/generate_insult.php?lang=de&type=text';
            break;
            case 'el':
                APIurl = 'https://evilinsult.com/generate_insult.php?lang=el&type=text';
            break;
            case 'es':
                APIurl = 'https://evilinsult.com/generate_insult.php?lang=es&type=text';
            break;
            default:
                APIurl = 'https://evilinsult.com/generate_insult.php?lang=en&type=text';
            break;
        }

        console.log(`Language endpoint updated to ${APIurl}`);
    });
}