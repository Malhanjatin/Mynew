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
//  function createUser (firstName , lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getAgeYear (){
//             return new Date().getFullYear()- user.age
//         },
//     }
//     return user
//     }
 
// const user1 = createUser('aman','raj',32)
    // function addTwoNumber (a,b){
    //     return(a+b);
    // }
    //   const result = addTwoNumber(10,24)
    //   console.log(result)


    // forEach , Filter, Map , Reduce, Some ,Every

    //  const months  =  ['Janurary', 'February','March','April','May','June','July']

    //   const capitalMonths =months.map((month ,index)=>{
    //    console.log(index,month)
    //      return month.toUpperCase()

    //   })

    //   const months  =  ['Janurary', 'February','March','April','May','June','July']

    //   const filteredMonths =months.filter((month ,index)=>{
   
    //      return index >=3
    //   })
    //  const students  = [
    //     {
    //         name:"Akash",
    //         age:21
    //     },
    //     {
    //         name:"Aamir",
    //         age:23
    //     },
    //     {
    //         name:"mohit",
    //         age:24
    //     },
    //     {
    //         name:"Raman",
    //         age:17
    //     },
    //     {
    //         name:"Nidhi",
    //         age:16
    //     },
    //  ]

    //    const filteredArray =  students.filter((student)=>{

    //     return (student.age>18);
    //    })

    // const filteredArray = students.filter((student)=>{

    //     return (student.age>18);
    //    }).map((student)=>{
    //     return student.name;

    //  })

    // reduce 
//      const nums  = [1,1,2,1,1,1]


//     const result =  nums.reduce((accumulator,current)=>{
// console.log(accumulator)
// return  accumulator*current
//       },0) 

     // some 
//      const evenNumber = [0,2,4,6,8,10]
//       const result =evenNumber.some((num)=>{
//  return !num%2 ===1
//       })

      // every
//       const evenNumber = [0,2,4,6,8,10]
//       const result =evenNumber.every((num)=>{
//  return num%2 ===0
//       })


// destructuring
//array
//const colors = ['red','yellow','green','white','blue','black','orange']
//const[color1,color2,color3]= colors;


// if you need the fourth color only
//const[,,,color4]= colors 

// object 

//  const user = {
//     name:"anurag",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"haryana",
//     },
//  }
//  const {name,age} = user;
//   const {name:username, age:userage} = user

//  const {address:{city}}= user; // used for layering
//  const {address} = user;
//  const{city} = address;

//
// A different way of destructuring array 
// const colors = ['red','yellow','green','white','blue','black','orange']

//  const {3:color4, 5:color5}= colors



// const user = {
//     name:"anurag",
//        age:25,
//          address:{
//              city:"delhi",
//             state:"haryana",
//          },
//      }
//       function intro({age}){ // here only age is destructured  in functions 
//         console.log(age)
//       }
//       intro(user)
