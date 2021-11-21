/*
  1/ Imagine you are getting the above users collection from a MongoDB database. 
	a. Create a function called signUp which allows user to add to the collection. 
		If user exists, inform the user that he has already an account. ✅
	b. Create a function called signIn which allows user to sign in to the application ✅

	2/ The products array has three elements and each of them has six properties. 
	a. Create a function called rateProduct which rates the product ✅
	b. Create a function called averageRating which 
		calculate the average rating of a product ✅

	3/ Create a function called likeProduct. 
	This function will help to like to the product if it is not liked 
	and remove like if it was liked. ✅
*/

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
  // check if user's username already exists in database by comparing usernames
  const usernameAlreadyExist = users.some((user) => user.username === username);

  // return message if already exists
  if (usernameAlreadyExist) {
    console.log(`'${username}' has been already used!`);
    return;
  }

  // check if user's email already exists in database by comparing emails
  const emailAlreadyExist = users.some((user) => user.email === email);

  // return message if already exists
  if (emailAlreadyExist) {
    console.log(`'${email}' has been already used!`);
    return;
  }

  // handle if id is duplicated
  let newId = getSimpleUserId(6);
  const idAlreadyExists = users.some((user) => user.id === newId);
  while (idAlreadyExists) {
    newId = getSimpleUserId(6);
    idAlreadyExists = users.some((user) => user.id === newId);
  }

  // if not exist, create new user
  const newUserProfile = {
    _id: newId,
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  };

  // add user to database
  users.push(newUserProfile);

  // print out messages
  console.log("Updated users database. Showing last 2 profiles...");

  // print out the last 3 users in the database
  console.log(users.slice(users.length - 2, users.length));
};

/*
 * Method to sign a user in
 */
const signIn = (email, password) => {
  const userHasSignedUp = users.some(
    (user) => user.email === email && user.password === password
  );

  if (userHasSignedUp) {
    const signingInUser = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (signingInUser[0].isLoggedIn)
      return `${signingInUser[0].username} already signed in`;
    signingInUser[0].isLoggedIn = true;
    return `Logged in ${signingInUser[0].username} successfully`;
  }
  return "Profile does not exist. Please sign up!";
};

/*
 * Method for user to rate a product
 * Assuming that:
 * 	+ When the same user rates again, new rating will be created,
 *    instead of updating existing rating.
 * 	+ Rating are in range from 0 to 5;
 *  + Rating product is always existing -> found
 *  + User's id is valid -> exist
 */
const rateProduct = (productId, username, rating) => {
  // get user by username
  const user = getUserByUsername(username);

  // get product by id
  const product = getProductById(productId);

  // prevent rating if user is not logged in
  if (!user.isLoggedIn) {
    console.log("Please log in before rating!");
    return;
  }

  // create an object of userId + his/her rating
  const userRating = { userId: user._id, rate: rating };

  // add that object to the ratings array of product with id of productId
  product.ratings.push(userRating);
  console.log(`Product with id of '${product._id}' has been rated`);
  console.log(product.ratings);
};

// ? Small tesing
// rateProduct(products[2], users[0], 5);
// console.log(signIn(users[0]));
// rateProduct(products[2], users[0], 5);

/*
 * Method to calculate product's average rating
 */
const getAverageRating = (productId) => {
  const product = getProductById(productId);
  const allRatings = product.ratings;
  return (
    allRatings.reduce((sumRating, rating) => {
      sumRating += rating.rate;
      return sumRating;
    }, 0) / allRatings.length
  );
};
// console.log(getAverageRating(products[0]));

/*
 * Method to like a product
 */
const likeProduct = (productId, username) => {
  // get user by username
  const user = getUserByUsername(username);

  // get product by id
  const product = getProductById(productId);

  // prevent liking if user is not logged in
  if (!user.isLoggedIn) {
    console.log("Please log in before liking!");
    return;
  }

  // check if user already liked the product
  const userAlreadyLiked = product.likes.some((userId) => userId === user._id);
  if (!userAlreadyLiked) {
    product.likes.push(user._id);
    console.log(`'${username}' liked '${product.description}'`);
  } else {
    product.likes = product.likes.filter((userId) => userId !== user._id);
    console.log(`'${username}' unliked '${product.description}'`);
  }
};

// ? Small tesing
// likeProduct(products[2], users[0]);
// console.log(signIn(users[0]));
// likeProduct(products[2], users[0]);
// likeProduct(products[2], users[1]);
// likeProduct(products[2], users[1]);

/*
 * Getting objects from database based in params
 */
const getProductById = (productId) => {
  return (
    products.filter((pd) => pd._id === productId)[0] ||
    "Product ID does not exist!"
  );
};

const getUserByUsername = (username) => {
  return (
    users.filter((user) => user.username === username)[0] ||
    "Username does not exist!"
  );
};

const getUserByEmail = (email) => {
  return (
    users.filter((user) => user.email === email)[0] || "Email does not exist!"
  );
};

const main = () => {
  console.log("CREATING USERS");
  // * signing up users (valid)
  createUser("Andrew1", "andrew1@com", "1234");
  createUser("Andrew2", "andrew2@com", "2345");
  createUser("Andrew3", "andrew3@com", "3456");
  // * signing up users (invalid)
  createUser("Andrew4", "alex@alex.com", "1234");
  createUser("Andrew1", "andrew4@com", "1234");
  console.log();

  console.log("SIGNING IN SOME USERS");
  // * signing in valid users (valid)
  console.log(signIn("andrew1@com", "1234"));
  console.log(signIn("andrew2@com", "2345"));
  // * signing in valid users (valid)
  console.log(signIn("andrew4@com", "3456"));
  console.log();

  console.log("LIKING SOME PRODUCTS");
  // * liking products
  likeProduct("eedfcf", "Andrew1");
  likeProduct("aegfal", "Andrew2");
  likeProduct("eedfcf", "Andrew3");
  likeProduct("eedfcf", "Andrew1");
  console.log();

  console.log("RATING SOME PRODUCTS");
  rateProduct("eedfcf", "Andrew1", 5);
  console.log("Average rating:", getAverageRating("eedfcf").toFixed(1), "/ 5");
  rateProduct("eedfcf", "Andrew2", 5);
  console.log("Average rating:", getAverageRating("eedfcf").toFixed(1), "/ 5");
  rateProduct("eedfcf", "Andrew3", 5);
  console.log();
};
main();
