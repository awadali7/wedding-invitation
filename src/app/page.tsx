import ButterflyAnimation from "../components/ButterflyAnimation";
import contentData from "../../content.json";

const { weddingDetails } = contentData;
const {
    coupleInformation,
    venue,
    eventDetails,
    weddingParty,
    culturalContext,
} = weddingDetails;
import ButterflyAnimation from "../components/ButterflyAnimation";

export default function Home() {
    return (
        <div className="min-h-screen bg-background-gradient relative">
            {/* Butterfly Animation */}
            <ButterflyAnimation />


            {/* Header */}
            <header className="bg-primary-gradient text-white py-12 px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-elegant text-4xl md:text-6xl font-bold mb-4">
                        Wedding Invitation
                    </h1>
                    <div className="font-script text-3xl md:text-5xl text-gold mb-4">
                        {coupleInformation.groom.fullName}
                    </div>
                    <div className="font-elegant text-2xl md:text-3xl mb-2">
                        &
                    </div>
                    <div className="font-script text-3xl md:text-5xl text-gold mb-4">
                        {coupleInformation.bride.fullName}
                    </div>
                    <p className="font-accent text-xl opacity-90">
                        Request the pleasure of your company at their wedding
                        ceremony
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-12 relative z-20">
                {/* Couple Information */}
                <section className="mb-16">
                    <h2 className="font-elegant text-3xl text-burgundy mb-8 text-center">
                        The Couple
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Groom */}
                        <div className="card-elegant p-8 text-center">
                            <h3 className="font-elegant text-2xl text-burgundy mb-4">
                                The Groom
                            </h3>
                            <div className="font-script text-3xl text-gold mb-2">
                                {coupleInformation.groom.fullName}
                            </div>
                            {coupleInformation.groom.qualification && (
                                <p className="font-accent text-lg text-burgundy mb-2">
                                    {coupleInformation.groom.qualification}
                                    {coupleInformation.groom.profession &&
                                        `, ${coupleInformation.groom.profession}`}
                                </p>
                            )}
                            <div className="text-left">
                                <p className="font-body text-dark-brown">
                                    <span className="font-accent text-burgundy">
                                        Son of:
                                    </span>{" "}
                                    {coupleInformation.groom.father.name} &{" "}
                                    {coupleInformation.groom.mother.name}
                                </p>
                                <p className="font-body text-dark-brown mt-2">
                                    <span className="font-accent text-burgundy">
                                        Address:
                                    </span>
                                    <br />
                                    {
                                        coupleInformation.groom.address
                                            .fullAddress
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Bride */}
                        <div className="card-elegant p-8 text-center">
                            <h3 className="font-elegant text-2xl text-burgundy mb-4">
                                The Bride
                            </h3>
                            <div className="font-script text-3xl text-gold mb-2">
                                {coupleInformation.bride.fullName}
                            </div>
                            {coupleInformation.bride.qualification && (
                                <p className="font-accent text-lg text-burgundy mb-2">
                                    {coupleInformation.bride.qualification}
                                    {coupleInformation.bride.profession &&
                                        `, ${coupleInformation.bride.profession}`}
                                </p>
                            )}
                            <div className="text-left">
                                <p className="font-body text-dark-brown">
                                    <span className="font-accent text-burgundy">
                                        Daughter of:
                                    </span>{" "}
                                    {coupleInformation.bride.father.name} &{" "}
                                    {coupleInformation.bride.mother.name}
                                </p>
                                <p className="font-body text-dark-brown mt-2">
                                    <span className="font-accent text-burgundy">
                                        Address:
                                    </span>
                                    <br />
                                    {
                                        coupleInformation.bride.address
                                            .fullAddress
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wedding Details */}
                <section className="mb-16">
                    <h2 className="font-elegant text-3xl text-burgundy mb-8 text-center">
                        Wedding Details
                    </h2>

                    <div className="card-elegant p-8 text-center">
                        <div className="font-script text-4xl text-gold mb-4">
                            {eventDetails.ceremonies[0].name}
                        </div>
                        <div className="font-accent text-2xl text-burgundy mb-2">
                            Date: {eventDetails.ceremonies[0].date}
                        </div>
                        <div className="font-accent text-2xl text-burgundy mb-2">
                            Time: {eventDetails.ceremonies[0].time}
                        </div>
                        {culturalContext.islamicDate && (
                            <div className="font-accent text-lg text-burgundy mb-6 opacity-80">
                                {culturalContext.islamicDate}
                            </div>
                        )}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Friday Event */}
                        <div className="card-elegant p-8 text-center">
                            <div className="font-script text-4xl text-gold mb-4">
                                Friday Program
                            </div>
                            <div className="font-accent text-2xl text-burgundy mb-2">
                                Date: 19th September 2025
                            </div>
                            <div className="font-accent text-2xl text-burgundy mb-6">
                                Time: 7:00 PM to 10:00 PM
                            </div>

                            <div className="bg-accent-gradient text-white p-6 rounded-lg">
                                <h3 className="font-elegant text-2xl mb-2">
                                    Venue
                                </h3>
                                <div className="font-accent text-xl mb-2">
                                    Blue Waters Event Hub
                                </div>
                                <p className="font-body">Cochin, Kerala</p>
                            </div>
                        </div>

                        {/* Sunday Event */}
                        <div className="card-elegant p-8 text-center">
                            <div className="font-script text-4xl text-gold mb-4">
                                Sunday Ceremony
                            </div>
                            <div className="font-accent text-2xl text-burgundy mb-2">
                                Date: 21st September 2025
                            </div>
                            <div className="font-accent text-2xl text-burgundy mb-6">
                                Time: 11:30 AM
                            </div>

                        <div className="bg-primary-gradient text-white p-6 rounded-lg mb-6">
                            <h3 className="font-elegant text-2xl mb-2">
                                Venue
                            </h3>
                            <div className="font-accent text-xl mb-2">
                                {venue.shortName}
                            </div>
                            <p className="font-body">
                                {venue.address.fullAddress}
                            </p>
                            <div className="bg-primary-gradient text-white p-6 rounded-lg">
                                <h3 className="font-elegant text-2xl mb-2">
                                    Venue
                                </h3>
                                <div className="font-accent text-xl mb-2">
                                    Mela Auditorium, Muvattupuzha
                                </div>
                                <p className="font-body">
                                    Velloorkunnam, Market P. O.,
                                    <br />
                                    Mela Auditorium, Muvattupuzha, Kerala 686673
                                </p>
                            </div>
                        </div>

                        {eventDetails.ceremonies.length > 1 && (
                            <div className="bg-accent-gradient text-white p-6 rounded-lg">
                                <div className="font-script text-2xl mb-2">
                                    {eventDetails.ceremonies[1].name}
                                </div>
                                <div className="font-accent">
                                    {eventDetails.ceremonies[1].time}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Venue Maps */}
                <section className="mb-16">
                    <h2 className="font-elegant text-3xl text-burgundy mb-8 text-center">
                        Venue Locations
                    </h2>

                    <div className="card-elegant p-8 text-center">
                        {venue.mapEmbed ? (
                            <>
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <iframe
                                        src={venue.mapEmbed}
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={venue.name}
                                    ></iframe>
                                </div>
                                <div className="text-center mt-4">
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(
                                            venue.address.fullAddress
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-body hover:bg-rose-gold transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </>
                        ) : (
                            <div className="p-8">
                                <div className="font-script text-3xl text-gold mb-4">
                                    {venue.name}
                                </div>
                                <p className="font-body text-dark-brown mb-4">
                                    {venue.address.fullAddress}
                                </p>
                                <div className="font-accent text-xl text-burgundy">
                                    {venue.directionsUrl}
                                </div>
                            </div>
                        )}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Friday Venue Map */}
                        <div className="card-elegant p-8">
                            <h3 className="font-elegant text-2xl text-burgundy mb-4 text-center">
                                Friday Program Venue
                            </h3>
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.241703632495!2d76.2618202!3d10.1609982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b5454602113%3A0x7b866a02aab59ccd!2sBlue%20Waters%20Event%20Hub!5e0!3m2!1sen!2sin!4v1760435205049!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Blue Waters Event Hub"
                                ></iframe>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href="https://maps.google.com/?q=Blue+Waters+Event+Hub+Cochin+Kerala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-body hover:bg-rose-gold transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Sunday Venue Map */}
                        <div className="card-elegant p-8">
                            <h3 className="font-elegant text-2xl text-burgundy mb-4 text-center">
                                Sunday Ceremony Venue
                            </h3>
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.4929455917995!2d76.577944!3d9.989592599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e763e0fdd2d7%3A0x362ac96a515d7d86!2sMela%20Auditorium%2C%20Muvattupuzha!5e1!3m2!1sen!2sin!4v1754724325873!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mela Auditorium, Muvattupuzha"
                                ></iframe>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href="https://maps.google.com/?q=Mela+Auditorium+Muvattupuzha+Velloorkunnam+Market+PO+Kerala+686673"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-body hover:bg-rose-gold transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wedding Party */}
                {weddingParty.bestComplements &&
                    weddingParty.bestComplements.length > 0 && (
                        <section className="mb-16">
                            <h2 className="font-elegant text-3xl text-burgundy mb-8 text-center">
                                Wedding Party
                            </h2>

                            <div className="card-elegant p-8">
                                {weddingParty.bestComplements.map(
                                    (complement, index) => (
                                        <div
                                            key={index}
                                            className="text-center mb-6 last:mb-0"
                                        >
                                            <div className="bg-accent-gradient text-white p-6 rounded-lg">
                                                <div className="font-accent text-lg mb-2">
                                                    {complement.role}
                                                </div>
                                                <div className="font-script text-2xl">
                                                    {complement.name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>
                    )}

                {/* Cultural Context */}
                <section className="mb-16">
                    <h2 className="font-elegant text-3xl text-burgundy mb-8 text-center">
                        Cultural Traditions
                    </h2>

                    <div className="card-elegant p-8">
                        <div className="grid md:grid-cols-2 gap-6 text-center">
                            <div>
                                <h3 className="font-elegant text-xl text-burgundy mb-2">
                                    Region
                                </h3>
                                <p className="font-body text-dark-brown">
                                    {culturalContext.region}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-elegant text-xl text-burgundy mb-2">
                                    Traditions
                                </h3>
                                <ul className="font-body text-dark-brown space-y-1">
                                    {culturalContext.traditions.map(
                                        (tradition, index) => (
                                            <li key={index}>{tradition}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-primary-gradient text-white py-8 px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-accent text-lg">
                        {coupleInformation.groom.fullName} &{" "}
                        {coupleInformation.bride.fullName}
                    </p>
                    <p className="font-body text-sm opacity-80 mt-2">
                        Wedding Invitation • {venue.address.fullAddress}
                    </p>
                </div>
            </footer>
        </div>
    );
}
