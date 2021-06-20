
import Beds from "../Images/Beds.png"
import Oxygen from "../Images/Oxygen.png"
import Ambulance from "../Images/Ambulance.png"
import BloodBank from "../Images/BloodBank.png"
import Meals from "../Images/Meals.png"
import Diagnostic from "../Images/Diagnostic.png"
import Pharmacy from "../Images/Pharmacy.png"

const facilities = [
    {
        img:Beds,
        type:"Beds",
        link:"bed",
        discription:"Discover Bed Vacancies for Patients in nursing Homes and Hospitals."
    },
    {
        img:Oxygen,
        type:"Oxygen",
        link:"oxygen",
        discription:"Discover Hospitals and  other Sources to get an Oxygen Concentrator."
    },
    {
        img:Ambulance,
        type:"Ambulance Services",
        link:"ambulance",
        discription:"Get in Touch with Ambulance Service Providers.",

    },
    {
        img:Pharmacy,
        type:"Pharmacies",
        link:"pharmacy",
        discription:"Get in Touch with Pharmacies Having Stock of Essential Drugs.",

    },
    {
        img:Meals,
        type:"Meals",
        link:"meals",
        discription:"Get in Touch with NGOs Providing Meals.",

    },
    {
        img:BloodBank,
        type:"Blood Banks",
        link:"bloodBank",
        discription:"Reach Out to Blood Banks.",

    },
    {
        img:Diagnostic,
        type:"Diagnostic Centers",
        link:"diagnostic",
        discription:"Know Where to get Tested.",

    },
]

export default facilities;