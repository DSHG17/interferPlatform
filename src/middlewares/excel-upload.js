import ExcelJS from 'exceljs';
import fs from 'fs';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))
const EXCEL_EXTENSIONS = ['.xlsx', '.xls']




export const generateReport = async (enterprisesWithAge) =>{
    const workbook = new ExcelJS.Workbook() 
    const sheet = workbook.addWorksheet('Enterprises')
    const currentYear = new Date().getFullYear();

    sheet.columns = [
        { header: 'Name', key: 'name', width: 30},
        { header: 'Ubication', key: 'ubication', width: 60},
        { header: 'Impact', key: 'impact', width:60},
        { header: 'About', key: 'about', width: 60},
        { header: 'Contact', key: 'contact', width: 40},
        { header: 'Year Of Creation', key: 'yearOfCreation', width: 30},
        { header: 'Years of Existence', key: 'yearsOfExistence', width: 30}
    ]

    enterprisesWithAge.forEach((enterprise) => {
        const yearOfCreation = Number(enterprise.yearOfCreation); 
        const yearsOfExistence = currentYear - yearOfCreation;

        console.log(yearsOfExistence)
        sheet.addRow({
            name: enterprise.name,
            ubication: enterprise.ubication,
            impact: enterprise.impact,
            about: enterprise.about,
            contact: enterprise.contact,
            yearOfCreation: enterprise.yearOfCreation,
            yearsOfExistence:  yearsOfExistence
        })
    })

   
    const destinationFolder = join(CURRENT_DIR, '../../public/uploads/excel-file')
    const fileName = `enterprises.xlsx`
    const filePath = join(destinationFolder, fileName)

    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true })
    }

    await workbook.xlsx.writeFile(filePath)

    return filePath; 
}