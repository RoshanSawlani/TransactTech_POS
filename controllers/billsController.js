const billsModel = require('../models/billsModel')


// add-items
const addBillsController = async (req, res) => {
    try {
        const newBill = new billsModel(req.body)
        await newBill.save()
        res.send("Bill generated successfully")
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
}
// get-bills data
const getBillsController = async (req, res) => {
    try {
        const bills = await billsModel.find()
        res.send(bills)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { addBillsController,getBillsController }