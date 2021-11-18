function n1(){
    document.getElementById("img").style.boxShadow = "0px 7px 12px rgba(15, 15, 200, 0.2)";
}
window.onload = function n2(){
    let div = document.getElementsByTagName("p");
    for (let i=0;i<div.length;i++){
        div[i].innerHTML = (i+1) +". " + div[i].innerHTML;
    }
}
var app = new Vue({
    el:'#n5',
    data:{
        num:"",
        stepin:"",
        rez:"",
    },
    methods:{
        pow: function(){
           this.rez = Math.pow(this.num, this.stepin);
           alert("Результат - " + this.rez);
           this.num = "";
           this.stepin = "";
        }
    },
})
var app1 = new Vue({
    el:'#n6',
    data:{
        tag:"",
    },
    methods:{
        underline: function(tag){
            let div = document.getElementsByTagName(tag);
            for (let i=0;i<div.length;i++){
                div[i].style.borderBottom = "1px solid black";
            }
        }
    },
})
var app2 = new Vue({
    el:'#n7',
    data:{
        age:"",
        allow:"",
    },
    methods:{
        checkAge: function(vik){
            if (vik >= 16)
                this.allow = "Добро пожаловать!"
            else if(vik>0 && this.age<16)
                this.allow = "Подрости чуток"
            else
                this.allow = "Прости, но тебе минимум 9 месяцев"
           
           }
    }
})
var app3 = new Vue({
    el:'#n11',
    data:{
        number:"",
        number_user:"",
        sproba:3,
        rez:"",
        karta:"",
    },
    methods:{
        checkNumber: function(){
            this.sproba--;
            if (this.sproba == -1) {this.rez = "Ты проиграл, число которое загадывали - " + this.number; this.karta = "";}
            else
            {
                if(this.number_user == this.number)
                {
                    this.rez = "Ты угадал!";
                    this.karta = "";
                }
            }
            if(this.number_user>this.number){this.karta = "Меньше"}
            else if (this.number_user==this.number){this.karta = this.karta}
            else {this.karta = "Больше"}
        },
        resetGame: function(){
            this.sproba=3;
            this.number = Math.round(Math.random() * (10));
            console.log(this.number);
            this.number_user = "";
            this.rez = "";
        }
    },
    beforeMount(){
        this.number = Math.round(Math.random() * (10));
        console.log(this.number);
        
     },
})
var app4 = new Vue({
    el:'#n12',
    data:{
       big:"-",
       small:"",
       cheese:0,
       salad:0,
       ham:0,
       kalories:0,
       price:0,
       rez:"",
       seredn:Number(localStorage['check']) / Number(localStorage['kilk']),
    },
    methods:{
        bigB: function(){
            if (this.small == 1)
            {this.kalories -=250; this.price-=17;}
            this.small = "";
            this.big = "1";
            this.kalories +=340;
            this.price+=25
        },
        smlB: function(){
            if (this.big == 1)
            {this.kalories -=340;this.price-=25}
            this.small = "1";
            this.big = "";
            this.kalories +=250;
            this.price+=17;
        },
        addCheese: function(){
           this.cheese +=1;
           this.kalories +=25;
           this.price+=4;
        },
        addSalad: function(){
            this.salad +=1;
            this.kalories +=5;
            this.price+=5;
         },
         addHam: function(){
            this.ham +=1;
            this.kalories +=50;
            this.price+=10;
         },
         bill: function(){
            this.rez = "Стоимость бургера - " + this.price + "грн, калории - " + this.kalories + "Ккал.";
            localStorage['check']=Number(localStorage['check'])+this.price;
            localStorage['kilk']=Number(localStorage['kilk'])+1;
            this.kalories = 0;
            this.price = 0;
            this.cheese = 0;
            this.salad = 0;
            this.ham = 0;
            this.big = "-";
            this.small = "";
            this.seredn = Number(localStorage['check']) / Number(localStorage['kilk'])
         },
         
    }
})