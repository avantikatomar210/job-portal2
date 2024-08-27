import {company} from "../models/company.model.js"
export const registerCompany = async (req,res) => {
    try{
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required.",
                success:false
            });
        }
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You can't add some company",
                success:false
            })
        };
        company = await Company.create({
            name:companyName,
            userId:req.id
        });
        return res.status(201).json({
            message:"Company registered successfully.",
            company,
            success:true
        })

    } catch (error){
        console.log(error);
    }
//get company by id
const getCompanyById = async (req,res) =>{
    try{
        const companyId = req.params.id;
        const company = await Company.findById(coppanyId);
        if(!company){
            return res.status(404).json8({
                mesage:"Company not found.",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })

    }catch (error){
        console.log(error);
    }

}
const updateCompany = async(req,res) =>{
    try{
        const {name, description, website, location} = req.body;
        const file = req.file;
        //idhar cloudinary ayega

        const updateData = {name, description, website, location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new: true});

        if (!company){
            return res.status(404).json({
                message:"company not found.",
                success:false
            })
        }return res.status(200).json({
            message:"Company information updated.",
            success:true
        })

    }catch (error){
        console.log(error);
    }
}   
}
