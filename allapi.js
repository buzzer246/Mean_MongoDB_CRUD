const express = require("express");
const router = express.Router();
module.exports = router;


const User = require("./allschema");

// User Related All Api
router.get("/userlist", async (req, res) => {
    let alluser = await User.find();
    res.status(200).json(alluser.reverse());
    //  res.status(200).json({"message":"All Users Working"})
});

router.post("/saveuser", async (req, res) => {
    const newuser = User({
        fullname: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email
    });
    await newuser.save();
    res.status(200).json({ "message": "User Added Successfully" })
});

router.delete("/deleteuser/:id", async (req, res) => {
    let userinfo = await User.findById(req.params.id);
    if (userinfo == null) {
        res.status(200).json({ "message": "No Such Records" })
    } else {
        await userinfo.deleteOne();
        res.status(200).json({ "message": "Record Deleted successfully" });
    }
    // res.status(200).json(alluser);
    //res.status(200).json({"message":"All Users Working"})
});

router.put("/updateuser", async (req, res) => {
    let userinfo = await User.findById(req.body.id);
    if (userinfo != null) {

        userinfo.fullname = req.body.name,
            userinfo.mobile = req.body.mobile,
            userinfo.address = req.body.address,
            userinfo.email = req.body.email
        await userinfo.save();

        res.status(200).json({ "message": "Record Updated Successfully" });
    } else {
        res.status(200).json({ "message": "No Such Records Exist!" });
    }
});

router.post("/searchuser", async (req, res) => {
    let userinfo = await User.find({ fullname: req.body.name });
    res.status(200).json(userinfo);

    //res.status(200).json({"message":"All Users Working"})
});


