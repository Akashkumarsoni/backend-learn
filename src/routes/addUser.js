
const express = require('express');
const router = express.Router();

const data = [
    {
        "name":"AKASH",
        "id":"001",
        "city":"LUCKNOW"
    },
    {
        "name":"ASHWANI",
        "id":"002",
        "city":"DELHI"
    },
    {
        "name":"HARMAN",
        "id":"003",
        "city":"NEW YORK"
    },
    {
        "name":"MANISH",
        "id":"004",
        "city":"GOA"
    },
    {
        "name":"VIKASH",
        "id":"005",
        "city":"PATNA"
    }
];

router.get("/",(req,res)=>{
    try {
        res.status(200).json(data).then((r)=>{
            console.log('Response',r)
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
});

router.get("/:userId",(req,res)=>{
    console.log(req)
    const id = parseInt(req.params.userId);
    try {
        const userData = data.filter((e)=>e.id == id)[0];
        res.status(200).json(userData).then((r)=>{
            console.log('Response',r)
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
});
router.post('/',(req,res)=>{
    const userData = req.body
    data.push(userData)
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
})
router.delete('/:userId',(req,res)=>{
    const userData = req.params.userId;
    console.log(userData)
    const filteredData = data.filter((e)=>e.id != userData)
    try {
        res.status(200).json(filteredData)
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
})
router.put('/:userId',(req,res)=>{
    const id = req.params.userId;
    const updatedData = req.body;
    const dataIndex = data.findIndex(item => item.id === id);
    if (dataIndex === -1) {
        return res.status(404).json({ error: 'Data not found' });
    }
    data[dataIndex] = { ...data[dataIndex], ...updatedData };

    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
})
module.exports = router