function abu() {
    return new Promise ((resolve,reject)=>{
     let x = setTimeout(()=>{
            console.log("hello");
        },1000)
        resolve("babbuuuu")
    })
}
abu ()
.then((ans)=>{console.log(ans);}) 