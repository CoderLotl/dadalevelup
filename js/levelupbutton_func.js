//Name - Level Up Button Script - Functions


export function levelupbutton(lvlVars, CombinedVars, UIVars) {

    document.getElementById("lvl").innerHTML = lvlVars.lvl += 1;
    var rollhp = Math.floor(Math.random() * 100);
    var rollstr = Math.floor(Math.random() * 100);
    var rollmag = Math.floor(Math.random() * 100);
    var rolldex = Math.floor(Math.random() * 100);
    var rollspd = Math.floor(Math.random() * 100);
    var rolllck = Math.floor(Math.random() * 100);
    var rolldef = Math.floor(Math.random() * 100);
    var rollres = Math.floor(Math.random() * 100);
    var rollcha = Math.floor(Math.random() * 100);

    UIVars.successroll_uni_alert = setTimeout(successalertremove(UIVars), 2000);

    if (lvlVars.exp < 10) {
        lvlVars.exp = 0;
        document.getElementById("exp").innerHTML = 0;
    }

    if (rollhp < growthhp) {
        document.getElementById("lvluphp").innerHTML = lvlVars.lvlhp += 1;
        document.getElementById("combinedhp").innerHTML = CombinedVars.combinedhp += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_hp_alert.classList.add("bg-success");
        UIVars.successroll_hp_num.innerHTML ++;
    }

    if (rollstr < lvlVars.growthstr) {
        document.getElementById("lvlupstr").innerHTML = lvlVars.lvlstr += 1;
        document.getElementById("combinedstr").innerHTML = CombinedVars.combinedstr += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_str_alert.classList.add("bg-success");
        UIVars.successroll_str_num.innerHTML ++;
    }
    
    if (rollmag < lvlVars.growthmag) {
        document.getElementById("lvlupmag").innerHTML = lvlVars.lvlmag += 1;
        document.getElementById("combinedmag").innerHTML = CombinedVars.combinedmag += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_mag_alert.classList.add("bg-success");
        UIVars.successroll_mag_num.innerHTML ++;
    }

    if (rolldex < lvlVars.growthdex) {
        document.getElementById("lvlupdex").innerHTML = lvlVars.lvldex += 1;
        document.getElementById("combineddex").innerHTML = CombinedVars.combineddex += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_dex_alert.classList.add("bg-success");
        UIVars.successroll_dex_num.innerHTML ++;
    }

    if (rollspd < lvlVars.growthspd) {
        document.getElementById("lvlupspd").innerHTML = lvlVars.lvlspd += 1;
        document.getElementById("combinedspd").innerHTML = CombinedVars.combinedspd += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_spd_alert.classList.add("bg-success");
        UIVars.successroll_spd_num.innerHTML ++;
    }

    if (rolllck < lvlVars.growthlck) {
        document.getElementById("lvluplck").innerHTML = lvlVars.lvllck += 1;
        document.getElementById("combinedlck").innerHTML = CombinedVars.combinedlck += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_lck_alert.classList.add("bg-success");
        UIVars.successroll_lck_num.innerHTML ++;
    }

    if (rolldef < lvlVars.growthdef) {
        document.getElementById("lvlupdef").innerHTML = lvlVars.lvldef += 1;
        document.getElementById("combineddef").innerHTML = CombinedVars.combineddef += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_def_alert.classList.add("bg-success");
        UIVars.successroll_def_num.innerHTML ++;
    }

    if (rollres < lvlVars.growthres) {
        document.getElementById("lvlupres").innerHTML = lvlVars.lvlres += 1;
        document.getElementById("combinedres").innerHTML = CombinedVars.combinedres += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_res_alert.classList.add("bg-success");
        UIVars.successroll_res_num.innerHTML ++;
    }

    if (rollcha < lvlVars.growthcha) {
        document.getElementById("lvlupcha").innerHTML = lvlVars.lvlcha += 1;
        document.getElementById("combinedcha").innerHTML = CombinedVars.combinedcha += 1;
        document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats += 1;

        UIVars.successroll_cha_alert.classList.add("bg-success");
        UIVars.successroll_cha_num.innerHTML ++;
    }

    //if (lvl > 20) {
        //lvl = 1;
        //combinedhp = 25;
        //combinedhp = 25;
        //combinedhp = 25;
        //combinedhp = 25;
        //document.getElementById("lvl").innerHTML = 1;
        //document.getElementById("combinedhp").innerHTML = 25;
        //document.getElementById("combinedstr").innerHTML = 7;
        //document.getElementById("combinedmag").innerHTML = 7;
        //document.getElementById("combineddex").innerHTML = 6;
        //document.getElementById("combinedspd").innerHTML = 7;
        //document.getElementById("combinedlck").innerHTML = 6;
        //document.getElementById("combineddef").innerHTML = 4;
        //document.getElementById("combinedres").innerHTML = 6;
        //document.getElementById("combinedcha").innerHTML = 7;

    //}

}

export function experiencebuttonup(lvlVars, UIVars) {
    document.getElementById("exp").innerHTML = lvlVars.exp += 1;

    if (lvlVars.exp == 10) {
        levelupbutton(lvlVars, CombinedVars, UIVars);
        lvlVars.exp = 0;
        document.getElementById("exp").innerHTML = 0;
    }
}


function successalertremove(UIVars) {
    UIVars.successroll_hp_alert.classList.remove("bg-success");
    UIVars.successroll_str_alert.classList.remove("bg-success");
    UIVars.successroll_mag_alert.classList.remove("bg-success");
    UIVars.successroll_dex_alert.classList.remove("bg-success");
    UIVars.successroll_spd_alert.classList.remove("bg-success");
    UIVars.successroll_lck_alert.classList.remove("bg-success");
    UIVars.successroll_def_alert.classList.remove("bg-success");
    UIVars.successroll_res_alert.classList.remove("bg-success");
    UIVars.successroll_cha_alert.classList.remove("bg-success");

    UIVars.successroll_hp_num.innerHTML = 0;
    UIVars.successroll_str_num.innerHTML = 0;
    UIVars.successroll_mag_num.innerHTML = 0;
    UIVars.successroll_dex_num.innerHTML = 0;
    UIVars.successroll_spd_num.innerHTML = 0;
    UIVars.successroll_lck_num.innerHTML = 0;
    UIVars.successroll_def_num.innerHTML = 0;
    UIVars.successroll_res_num.innerHTML = 0;
    UIVars.successroll_cha_num.innerHTML = 0;
}



//document.getElementById("lvl").innerHTML = Math.floor(Math.random() * 100) + growthhp;