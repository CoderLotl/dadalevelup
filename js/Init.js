export function InitUI(lvlVars, CombinedVars, UIVars)
{
    document.getElementById("lvl").innerHTML = lvlVars.lvl;
    UIVars.successroll_hp_alert = document.getElementById("successroll_hp-alert");
    UIVars.successroll_str_alert = document.getElementById("successroll_str-alert");
    UIVars.successroll_mag_alert = document.getElementById("successroll_mag-alert");
    UIVars.successroll_dex_alert = document.getElementById("successroll_dex-alert");
    UIVars.successroll_spd_alert = document.getElementById("successroll_spd-alert");
    UIVars.successroll_lck_alert = document.getElementById("successroll_lck-alert");
    UIVars.successroll_def_alert = document.getElementById("successroll_def-alert");
    UIVars.successroll_res_alert = document.getElementById("successroll_res-alert");
    UIVars.successroll_cha_alert = document.getElementById("successroll_cha-alert");
    UIVars.successroll_hp_num = document.getElementById("successroll_hp-num");
    UIVars.successroll_str_num = document.getElementById("successroll_str-num");
    UIVars.successroll_mag_num = document.getElementById("successroll_mag-num");
    UIVars.successroll_dex_num = document.getElementById("successroll_dex-num");
    UIVars.successroll_spd_num = document.getElementById("successroll_spd-num");
    UIVars.successroll_lck_num = document.getElementById("successroll_lck-num");
    UIVars.successroll_def_num = document.getElementById("successroll_def-num");
    UIVars.successroll_res_num = document.getElementById("successroll_res-num");
    UIVars.successroll_cha_num = document.getElementById("successroll_cha-num");
    document.getElementById("basehp").innerHTML = lvlVars.basehp;
    document.getElementById("basestr").innerHTML = lvlVars.basestr;
    document.getElementById("basemag").innerHTML = lvlVars.basemag;
    document.getElementById("basedex").innerHTML = lvlVars.basedex;
    document.getElementById("basespd").innerHTML = lvlVars.basespd;
    document.getElementById("baselck").innerHTML = lvlVars.baselck;
    document.getElementById("basedef").innerHTML = lvlVars.basedef;
    document.getElementById("baseres").innerHTML = lvlVars.baseres;
    document.getElementById("basecha").innerHTML = lvlVars.basecha;
    document.getElementById("lvluphp").innerHTML = lvlVars.lvlhp;
    document.getElementById("lvlupstr").innerHTML = lvlVars.lvlstr;
    document.getElementById("lvlupmag").innerHTML = lvlVars.lvlmag;
    document.getElementById("lvlupdex").innerHTML = lvlVars.lvldex;
    document.getElementById("lvlupspd").innerHTML = lvlVars.lvlspd;
    document.getElementById("lvluplck").innerHTML = lvlVars.lvllck;
    document.getElementById("lvlupdef").innerHTML = lvlVars.lvldef;
    document.getElementById("lvlupres").innerHTML = lvlVars.lvlres;
    document.getElementById("lvlupcha").innerHTML = lvlVars.lvlcha;
    document.getElementById("combinedhp").innerHTML = CombinedVars.combinedhp;
    document.getElementById("combinedstr").innerHTML = CombinedVars.combinedstr;
    document.getElementById("combinedmag").innerHTML = CombinedVars.combinedmag;
    document.getElementById("combineddex").innerHTML = CombinedVars.combineddex;
    document.getElementById("combinedspd").innerHTML = CombinedVars.combinedspd;
    document.getElementById("combinedlck").innerHTML = CombinedVars.combinedlck;
    document.getElementById("combineddef").innerHTML = CombinedVars.combineddef;
    document.getElementById("combinedres").innerHTML = CombinedVars.combinedres;
    document.getElementById("combinedcha").innerHTML = CombinedVars.combinedcha;

    document.getElementById("totalbase").innerHTML = CombinedVars.totalbase;
    document.getElementById("totalvlstats").innerHTML = CombinedVars.totalvlstats;
    document.getElementById("combinedstats").innerHTML = CombinedVars.combinedstats;
    document.getElementById("growthhp").innerHTML = lvlVars.growthhp + "%";
    document.getElementById("growthstr").innerHTML = lvlVars.growthstr + "%";
    document.getElementById("growthmag").innerHTML = lvlVars.growthmag + "%";
    document.getElementById("growthdex").innerHTML = lvlVars.growthdex + "%";
    document.getElementById("growthspd").innerHTML = lvlVars.growthspd + "%";
    document.getElementById("growthlck").innerHTML = lvlVars.growthlck + "%";
    document.getElementById("growthdef").innerHTML = lvlVars.growthdef + "%";
    document.getElementById("growthres").innerHTML = lvlVars.growthres + "%";
    document.getElementById("growthcha").innerHTML = lvlVars.growthcha + "%";
    document.getElementById("totalgrowth").innerHTML = CombinedVars.totalgrowth + "%";
}

export function InitCombinedVars(lvlVars, CombinedVars)
{
    CombinedVars.combinedhp = lvlVars.basehp + lvlVars.lvlhp;
    CombinedVars.combinedstr = lvlVars.basestr + lvlVars.lvlstr;
    CombinedVars.combinedmag = lvlVars.basemag + lvlVars.lvlmag;
    CombinedVars.combineddex = lvlVars.basedex + lvlVars.lvldex;
    CombinedVars.combinedspd = lvlVars.basespd + lvlVars.lvlspd;
    CombinedVars.combinedlck = lvlVars.baselck + lvlVars.lvllck;
    CombinedVars.combineddef = lvlVars.basedef + lvlVars.lvldef;
    CombinedVars.combinedres = lvlVars.baseres + lvlVars.lvlres;
    CombinedVars.combinedcha = lvlVars.basecha + lvlVars.lvlcha;
    CombinedVars.totalbase = lvlVars.basehp + lvlVars.basestr + lvlVars.basemag + lvlVars.basedex + lvlVars.basespd + lvlVars.baselck + lvlVars.basedef + lvlVars.baseres + lvlVars.basecha;
    CombinedVars.totalvlstats = lvlVars.lvlhp + lvlVars.lvlstr + lvlVars.lvlmag + lvlVars.lvldex + lvlVars.lvlspd + lvlVars.lvllck + lvlVars.lvldef + lvlVars.lvlres + lvlVars.lvlcha;    
    console.log(CombinedVars.totalvlstats);
    CombinedVars.combinedstats = lvlVars.combinedhp + lvlVars.combinedstr + lvlVars.combinedmag + lvlVars.combineddex + lvlVars.combinedspd + lvlVars.combinedlck + lvlVars.combineddef + lvlVars.combinedres + lvlVars.combinedcha;
    CombinedVars.totalgrowth = lvlVars.growthhp + lvlVars.growthstr + lvlVars.growthmag + lvlVars.growthdex + lvlVars.growthspd + lvlVars.growthlck + lvlVars.growthdef + lvlVars.growthres + lvlVars.growthcha;
}