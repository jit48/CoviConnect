import axios from "axios";

const KEY = "SMjbNpmj2gJDAPROgHAf15SyA0fbBeVT";
export const geoAddress = async (address) => {
  const response = await axios.get(
    `https://atlas.mapmyindia.com/api/places/geocode?access_token=bc9d8e55-f645-4bc1-8f46-5ce098b8d045&address= 576, Anandapur, Eastern Metropolitan Bypass, Golpark, Kasba, Kolkata, West Bengal 700107&bias=0&itemCount=5`
  );
  console.log(response.data);
};


