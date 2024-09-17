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
import OurClients from './OurClients';
import Responsive1 from '../components/AboutSlider';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
          <div className="">
            <div className="p-8 mx-auto " data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Swaraj Engineering</h1>
            <p className="text-lg mb-4">
               At Swaraj Engineering, we are dedicated to transforming your vision into reality through our expertise in customized Engineering fabrication product with years of experience in the industry, we pride ourselves on Delivering high-quality product with the requirements of our clients
            </p>
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Who We Are ?</h1>
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
            <div className="p-8 mx-auto " data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Our Services</h1>

{/* Custom Fabrication Section */}
<h2 id="custom-fabrication" className='font-semibold'>Custom Fabrication:</h2>
<p className="text-lg mb-4">
  We specialize in crafting customized Fabrication products, ensuring that each product is designed and manufactured as per Quality Assurance Plan. From concept to completion, our team works closely with you to ensure that the final product meets your needs and exceeds your expectations.
</p>

{/* Industrial Solutions Section */}
<h2 id="industrial-solutions" className='font-semibold'>Industrial Solutions:</h2>
<p className="text-lg mb-4">
  Our industrial fabrication services cater to a wide range of industries. We provide durable and reliable components that are built to withstand the demands of your operations. Our experience in working with various sectors ensures that we understand your unique requirements.
</p>
            </div>
          <div className="p-8 mx-auto " data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Why Choose Us?</h1>
                <h2 className='font-semibold'>Quality Craftsmanship:</h2>
                <p className="text-lg mb-4">
                We are committed to delivering products that are not only functional but also of the highest quality. Our attention to detail ensures that every piece we produce meets the highest standards. We are having in house Machining facility for critical machining component. We are having sophisticated & precise measuring instrument to deliver highly precise component to our customer.
                </p>
                <h2 className='font-semibold'>Customer-Centric Approach:</h2>
                <p className="text-lg mb-4">
                Your satisfaction is our top priority. We work closely with you throughout the entire process, from initial consultation to final delivery, ensuring that your experience with us is seamless and stress-free.
                </p>
            </div>
            {/* <ListOfMachinery /> */}
            <QualityPolicy />
            {/* <MachineSpecifications /> */}
            <WorkingExperience />
            <MachinerySpecification />
            <MachinerySpecificationM1TR />
            <MeasuringInstruments />
            <OurClients/>
            <h1 className="text-3xl font-bold mb-8 mt-8 text-center text-blue-600">Meet Our Team</h1>
            {/* <div className="slide">
            <img
                src={slid1}
                alt="Team Image"
                className="slide-image"
                style={{
                    height: '90vh', 
                    width: '95%',  // Added width to cover full width
                    objectFit: 'cover', 
                    marginTop: '1px',
                    borderRadius: '16px',
                    marginLeft:'30px'
                }}
            />
        </div> */}
        <Responsive1/>
        </div>
    );
};

export default AboutUs;