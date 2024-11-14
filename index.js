const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const MONGOURL = 'mongodb://localhost:27017/ajjj'
mongoose.connect(MONGOURL)
.then(()=>{
    console.log('Data base is connected',MONGOURL)
}).catch((err) => {
    console.log('Error connecting', err)
}
)


const sales = new mongoose.Schema({

});      
// create 
const salesData = mongoose.model('sales', sales);

// app.get('/findAll',async(req,res)=>{
//     console.log(`<<<<<<<<<<req>>>>>>>>>>>>>>`,req)
//     const mySalesData = await salesData.find()
//     res.status(200).json(mySalesData);
// } )


// app.get('/getOne',async(req,res)=>{
// console.log(`<<<<<<<<<<req>>>>>>>>>>>>>>`,req)

//     const mySalesData = await salesData.find()
//     res.status(200).json(mySalesData);
// } )


// app.get('/getOne/:id',async(req,res)=>{
//     console.log(req.params)
//     const {id} = req.params
//     const mySalesData = await salesData.findById(id)
//     if(!mySalesData){
//         return res.status(404).json({error:'record not found'})
//     }
//     res.status(200).json(mySalesData);
// } )


// delete


// app.delete('/removeRecord/:id',async(req,res)=>{
//     console.log(req.params)
//     const {id} = req.params
//     const mySalesData = await salesData.findByIdAndDelete(id)
//     if(!mySalesData){
//         return res.status(404).json({error:'record not found'})
//     }
//     res.status(200).json(mySalesData);
// } )


// By Amount 

app.get('/getAmount/:amount',async(req,res)=>{
    console.log(req.params)
    const {amount} = req.params
    const mySalesData = await salesData.findOne({amount:parseInt(amount)})
    if(!mySalesData){
        return res.status(404).json({error:'record not found'})
    }
    res.status(200).json(mySalesData);
} )

app.get('/getquantity/:quantity',async(req,res)=>{
    console.log(req.params)
    const {quantity} = req.params
    const mySalesData = await salesData.findOne({quantity:parseInt(quantity)})
    if(!mySalesData){
        return res.status(404).json({error:'record not found'})
    }
    res.status(200).json(mySalesData);
} )
app.get('/getstatus/:status',async(req,res)=>{
    console.log(req.params)
    const {status} = req.params
    const mySalesData = await salesData.findOne({status:parseInt(status)})
    if(!mySalesData){
        return res.status(404).json({error:'record not found'})
    }
    res.status(200).json(mySalesData);
} )




app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});












// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 8000;

// mongoose.connect("mongodb://localhost:27017/about").then(()=>{
//     console.log('Data base is connected')
// }).catch((err) => {
//     console.log('Error is comming', err)
// }
// )



// const sales = new mongoose.Schema({

// });      // create 

// const salesData = mongoose.model('Sales', sales);

// app.get('/api/',async(req,res)=>{
//     const mySalesData = await salesData.find()
//     res.status(200).json(mySalesData);
// } )


// app.listen(port,()=>{
//     console.log(`listening on port ${port}`);
// })