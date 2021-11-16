let users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

let products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/*
	1/ Imagine you are getting the above users collection from a MongoDB database. 
	a. Create a function called signUp which allows user to add to the collection. 
		If user exists, inform the user that he has already an account. ✅
	b. Create a function called signIn which allows user to sign in to the application ✅

	2/ The products array has three elements and each of them has six properties. 
	a. Create a function called rateProduct which rates the product 
	b. Create a function called averageRating which 
		calculate the average rating of a product

	3/ Create a function called likeProduct. 
	This function will helps to like to the product if it is not liked 
	and remove like if it was liked.
*/

/*
 * Method to generate an id for the user when signed up
 */
const getSimpleUserId = (length) => {
  // all characters used to generate id
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // result container string
  let randomId = "";

  // concatenate random characters in to result container string
  for (let i = 0; i < length; i++)
    randomId += characters[Math.floor(Math.random() * (characters.length - 1))];

  // return result container string
  return randomId;
};

/*
 * Method to get data from form (for example) and create a user profile
 * Format: {
 *  _id: "fg12cy",
 *  username: "Asab",
 *  email: "asab@asab.com",
 *  password: "123456",
 *  createdAt: "08/01/2020 9:30 AM",
 *  isLoggedIn: true,
 * }
 */
const createUser = (username, email, password) => {
  // check if user already exists in database by comparing emails
  const alreadyExistInDatabase = users.some((user) => user.email === email);

  // return message if alraeady exists
  if (alreadyExistInDatabase) return `Email '${email}' has been already used!`;

  // if not exist, create new user
  const newUserProfile = {
    _id: getSimpleUserId(6),
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  };

  // add user to database
  users.push(newUserProfile);

  // print out messages
  console.log("Updated users database. Showing last three profiles...");

  // print out the last 3 users in the database
  console.log(users.slice(users.length - 3, users.length));
};

/*
 * Method to sign a user in
 */
const signIn = (user) => {
	if (user.isLoggedIn) return "Already logged in";
	user.isLoggedIn = true;
	return "Logged In";
}