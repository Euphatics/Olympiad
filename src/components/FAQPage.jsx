import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

export default function FAQPage({ onSelect }) {
    return (
        <>
            <Navbar onSelect={onSelect} />
            <div className="pt-16">
                <FAQ />
            </div>
        </>
    );
}
