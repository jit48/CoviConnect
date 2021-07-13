import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../axios';
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
    const [checked, ] = useState(false);
    const [facility, setfacility] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [userLocation,] = useState({ address: { city: '' } });

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

    useEffect(() => {
        getFacility();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const matches = facility.filter((d) => {
        const string = input.toString().replace(/\\/g, '\\\\');
        const regex = new RegExp(`^${string}`, 'gi');
        const reg = new RegExp(`${string}`, 'gi');
        return d.info.serviceProvider.match(regex) || d.info.city.match(reg);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='facilitySearch-page'>
            <div className='facility-sideNav'>
                <SideNav />
            </div>
            <div className='facility'>
                <br />
                <h2>{`Search for ${type.toUpperCase()}`}</h2>
                <div className='searchBar'>
                    <input type='text' placeholder={`Search for ${type} Facilities Arround You By city, Hopital Name`} onChange={handleChange} />
                    <button type='submit' onSubmit={handleSubmit}>
                        Search
                    </button>
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