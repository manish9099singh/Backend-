const sales = mongoose.Schema(
{
   name :{
    type:String,
    require : true,
   },
   email :{
    type:String,
    require : true,
   },
   password :{
    type:String,
    require : true,
   },
   dob :{
    type : Date,
    require : true,
   }
  
});