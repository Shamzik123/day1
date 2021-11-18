var app = new Vue({
    el:'#n1',
    data:{
        num:"",
        rez: "",
    },
    methods:{
        checkFlat: function(){
            if(this.num>=1 && this.num<=20){
                this.rez = "1-й ";
            }
            else if (this.num>=21 && this.num<=48){
                this.rez = "2-й ";
            }
            else if (this.num>=49 && this.num<=90){
                this.rez = "3-й ";
            }
            else {
                this.rez = "Нет такой квартиры";
            }
        }
    }
})

var app1 = new Vue({
    el:'#n2',
    data:{
        status: "",
        users:[
            {login: 'toma', password: '123'},
            {login: 'petya', password: '777'},
            {login: 'olya', password:'456'}
        ],
        login:"",
        passw:"",
    },
    methods:{
        checkUser: function(){
            this.status = "";
           for(let i = 0; i<this.users.length; i++){
                if(this.login==this.users[i].login && this.passw==this.users[i].password){
                    this.status = "Login successful!";
                }
           }
           if(!this.status){
             this.status = "Login failed!";
           }
        }
    }
})

var app2 = new Vue({
    el:'#n3',
    data:{
        age:"",
        allow:"",
    },
    methods:{
        checkAge: function(){
            if (this.age >= 16)
                this.allow = "Добро пожаловать!!"
            else if(this.age>0 && this.age<16)
                this.allow = "Подрости чуток"
            else
                this.allow = "Прости, но тебе минимум 9 месяцев"
           
           }
    }
})

var app3 = new Vue({
    el:'#n4',
    data:{
        workAge:"",
        adding:"",
    },
    methods:{
        checkSalary: function(){
            if (this.workAge<=3&&this.workAge>=0)
                this.adding = "Надбавка - 0%"
            else if(this.workAge>3&&this.workAge<=10)
                this.adding = "Надбавка - 10%"
            else if(this.workAge>10&&this.workAge<=20)
                this.adding = "Надбавка - 20%"
            else if(this.workAge>20)
                this.adding = "Надбавка - 25%"
            else
                this.adding = "Стаж не может быть меньше нуля!"
           
           }
    }
})