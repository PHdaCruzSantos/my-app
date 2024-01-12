const url = "https://www.googleapis.com/mybusiness/v4/businesses/[ID]/reviews";
const headers = { Authorization: "Bearer [TOKEN]" };

export function getAssessments() {
  this.axios
    .get(url, { headers })
    .then((response) => {
      this.assessments = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
