import React from 'react';
import './clients.css';
import image1 from '../../assests/hospital2.jpg';
import image2 from '../../assests/hospital3.jpeg';
import indraprastha from '../../assests/indraprastha.jpg';
import sawalman from '../../assests/sawanman.jpeg';
import aiims from '../../assests/aiims.jpeg';
import gandhi from '../../assests/gandhi.jpeg';

const hospitalData = [
    { id: 1, name: "KYC HOSPITAL", imageUrl: image1 },
    { id: 2, name: "APOLLO", imageUrl: image2 },
    { id: 3, name: "INDRAPRASTHA", imageUrl: indraprastha },
    { id: 4, name: "SAWALMAN", imageUrl: sawalman },
    { id: 5, name: "AIIMS", imageUrl: aiims },
    { id: 6, name: "GANDHI", imageUrl: gandhi }
];

function ImageHover() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    return (
        <section className='Clients'>
            <div className='client-page'>
                <div className="client-card">
                    <div className="client-title">Hospitals and Healthcare Facilities</div>
                    <div className="client-description">
                        Hospitals are the primary clients of a Blood Bank Management System. They rely on the system to efficiently manage their blood inventory, request blood products when needed, and ensure the availability of blood for transfusions during surgeries, emergencies, and other medical procedures.
                    </div>
                </div>
                <div className="image-container">
                    {hospitalData.map((hospital) => (
                        <div
                            key={hospital.id}
                            className="image-item"
                            onMouseEnter={() => setHoveredIndex(hospital.id)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={hospital.imageUrl}
                                alt={`Hospital ${hospital.id}`}
                            />
                            {hoveredIndex === hospital.id && (
                                <div className="image-text">
                                    {hospital.name}
                                </div>
                            )}
                            <div className="image-name">
                                {hospital.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImageHover;
