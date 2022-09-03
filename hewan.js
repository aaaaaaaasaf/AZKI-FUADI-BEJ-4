class Hewan {
    constructor (jenis, habitat, makanan){
        this.jeniss = jenis;
        this.habitat = habitat;
        this,makanan = makanan
    }
    gerak(){
      throw new Error ("Fitur belum diimplementasikan");
    }

    bernafas(){
        console.log("Hewan ini bernafas dengan paru-paru")
    }    
}

class Ikan extends Hewan {
    #gerakan = "";
    constructor(jenis, habitat,makanan){
        super (jenis, habitat, makanan)
    }

    setGerakan(gerakan){
        this.#gerakan = gerakan;
    }

    gerak(){
        console.log('Hewan ini dapat ' + this.#gerakan)
    }
    
    bernafas(){
        console.log("Hewan ini bernafas dengan paru-paru")
    }
}

class Ungas extends Hewan {
    #gerakan = "";
    #berkembangbiak = "";
    constructor(jenis, habitat, makanan,berkembangbiak){
        super (jenis, habitat,makanan)
       
    }
    setGerakan(){
        this.#gerakan = gerakan;
    }
    gerak(){
        console.log (' Hewan ini dapat ' +this.#gerakan)
    }
    bernafas(){
        console.log("Hewan ini bernafas dengan insang")
    }
    setBerkembangbiak(berkembangbiak){
        this.#berkembangbiak = berkembangbiak;
    }
    prosesBerkembangbiak(){
        console.log("Hewan in berkembang biak dengan " +this.#berkembangbiak)
    }
}

function makeGerakan(hewan){
    hewan.gerak();
}
function Pernafasan(hewan){
    hewan.bernafas();
}
function PerkembangBiakan (hewan){
    hewan.prosesBerkembangbiak();
}

const InputHewan = new Ikan("paus", "air", "daging")
InputHewan.setGerakan("terbang")
makeGerakan(InputHewan);

InputHewan.bernafas;
Pernafasan(InputHewan);

const InputPerkembangBiakan = new Ungas("paus","air", "daging", "bertelur")
InputPerkembangBiakan.setBerkembangbiak("bertelur")
PerkembangBiakan(InputPerkembangBiakan);