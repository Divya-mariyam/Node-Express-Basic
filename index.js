const { response } = require("express");
const express= require("express");
//initialize
const deadpool=express();
deadpool.use(express.json());

//get
deadpool.get("/", (request,response)=> {
    return response.json({data: "hello makkale"});
});
deadpool.get("/fs/:id", (request,response)=> {
   const students = [
       {
           id:1,
           name:"thomas",
       },
       {
           id:2,
           name:"john",

       },
       {
           id:3,
           name:"stephy",
       }
   ];

   const studentId = request.params.id;
   console.log(studentId);
   //filter the array

   const getStudent= students.filter(
       (student)=> student.id===parseInt(studentId));
  if  (getStudent.length === 0){
return response.json({error:"no student found"});
  }
  
   return response.json({data:getStudent });
});
deadpool.listen(3000,()=> console.log("the server is running successfully"));
//http methods

//get
