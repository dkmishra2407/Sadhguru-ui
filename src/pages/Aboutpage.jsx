import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ListOfMachinery from '../components/ListOfMachinery';
import QualityPolicy from '../components/QounityPolicy';
import MachineSpecifications from '../components/MachineSpecifications';
import WorkingExperience from '../components/WorkingExperience';
import MachinerySpecification from '../components/MachinerySpecification';
import MachinerySpecificationM1TR from '../components/MachinerySpecificationM1TR';
import MeasuringInstruments from '../components/MeasuringInstruments';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="">
            <div className="p-8 mx-auto " data-aos="fade-up">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Who We Are</h1>
                <p className="text-lg mb-4">
                    Swaraj Engineering is situated in MIDC Bhosari PLOT NO-187, S BLOCK. Swaraj Engineering has been in the field of fabrication for the past 5 years. Our unit covers an area of 7000 Sq. Ft., featuring a covered shed and open space for material handling and storage, with a 7.5 ton EOT crane capacity.
                </p>
                <p className="text-lg mb-4">
                    We have a dedicated workforce of 15 employees. Our major business includes the fabrication of Pressure Vessels, Column Pipes, Distributor Casing, Discharge Elbow, Can, Barrel, High Pressure Gas Skid, Heat Exchangers, Pump Parts, and customized fabrication.
                </p>
                <p className="text-lg mb-4">
                    We cater to the needs of major sectors like Oil Refineries, Petroleum, and Petrochemical Industries. Swaraj Engineering has a documented quality management system that meets the requirements of ISO 9001-2015, ensuring that orders processed, products produced, and services rendered meet customer requirements.
                </p>
            </div>
            {/* <ListOfMachinery /> */}
            <QualityPolicy />
            {/* <MachineSpecifications /> */}
            <WorkingExperience />
            <MachinerySpecification />
            <MachinerySpecificationM1TR />
            <MeasuringInstruments />
        </div>
    );
};

export default AboutUs;