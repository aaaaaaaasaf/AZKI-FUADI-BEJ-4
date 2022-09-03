class Pegawai{
    constructor(nama,alamat,ttl){
        this.nama = nama; 
        this.alamat = alamat;
        this.ttl = ttl;
    }
   intro(){
     console.log(`ini nama saya ${this.nama} tinggal di ${this.alamat} dan lahir di Jakarta`)
   } 
   work(){
    console.log('Work')
   }
}
class Junior extends Pegawai{
    #project = ""
    constructor(nama,alamat,ttl,analisJunior){
        super(nama,alamat,ttl)
        this.analisJunior = analisJunior;
    }
    
    intro(){
        super.intro()
        console.log(`saya bisa  ${this.analisJunior}`)
    }

    ann(){
        console.log(`ini analis yang sudah saya buat`)
    }
    setProject(project){
        this.#project = project;
    }
    project(){
        console.log("saya ingin membuat sebuah project analis"+this.#project)
    }

    work(){
        console.log(`Saya masih belajar tentang dasar analisi`)
    }
}

class Senior extends Pegawai{
    #project = "";
    constructor(nama,alamat,ttl,hasilanalsis){
        super(nama,alamat,ttl)
        this.hasilanalsis = hasilanalsis
    }
    intro(){
        super.intro()
        console.log(`saya ${this.nama} saya adalah senior pegawai`)
    }
    hasilAnn(){
        console.log(`ini kerjaan saya ${this.hasilanalsis}`)
    }
    setProject(project){
        this.#project = project;
    }
    project(){
        console.log("saya ingin membuat sebuah project analis "+this.#project)
    }
    work(){
        console.log(`saya sudah berpengalaman dengan data analisi`)
    }

} 

function makeJunior(pegawai){
    return pegawai.work()     
}

function makeSenior(pegawai){
    return pegawai.project()
}

const inputJunior = new Junior("Azki", "Cipinang Melayu","Padang","analisis data")
inputJunior.intro()
makeJunior(inputJunior)

const inputSenior = new Senior()
inputSenior.setProject("data pegawai berprestasi")
makeSenior(inputSenior)