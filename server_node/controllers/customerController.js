const Customer = require("../modules/Customer")

const getAllCustomers = async (req,res) =>{
    const customers = await Customer.find({},{password:0}).lean()

    if(!customers?.length)
        return res.status(400).json({message: "no customer found"})
    res.json(customers)
}

const getCustomerById = async(req,res)=>{
    const{id} = req.params
    try{
    const customer = await Customer.findById(id,{password:0}).lean()
    res.json(customer)
    }catch(err){
        return res.status(400).json({message: 'customer not found'})
    }
}

const updateCustomer = async (req,res)=>{
    const{_id,name,phone,email,picture} = req.body
    if (!_id || !name)
        return res.status(400).json({message: 'fields are required!!'})
    
    const customer = await Customer.findById(_id).exec()
    if(!customer)
        return res.status(400).json({message: 'user not found'})

    customer.name=name,
    customer.phone=phone,
    customer.email=email,
    customer.picture=picture

    const updatedCustomer = await customer.save()

    res.json(`'${updatedCustomer.name}' updated`)
}

const deleteCustomer = async (req,res)=>{
    const{id} = req.body
    const customer = await Customer.findById(id).exec()
    if(!customer){
        return res.status(400).json({message: 'Customer not found'})
    }
    customerName = customer.name
    const result = await customer.deleteOne()
    const reply=`Customer ${customerName} deleted`
    res.json(reply)
}

module.exports={
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}