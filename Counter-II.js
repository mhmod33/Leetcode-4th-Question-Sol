var createCounter = function(init) {
    const Init=init
    return{
        increment(){
            init++
            return init 
        },
        reset(){
            return init=Init
        },
        decrement(){
            init-- 
            return init
        },
    }
};

// Another Solutions
var createCounter =function (init){
    let Init=init;
    return{
        increment : ()=>{ init++; return init},
        reset : ()=>{ return init=Init;},
        decrement  :()=>{ init--; return init}
    }
}
