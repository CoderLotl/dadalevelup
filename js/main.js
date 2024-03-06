import { lvlVars, UIVars, CombinedVars } from './vars.js';
import { levelupbutton, experiencebuttonup } from './levelupbutton_func.js';
import { InitUI, InitCombinedVars } from './Init.js';

let lvlup_btn;
let addexp_btn;

document.addEventListener('DOMContentLoaded', ()=>
{
    InitCombinedVars(lvlVars, CombinedVars);
    InitUI(lvlVars, CombinedVars, UIVars);
    lvlup_btn = document.getElementById('lvlup-btn');
    addexp_btn = document.getElementById('addexp-btn');

    lvlup_btn.addEventListener('click', ()=>
    {
        levelupbutton(lvlVars, CombinedVars, UIVars);
    });
        
    addexp_btn.addEventListener('click', ()=>
    {
        experiencebuttonup(lvlVars, CombinedVars, UIVars);
    });
});