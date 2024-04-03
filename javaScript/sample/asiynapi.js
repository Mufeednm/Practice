  const datass =async  () =>{
      let respose = await fetch ("https://api.postalpincode.in/pincode/110001")
      console.log(respose.json());
}

