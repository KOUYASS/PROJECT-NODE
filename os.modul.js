const os = require('os')
const user = os.userInfo()
console.log(user)   
console.log(`THE SYSTEM UPTIME IS ${os.uptime()} seconds`) 
const currentOS = {
name : os.type() ,
release : os.release(),
totalMEm : os.totalmem(),
freeMem : os.freemem(),   
    
} 
console.log(currentOS)