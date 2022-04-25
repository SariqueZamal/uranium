let axios = require("axios");

let vaccinationSessionsFindByDistrict = async function (req, res) {
  try {
    let id = req.query.district_id;
    let date = req.query.date;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

let SortedCities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let objArray = [];
    for (let i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=4c4abfe77d34680551e81659599b7ffe`
      );

      obj.temp = result.data.main.temp;
      objArray.push(obj);
    }

    let sorted = objArray.sort((a, b) => a.temp - b.temp);
    res.status(200).send({ data: sorted, status: true });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

let memesCreation = async function (req, res) {
  try {
    let memeId = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let userName = req.query.username;
    let password = req.query.password;

    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
    
    };

    let result = await axios(options);
    let data = result.data;

    res.status(200).send({ data: data, status: true });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.vaccinationSessionsFindByDistrict = vaccinationSessionsFindByDistrict;
module.exports.SortedCities = SortedCities;
module.exports.memesCreation = memesCreation;
