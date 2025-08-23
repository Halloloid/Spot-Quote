
const TestMonial = require('../models/testmonailModel');

const getAllTestMonials = async(req,res)=>{
    try {
      const allTestmonial = await TestMonial.find()
      res.status(200).json(allTestmonial)
      console.log("This is All Testmonial")
    } catch (error) {
        res.status(500).json({message:'Error Fetching The Testmonial'})
    }
}

const createTestMonial = async(req,res)=>{
    try {
        const {type,item,price,rating,description,location,image} = req.body;
        
        const newTestMonial = new TestMonial({
            type,
            item,
            price,
            rating,
            description,
            location,
            image : req.file ? `/uploads/${req.file.filename}` : null
        });
        await newTestMonial.save();
        res.status(201).json(newTestMonial);
    } catch (error) {
        console.error("Error :",error);
        res.status(500).json({message:"Error Creating Note"})
    }
}

const getTestMonialById = async (req, res) => {
    const { id } = req.params;
    try {
        const testMonial = await TestMonial.findById(id);
        if (!testMonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }
        res.status(200).json(testMonial);
    } catch (error) {
        console.error("Error fetching testimonial:", error);
        res.status(500).json({ message: "Error fetching testimonial" });
    }
};

module.exports={
    getAllTestMonials,
    createTestMonial,
    getTestMonialById
}