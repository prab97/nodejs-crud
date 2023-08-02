const Form = require("../model/formModel");

const home = async (req, res) => {
    // const {name, phone, gender, email } = await req.body; //destructure the req object.
    const data =  await req.body
    try{
        if(data){
            // const data = await Form.create({name , phone , gender, email })
            const data = await Form.create({name : req.body.name, phone : req.body.phone, gender : req.body.gender, email : req.body.email})
            console.log("inserted successefully", data)
            res.json(data);
            // console.log(req.body.email)
        }else{
            res.json({msg : "false"})
        }

    }catch(err){
        if(err.code === 11000){
            res.json({err : "Email is already registered."})
        }
    }
    
}

const showData = async (req, res) => {
    let payload = await Form.find({}).sort({createdAt:-1});
    // console.log(payload)
    res.json(payload)

}


const updateRecord = async (req, res ) => {
   let payload = req.body
   console.log(payload)
   console.log(await Form.findOne({email : {$eq : payload.email}}))
   const emaildb = await Form.findOne({email : {$eq : payload.email}})

   const msg = await Form.updateOne({email : {$eq : payload.email}}, {$set : {name :payload.name, phone : payload.phone, gender : payload.gender}})
   msg.matchedCount !== 0 ? res.json(msg) : res.json({matchedCount : 0})
    
    
}

const deleteRecord = async(req, res) => {
    const payload = req.body
    console.log(payload.email)
    const msg =await Form.deleteOne({email : {$eq : payload.email}})
    console.log(msg)
    msg.deletedCount !== 0 ? res.json(msg): res.json({deletedCount : 0})
}


module.exports = { home, showData, updateRecord, deleteRecord }
