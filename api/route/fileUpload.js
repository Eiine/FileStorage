import { Router } from "express";

const router=Router();


router.get("/", (re,res)=>{
    res.send("Hola desde el server de miguel")
})



export default router;