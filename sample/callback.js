function first(callback) {
     
    let data =()=>{    
        console.log("abu");
    } 
        callback (data())
    
}

first (    function second() {
        console.log("babu");
        
    }
    )