import Enterprise from  "./enterprise.model.js"

export const registerEnterprise = async (req, res) =>{
    try{

        const data = req.body
        const enterprise = await Enterprise.create(data)

        return res.status(201).json({
            message: "Enterprise has been created"
        })

    }catch(err) {
        return res.status(500).json({
            message: "Enterpise registration failed",
            error: err.message
            
        })
    }
}

export const sortEnterprisesAZ = async (req,res) =>{
    const { limite = 10, desde = 0 } = req.query
    try{
        const enterprises = await Enterprise.find().sort({ name: 1 })
        .skip(Number(desde))
        .limit(Number(limite))

        const enterprisesWithAge = enterprises.map((enterprise) => {
            const currentYear = new Date().getFullYear()
            const yearsOfExistence = currentYear - enterprise.yearOfCreation 
            return {
                ...enterprise.toObject(),
                yearsOfExistence
            }
        })

        res.status(200).json({
            success: true,
            enterprises: enterprisesWithAge
        })
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Error on sorting the enterprises',
            error
        })
    }
}

export const sortEnterprisesZA = async (req,res) =>{
    const { limite = 10, desde = 0 } = req.query
    try{
        const enterprises = await Enterprise.find().sort({ name: -1 })
        .skip(Number(desde))
        .limit(Number(limite))

        const enterprisesWithAge = enterprises.map((enterprise) => {
            const currentYear = new Date().getFullYear()
            const yearsOfExistence = currentYear - enterprise.yearOfCreation 
            return {
                ...enterprise.toObject(),
                yearsOfExistence
            }
        })

        res.status(200).json({
            success: true,
            enterprises: enterprisesWithAge
        })
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Error on sorting the enterprises',
            error
        })
    }
}

export const sortEnterprisesExpirience = async (req,res) =>{
    const { limite = 10, desde = 0 } = req.query
    try{
        const enterprises = await Enterprise.find().sort({ yearOfCreation: 1 })
        .skip(Number(desde))
        .limit(Number(limite))

        const enterprisesWithAge = enterprises.map((enterprise) => {
            const currentYear = new Date().getFullYear()
            const yearsOfExistence = currentYear - enterprise.yearOfCreation 
            return {
                ...enterprise.toObject(),
                yearsOfExistence
            }
        })

        res.status(200).json({
            success: true,
            enterprises: enterprisesWithAge
        })
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Error on sorting the enterprises',
            error
        })
    }
}

export const updateEnterprise = async (req,res) =>{
    try {
        const {eid} = req.params
        const data = req.body

        const updatedEnterprise= await Enterprise.findByIdAndUpdate(eid, data, { new: true })

        res.status(200).json({
            success: true,
            msg: 'Enterprise Updated',
            enterprise: updatedEnterprise,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error while trying to update the Enterprise',
            error: err.message
        })
    }
}

export const sortEnterprisesCategory = async (req,res) =>{
    const { limite = 10, desde = 0 } = req.query
    const {category} = req.body
    try{
        const enterprises = await Enterprise.find({category})
        .skip(Number(desde))
        .limit(Number(limite))

        const enterprisesWithAge = enterprises.map((enterprise) => {
            const currentYear = new Date().getFullYear()
            const yearsOfExistence = currentYear - enterprise.yearOfCreation 
            return {
                ...enterprise.toObject(),
                yearsOfExistence
            }
        })

        res.status(200).json({
            success: true,
            enterprises: enterprisesWithAge
        })
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Error on sorting the enterprises',
            err
        })
    }
}