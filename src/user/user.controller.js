import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import User from "./user.model.js"
import { hash } from "argon2";

export  const defaultUser = async () =>{

    uploadProfilePicture.single()
    const adminUser = {
        "name": "Derian",
        "surname": "Hernández",
        "username": "Elwazawaza",
        "role": "ADMIN_ROLE",
        "email": "dshgonzalez11@gmail.com",
        "password": "Samedirection14*",
        "phone": "40191129"
    }

    const firstUser = await User.findOne({
        $or: [
            { email: adminUser.email },
            { username: adminUser.username }
        ]
    });

    if (!firstUser) {
        adminUser.password = await hash(adminUser.password)
         User.create(adminUser)
    }
}