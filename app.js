function scope(trips) {
    let resule = []
    for(var i = 0; i<trips.length; i++) {
        let temp = trips[i].split(" ")
    
  
        let tempValue = parseInt(temp[0]/temp[1]);
        let res = tempValue;
 
        while (tempValue >= temp[2]) {
    
            let odd = tempValue % temp[2]
            tempValue = parseInt(tempValue / temp[2]);
           
            res += tempValue;
            res += odd;
        }
        
        resule.push(parseInt(res))
 
    }
    console.log(resule)
}

scope(["10 2 5", "12 4 4", "6 2 2", "7 2 3", "12 1 2"])