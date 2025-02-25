import User from "../user/user.model.js"
import Enterprise from "../enterprise/enterprise.model.js"

export const emailExists = async (email= "") =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${username} is already registered`)
    }
}

export const usernameExists = async (username = "") =>{
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const enterpriseNameExits = async (name = "") =>{
    const existe = await Enterprise.findOne({name})
    if(existe){
        throw new Error(`The name of the enterprise ${name} is already registered`)
    }
}