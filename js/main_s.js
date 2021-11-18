var app = new Vue({
    el:'#n4',
    data:{
        name:"",
        surname:"",
        password:"",
        email:"",
        buff:"",
        check:0,
        isRight: false,
    },
    methods:{
        checkForm: function(){
            this.check=0
            this.name = this.name.split(" ").join('');
            this.surname = this.surname.split(" ").join('');
            this.email = this.email.split(" ").join('');
            if(this.password.length<5)
            {
                this.isRight = false;
                return false;
            }
            else{this.isRight = true}
            for(let i = 0;i<this.email.length;i++){
                this.buff = this.email.split('');
                if(this.buff[i] == "@"){ this.check = 1;}
            }
            if (this.check == 1){this.isRight = true;}
            else{this.isRight = false}
        }
    },
})