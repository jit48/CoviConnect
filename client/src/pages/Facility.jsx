import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Switch from '@material-ui/core/Switch';
import api from '../axios';
import axios from 'axios';
import '../styles/Facility.scss';

import SideNav from './UI/SideNav';
import BedCard from '../components/Facility/Bed/BedCard';
import OxygenCard from '../components/Facility/OxygenCard';
import BloodBankCard from '../components/Facility/BloodBankCard';
import DiagnosticCard from '../components/Facility/DiagnosticCard';
import MealsCard from '../components/Facility/MealsCard';
import PharmacyCard from '../components/Facility/PharmacyCard';
import AmbulanceCard from '../components/Facility/Ambulance/AmbulanceCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Donate from '../components/Facility/Donate/Donate';

function Facility() {
    const { type } = useParams();
    const [checked, isChecked] = useState(false);
    const [facility, setfacility] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [userLocation, setUserLocation] = useState({ address: { city: '' } });

    function compare(a, b) {
        if (a.votes > b.votes) {
            return -1;
        }
        if (a.votes < b.votes) {
            return 1;
        }
        return 0;
    }
    const getFacility = async () => {
        setLoading(false);
        const facility = await api.get(`/facility/${type}`).then((res) => res.data);
        setLoading(true);
        facility.sort(compare);
        setfacility(facility);
    };
    const getLocation = () => {
        return window.navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position);
            console.log('hi');
            setLoading(false);
            const re = await axios
                .get(
                    `https://us1.locationiq.com/v1/reverse.php?key=pk.6c3dbb323e37a1f86081c3d059dcbdc7&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                )
                .then((res) => res.data);
            setUserLocation(re);
            setLoading(true);
            console.log(re);
        });
    };
    useEffect(() => {
        getLocation();
    }, [checked]);
    useEffect(() => {
        getFacility();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var arr = [];
    facility.forEach((item) => {
        if (item.info.city === userLocation.address.city.toLowerCase()) arr.push(item);
    });
    console.log(arr);
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const matches = facility.filter((d) => {
        const string = input.toString().replace(/\\/g, '\\\\');
        const regex = new RegExp(`^${string}`, 'gi');
        const reg = new RegExp(`${string}`, 'gi');
        return d.info.serviceProvider.match(regex) || d.info.location.match(reg);
    });
    const handleClick = () => {
        isChecked(!checked);

        setLoading(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='facilitySearch-page'>
            <div className='facility-sideNav'>
                <SideNav />
            </div>
            <div className='facility'>
                <div className='searchBar'>
                    <input type='text' placeholder={`Search for ${type} Facilities Arround You`} onChange={handleChange} />
                    <button type='submit' onSubmit={handleSubmit}>
                        Search
                    </button>
                </div>
                <div className='switch'>
                    <p>
                        <b>
                            <span className='numberFont'>{`${checked ? arr.length : matches.length} `}</span> Results Found
                        </b>
                    </p>
                    <div className='displayFlex'>
                        <p>{`${checked ? 'Disable' : 'Enable'} Location Filter`}</p>
                        <Switch
                            checked={checked}
                            onChange={handleClick}
                            name='checkedA'
                            color='primary'
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </div>
                </div>
                {checked ? (
                    loading ? (
                        matches.map((item) => {
                            if (item.type === 'bed' && item.info.city === userLocation.address.city.toLowerCase())
                                return <BedCard key={item._id} facility={item} />;
                            if (item.type === 'oxygen' && item.info.city === userLocation.address.city.toLowerCase())
                                return <OxygenCard key={item._id} facility={item} />;
                            if (item.type === 'bloodbank' && item.info.city === userLocation.address.city.toLowerCase())
                                return <BloodBankCard key={item._id} facility={item} />;
                            if (item.type === 'diagnosticcenter' && item.info.city === userLocation.address.city.toLowerCase())
                                return <DiagnosticCard key={item._id} facility={item} />;
                            if (item.type === 'meals' && item.info.city === userLocation.address.city.toLowerCase())
                                return <MealsCard key={item._id} facility={item} />;
                            if (item.type === 'pharmacies' && item.info.city === userLocation.address.city.toLowerCase())
                                return <PharmacyCard key={item._id} facility={item} />;
                            if (item.type === 'ambulance' && item.info.city === userLocation.address.city.toLowerCase())
                                return <AmbulanceCard key={item._id} facility={item} />;
                            else return null;
                        })
                    ) : (
                        <div className='spinner'>
                            <CircularProgress color='inherit' />
                        </div>
                    )
                ) : loading ? (
                    matches.map((item) => {
                        if (item.type === 'bed') return <BedCard key={item._id} facility={item} />;
                        if (item.type === 'oxygen') return <OxygenCard key={item._id} facility={item} />;
                        if (item.type === 'bloodbank') return <BloodBankCard key={item._id} facility={item} />;
                        if (item.type === 'diagnosticcenter') return <DiagnosticCard key={item._id} facility={item} />;
                        if (item.type === 'meals') return <MealsCard key={item._id} facility={item} />;
                        if (item.type === 'pharmacies') return <PharmacyCard key={item._id} facility={item} />;
                        if (item.type === 'ambulance') return <AmbulanceCard key={item._id} facility={item} />;
                        if (item.type === 'donate') return <Donate key={item._id} facility={item} />;
                        else return null;
                    })
                ) : (
                    <div className='spinner'>
                        <CircularProgress color='inherit' />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Facility;
