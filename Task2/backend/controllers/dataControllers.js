const sequelize = require("../db/sequeldb");

const data = require("../models/model");

const postDatafunction = async (req, res) => {
  const { Heading, Text } = req.body;
  const t = await sequelize.transaction();
  try {
    if (Heading == "" || Text == "") {
      return res.status(400).json({ message: "Heading required" });
    }

    const textData = await data.create({
      heading: Heading,
      text: Text,
    });
    await t.commit();
    return res.status(201).json({ message: "succesfully submitted" });
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  const checkData = await data.findOne({ where: { id: id } });
  console.log(checkData);
  if (!checkData) {
    res.status(404).json({ message: "data not found" });
  }
  checkData.destroy();
  res.status(201).json({ message: "succesfully deleted" });
};

const geteData = async (req, res) => {
  try {
    const Alldata = await data.findAll();
    return res.status(201).json({ Alldata });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postDatafunction, geteData, deleteItem };
