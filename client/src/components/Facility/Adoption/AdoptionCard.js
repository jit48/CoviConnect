import styles from './Adoption.module.scss';
import KidsAdoption from './KidsAdoption';
import PetsAdoption from './PetsAdoption';
import adoptionImg from '../../../Images/Adoption.png';

const AdoptionCard = () => {
    return (
        <section className={styles.adoption}>
            <h1>Give a Child a Family</h1>
            <p>
                Adoption is the social, emotional, and legal process in which children who will not be raised by their birth parents become
                full and permanent legal members of another family while maintaining genetic and psychological connections to their birth
                family. Adoption has many facets and touches people in different ways—depending on their role and perspective.
            </p>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div>
                        <span>
                            The circumstances surrounding your birth are not as important as the opportunity to live. Every child deserves a
                            home and love. Period. Adopt a child and make your and their life happy.
                        </span>
                        <br />
                        <br />
                        <KidsAdoption />
                    </div>
                    <div>
                        <span>
                            Until one has loved an animal, the part of one's soul remains unawakened. Their lives matter. Rescue animals.
                            Adopt Animals.
                        </span>
                        <br />
                        <br />
                        <PetsAdoption />
                    </div>
                </div>
                <img src={adoptionImg} alt='adoption' />
            </div>
        </section>
    );
};

export default AdoptionCard;
