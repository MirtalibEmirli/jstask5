

const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const userContainer = document.getElementById("users");

    users.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.innerText = `Name: ${user.name}`;
      userItem.style.cursor = "pointer";
      const userDetails = document.createElement("div");
      userDetails.style.display = "none";
      userDetails.innerHTML = `
     <p> Email : ${user.email} </p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <p>Company: ${user.company.name}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>`;

        userItem.addEventListener("click", () => {
          userDetails.style.display = userDetails.style.display === "none" ? "block" : "none";
        });
        
        userContainer.appendChild(userItem);
      userContainer.appendChild(userDetails);

    });


  } catch (error) {
    console.error("Error", error);
  }
};
getAllUsers();






































// const getall = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);
// };
// // getall()

// const login = async () => {
//   const response = await fetch("https://fakestoreapi.com/auth/login", {
//     method: "POST",
//     body: JSON.stringify({
//       username: "mor_2314",
//       password: "83r5^_",
//     }),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   const token = data.accessToken;
// };

// // login();

// const update = async () => {
//   const response = await fetch("https://fakestoreapi.com/products/7", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "test-product",
//       price: 12,
//       description: "loremmm",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
//       category: "electronic",
//     }),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   console.log(data.accessToken);
// };
// // update()

// const addProduct = async () => {
//   const response = await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "p1",
//       price: 13,
//       description: "l2",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
//       category: "qq",
//     }),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
// };
// // addProduct()

// const deleteProduct = async () => {
//   const response = await fetch("https://fakestoreapi.com/products/6", {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "applicaton/json",
//     },
//   });
//   const data = await response.json()
//   console.log(data)
// };
// deleteProduct()