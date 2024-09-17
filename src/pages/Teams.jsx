import slid1 from '../assets/Team.jpg';

const Teams = () => {
    return (
        <div className="slide">
            <img
                src={slid1}
                alt="Team Image"
                className="slide-image"
                style={{
                    height: '90vh', 
                    width: '100%',  // Added width to cover full width
                    objectFit: 'cover', 
                    marginTop: '1px'
                }}
            />
        </div>
    );
}

export default Teams;
