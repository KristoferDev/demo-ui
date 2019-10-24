
export const createLeader = async (name) => {
  try {
    const response = await fetch(`http://localhost:5000/api/partyleader`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(name)
    });
    return response.json();
  }
  catch (err) {
    console.log(err);
  }
}
/*
export const getLeaders = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/partyleader`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    return response.json();
  }
  catch (err) {
    console.log(err);
  }
}
*/