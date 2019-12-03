var app= angular.module('YapilacakUygulama',[])

var liste=[
    
]
app.controller('yapilacak_kontrol',function(){

    this.liste= JSON.parse(window.localStorage.getItem("list")) || liste
    this.yeniItem = null
    this.ListeyeEkle = function(){
        this.liste.push(this.yeniItem)
        this.yeniItem=null
        this.kaydet()
    }
    this.silItem = function(index){
        this.liste.splice(index,1)
        this.kaydet()
    }
    this.kaydet = function(){
        window.localStorage.setItem("list",JSON.stringify(this.liste))
    }

})