 // this is procedural programming
 
//  const user = {
//     firstName:"Jatin",
//     lastName:"Malhan",
//     age:"24"
// }

//  function getAgeYear(age){
//     return new Date().getFullYear()-age;
//  }


 // this is object oreinted programming 

//  const user = {
//         firstName:"Jatin",
//         lastName:"Malhan",
//         age:"24",
//          getAgeYear : function(){
//             return new Date().getFullYear()-user.age
//          }
//     }
     

//FACTORY FUNCTIONS
 function createUser (firstName , lastName,age){
    const user = {
        firstName,
        lastName,
        age,
        getAgeYear (){
            return new Date().getFullYear()- user.age
        },
    }
    return user
    }
 
const user1 = createUser('aman','raj',32)
    