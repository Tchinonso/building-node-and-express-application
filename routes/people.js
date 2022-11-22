const express = require('express')
const router = express.Router()


const {
	getPeople,
  createPerson,
  createPersonPostman,
  putPersonId,
  deletePersonId
} = require('./controllers/people')



//method 1
router.get("/", getPeople);


router.post("/", createPerson);


router.post("/postman", createPersonPostman );


router.put("/:id", putPersonId);


router.delete("/:id", deletePersonId);


//method 2
//you can also set up your router in this way
router.route('/').get(getPeople).post(createPerson)
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(putPersonId).delete(deletePersonId);

module.exports = router