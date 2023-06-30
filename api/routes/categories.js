const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (eq, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
})

//All categories

router.get("/", async (eq, res) => {

    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router