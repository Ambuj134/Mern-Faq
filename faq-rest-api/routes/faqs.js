const router = require("express").Router();
const Faq = require("../models/Faq");
const { authSchema } = require("../validator/validator_schema");

// Create Faq
router.post("/create", async (req, res) => {
  try {
    const result = await authSchema.validateAsync(req.body);

    const newFaq = new Faq(result);

    const faq = await newFaq.save();
    res.status(200).json(faq);
  } catch (err) {
    if (err.isJoi === true) {
      res.status(500).json(err.details);
    }
    // console.log(err);
  }
});

// update faq ==================
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const faq = await Faq.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json("Faq has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Faq==================
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Faq.findByIdAndRemove(id).exec();
  res.status(200).json("Faq has been deleted");
});

// get a faq =======================
router.get("/getOne/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const faq = await Faq.findById(req.params.id);
    res.status(200).json(faq);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all Faq==========================

router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find(req.body);
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
