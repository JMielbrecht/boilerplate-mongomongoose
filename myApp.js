require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
	const person = new Person({
		name: "Jimmy", 
		age: 26,
		favoriteFoods: ['pizza', 'beer']
	})
	person.save().then(data => {
		data.save()
		done(null, data);
	});
};

const createManyPeople = (arrayOfPeople, done) => {
	console.log('arrayOfPeople: ', arrayOfPeople);
	const people = Person.create(arrayOfPeople).then(data => {
		console.log('data: ', data);
		done(null, data);
	})
};

const findPeopleByName = (personName, done) => {
	Person.find({name: personName}, (data) => {
		return data === personName;
	}).then(data => {console.log('data: ', data);done(null, data)});
//   done(null /*, data*/);
};

const findOneByFood = (food, done) => {
	Person.findOne({favoriteFoods: food}, (f ,err) => {
		console.log('f: ', f);
		return f === food;
	}).then(data => {
		console.log('data: ', data);
		done(null, data);
	})
};

const findPersonById = (personId, done) => {
	Person.findById(personId, done);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
