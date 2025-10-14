import ButterflyAnimation from "../components/ButterflyAnimation";
import contentData from "../../content.json";

const { weddingDetails } = contentData;
const {
    coupleInformation,
    venue,
    fridayVenue,
    eventDetails,
    weddingParty,
    culturalContext,
} = weddingDetails;

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

                    <div className="space-y-8">
                        {eventDetails.ceremonies.map((ceremony, index) => {
                            const ceremonyVenue =
                                ceremony.venueType === "fridayVenue"
                                    ? fridayVenue
                                    : venue;
                            return (
                                <div
                                    key={index}
                                    className="card-elegant p-8 text-center"
                                >
                                    <div className="font-script text-4xl text-gold mb-4">
                                        {ceremony.name}
                                    </div>
                                    <div className="font-accent text-2xl text-burgundy mb-2">
                                        {ceremony.date}
                                    </div>
                                    <div className="font-accent text-2xl text-burgundy mb-2">
                                        {ceremony.time}
                                    </div>
                                    {index === 1 &&
                                        culturalContext.islamicDate && (
                                            <div className="font-accent text-lg text-burgundy mb-6 opacity-80">
                                                {culturalContext.islamicDate}
                                            </div>
                                        )}

                                    <div className="bg-primary-gradient text-white p-6 rounded-lg mt-6">
                                        <h3 className="font-elegant text-2xl mb-2">
                                            Venue
                                        </h3>
                                        <div className="font-accent text-xl mb-2">
                                            {ceremonyVenue.shortName}
                                        </div>
                                        <p className="font-body">
                                            {ceremonyVenue.address.fullAddress}
                                        </p>
                                    </div>

                                    {ceremonyVenue.mapEmbed &&
                                        ceremony.name !== "Lunch" && (
                                            <div className="mt-6">
                                                <div className="aspect-video rounded-lg overflow-hidden">
                                                    <iframe
                                                        src={
                                                            ceremonyVenue.mapEmbed
                                                        }
                                                        width="100%"
                                                        height="450"
                                                        style={{ border: 0 }}
                                                        allowFullScreen
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        title={
                                                            ceremonyVenue.name
                                                        }
                                                    ></iframe>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <a
                                                        href={`https://maps.google.com/?q=${encodeURIComponent(
                                                            ceremonyVenue
                                                                .address
                                                                .fullAddress
                                                        )}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-body hover:bg-rose-gold transition-colors"
                                                    >
                                                        Get Directions
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            );
                        })}
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
