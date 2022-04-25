import db from "../../config/sequelize";

const { Claims } = db;

const create = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(Claims)
    const claim = Claims.build(body);
    const savedClaim = await claim.save({returning: false});
    res.json(savedClaim);
  } catch (err) {
    next(err);
  }
};

export default { create };
