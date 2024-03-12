const servicesModel = require("../models/servicesModel");

module.exports={
    getHome:(req,res)=>{
        try{
            res.render('user/home')
        }catch(err){
            console.log(err);
        }
    },
    getContact:(req,res)=>{
        try{
            res.render('user/contact')
        }catch(err){
            console.log(err)        }
    },
    getGallery:(req,res)=>{
        try{
            res.render('user/gallery')
        }catch(err){
            console.log(err)
        }
    },
    getAbout:(req,res)=>{
        try{
            res.render('user/about')
        }catch(err){
            console.log(err);q
        }
    },
    getProjects:(req,res)=>{
        try{
            res.render('user/projects')
        }catch(err){
            console.log(err);q
        }
    },
    getServices:async(req,res)=>{
        try{
            const services = await servicesModel.find({}).lean()
            res.render('user/services',{services})
        }catch(err){
            console.log(err)
        }
    }
}