
export const createLeader = (leader) => {
  return fetch(`http://localhost:5000/api/partyleader`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: leader
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}