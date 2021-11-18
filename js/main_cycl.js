function clearConsole(){
    
    console.clear();
}
var app = new Vue({
    el:'#n6',
    data:{
        rez: "",
        table:[],
    },
    methods:{
        tablMnozh: function(){
           for(let i = 1;i<10;i++) {
               this.table[i-1] = {ind:i,rez:5*i}
           }
        }
    },
    beforeMount(){
        this.tablMnozh()
     },
})