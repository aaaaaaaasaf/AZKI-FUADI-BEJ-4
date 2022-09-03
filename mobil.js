class Mobil {
    constructor(nama, merk,warna){
        this.nama = nama;
        this.merk = merk;
        this.warna = warna;
    }
    tranmisi(){
        throw new Error("Fitur belum diimplementasikan")
    }
    
    kuota(){
        console.log("Kursi ini hanya muat untuk 5 orang")
    }

    produksi(){
        throw new Error("Fitur belum diimplementasikan")
    }
}

class Sport extends Mobil{
    #setting = "";
    constructor(nama, merk, warna){
        super (nama, merk, warna)
    }
    
    setTransmisi(setting){
        this.#setting = setting;
    }

    tranmisi(){
        console.log('Mobil ini bisa dijalankan secara '+ this.#setting)
    }
    
    kuota(){
        console.log("mobil ini hanya muat untuk 5 orang")
    }
}

class Minibus extends Mobil{
    #setting = "";
    constructor(nama ,merk, warna, type){
        super(nama,merk,warna)
        this.type = type
    }   
    setTransmisi(setting){
        this.#setting = setting;
    }

    tranmisi(){
        console.log('Mobil ini bisa dijalankan secara '+ this.#setting)
    }

    typeMobil(){
        console.log("Mobil Minibus ini mempunyai type"+ type + "")
    }

    kuota(){
        console.log("Mobil ini muat dari 10 orang")
    }

}

function MakeInputSport(mobil){
    mobil.tranmisi();
}

function MakeInputMinibus(mobil){
    mobil.kuota();
}

const inputMobil = new Sport ("Mobil","Sedan","Hitam" )
inputMobil.setTransmisi("manual");
MakeInputSport(inputMobil);

const inputMobilMinibus = new Minibus("Mobil","Minibus3x","Putih","Daihatsu")
inputMobilMinibus.kuota;
MakeInputMinibus(inputMobilMinibus);