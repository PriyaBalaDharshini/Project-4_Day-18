const heading = document.createElement("h5");
heading.innerHTML = "Users List"

const container = document.createElement("div");
container.className = "container";

container.append(heading)

const row = document.createElement("div");
row.className = "row";

container.append(row);

const api = "https://jsonplaceholder.typicode.com/users";

async function userDetails() {
  let data = await fetch(api);
  let result = await data.json();
  /* console.log(result); */

  for (var i = 0; i < result.length; i++) {
    row.innerHTML += `
    <div class="col-md-3">
    <div class="card border-primary mb-3" style="max-width: 18rem; height: 220px;">
    <div class="card-body">
    <strong><p>Name: ${result[i].name}</p></strong>
      <p>Email: ${result[i].email}</p>
      <p>Street: ${result[i].address.street}</p>
      <p>City: ${result[i].address.city}</p>
    </div>
  </div>
  </div>`

  }
  document.body.append(container);
}
userDetails();