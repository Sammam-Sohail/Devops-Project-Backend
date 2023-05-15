const axios = require("axios");

const api = "https://devopsprojectbackend.azurewebsites.net/login/";
async function validateLogin(username, password) {
  return axios
    .post(
      api + username,
      { password: password },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
    .then((res) => {
      return res.status;
    })
    .catch((e) => {
      return e.response.status;
    });
}

test("Validating For Correct Credentials for login", async () => {
  const responseStatus = await validateLogin("sammamsohail", "sammam12345");
  expect(responseStatus).toBe(200);
});

test("Validating For Invalid Username for login", async () => {
  const responseStatus = await validateLogin("mohibrehma", "mohib12345");
  expect(responseStatus).toBe(404);
});

test("Validating For Invalid Password Credentials for login", async () => {
  const responseStatus = await validateLogin("sammamsohail", "sammam1234");
  expect(responseStatus).toBe(400);
});
