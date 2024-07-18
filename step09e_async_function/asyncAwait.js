// suppose below is an API that need to be fetched into our machine. 

function API(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wheather data")
            resolve("Success");
            },2000)  
    });
};

// Fetching data into our Machine
async function getWheatherData(){
await API(); // 1st call - Chaining concept
await API(); // 2nd call - Chaining concept
await API(); // 3rd call - Chaining concept
}

getWheatherData();

