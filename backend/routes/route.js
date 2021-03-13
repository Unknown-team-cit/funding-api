const express = require("express");
const router = express.Router();
const Startup = require("../schema/Startup");
router.get("/getStartup", async (req, res) => {
  const startups = await Startup.find();
  res.json(startups);
});

router.post("/addstartup", async (req, res) => {
  await new Startup(req.body).save((err, data) => {
    if (err) {
      console.log("error in deleting", err);
    } else {
      res.json({
        status: "Added successfully",
      });
    }
  });
});

router.put("/updateStartup/:id", async (req, res) => {
  const id = req.params.id;
  await Startup.findByIdAndUpdate(id, { $set: req.body }, (err, data) => {
    if (err) {
      console.log("error in updating", err);
    }
  });
  res.json({
    status: "updated successfully",
  });
});

router.get("/deleteAll", async (req, res) => {
  await Startup.deleteMany({}).then(() => {
    res.json({
      status: "deleted successfully",
    });
  });
});

// router.get("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   await Startup.findByIdAndDelete(id, (err, data) => {
//     if (err) {
//       console.log("error in deleting", err);
//     } else {
//       res.json({
//         status: "deleted successfully",
//       });
//     }
//   });
// });

router.delete("/delete/:id", async (req, res) => {
  let postID = req.params.id;
  await Startup.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.status(200).json({
        status: "deleted",
        data,
      });
    }
  });
});

module.exports = router;

// {
// 	"name_of_company":"name com",
// 	"name_of_owner":"naveen",
// 	"work_field":"ai",
// 	"website_link":"web link",
// 	"linkedin":"linked link",
// 	"ph_number":"12345678",
// 	"email_id":"a@gmail.com",
// 	"password":"pass",
// 	"ppt_link":"pp link",
// 	"country":"india",
// 	"state":"tamil nadu",
// 	"city":"chennai",
// 	"domain":"cs",
// 	"post_content":"ps"
// }

// router.post("/addstartup", (req, res) => {
//     const companyName = "hai"
//     const ownerName = req.body.name_of_owner;
//     const work = req.body.work_field;
//     const website = req.body.website_link;
//     const linkedin = req.body.linkedin;
//     const ph_number = req.body.ph_number;
//     const email = req.body.email_id;
//     const password = req.body.password;
//     const Ppt = req.body.ppt_link;
//     const country = req.body.country;
//     const state = req.body.state;
//     const city = req.body.city;
//     const domain = req.body.domain;
//     const post = req.body.post_content;
//     const startup = new Startup({
//       companyName,
//       ownerName,
//       work,
//       website,
//       linkedin,
//       ph_number,
//       email,
//       password,
//       Ppt,
//       country,
//       state,
//       city,
//       domain,
//       post,
//     });
//     startup
//       .save()
//       .then(() => {
//         res.json({
//           status: "success",
//         });
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   });
