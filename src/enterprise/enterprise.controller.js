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
