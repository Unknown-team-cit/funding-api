const express = require("express");
const router = express.Router();
const Startup = require("../schema/Startup");

router.get("/getStartup", async (req, res) => {
  const startups = await Startup.find();
  res.json(startups);
});

router.get('/getStartupId/:id', async(req,res)=>{
  const id = req.params.id;
  const company= await Startup.findById(id);
  res.json(company);
  
});

router.post("/addstartup", async (req, res) => {
  await new Startup(req.body).save((err, data) => {
    if (err) {
      console.log("error in deleting", err);
    } else {
      res.json({
        status: "Added successfully",
        data,
      });
    }
  });
});

router.put("/updateStartup/:id", async (req, res) => {
  const id = req.params.id;
  await Startup.findByIdAndUpdate(id, { $set: req.body }, (err, data) => {
    if (err) {
      console.log("error in updating", err);
    } else {
      res.json({
        status: "updated successfully",
        data,
      });
    }
  });
});

router.get("/deleteAll", async (req, res) => {
  await Startup.deleteMany({}).then(() => {
    res.json({
      status: "deleted successfully",
    });
  });
});

router.post("/message/:id", async (req, res) => {
  const id = req.params.id;
  const message = req.body;

  Startup.findByIdAndUpdate(
    id,
    { $push: { messages: message} },
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "success",
          data,
        });
      }
    }
  );
});

router.delete("/delete/:id", async (req, res) => {
  let postID = req.params.id;
  await Startup.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.status(200).json({
        status: "deleted",
      });
    }
  });
});

router.post('/login', async(req,res)=>{
  let email= req.body.Email;
  let password= req.body.Password;
  let company= await Startup.findOne(req.body,(err,data)=>{
    if (err){
      res.send(`Wrong email or Password`);
    }
    else{
      res.json(data)
    }
  })
})

module.exports = router;
