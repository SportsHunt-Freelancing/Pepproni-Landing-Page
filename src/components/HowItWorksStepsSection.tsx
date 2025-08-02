import phone1 from '../assets/images/phone1-790eb7.png';
import phone2 from '../assets/images/phone2-790eb7.png';
import phone3 from '../assets/images/phone3-660302.png';
import phone4 from '../assets/images/phone4-660302.png';
import phone5 from '../assets/images/phone5-660302.png';
import phone6 from '../assets/images/phone6-600f1d.png';
import phone7 from '../assets/images/phone7-600f1d.png';
import phonesDiagonal from '../assets/images/phones-diagonal.png';

const steps = [
{
    number: "1",
    title: "Choose Property",
    description: "Explore trusted properties, fully verified and paperwork-ready. Invest in minutes, earn for a lifetime."
},
{
    number: "2",
    title: "Invest",
    description: "Invest as little or as much as you like. Quick. Simple. Just a few taps."
},
{
    number: "3",
    title: "Earn Rent",
    description: "You earn rent every month and your investment grows over time. Everything lands straight in your wallet."
},
{
    number: "4",
    title: "Track Returns",
    description: "See exactly how your money's growing, anytime you want in your portfolio"
},
{
    number: "5",
    title: "Easy Exit",
    description: "Get liquidity twice a year through our bi-annual resale windows."
}
];

const HowItWorksStepsSection = () => {
return (
    <>

    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center mb-12">
            <h1 className="text-4xl font-bold text-[#4E4E4E] mb-2 font-satoshi">
                India’s <span className="italic font-semibold">first</span> real estate platform
            </h1>
            <p className="text-lg text-[#4E4E4E] font-satoshi">
                that starts at <span className="font-bold italic">~₹1500!</span>
            </p>
        </div>
        <br />
        <br />
        <br />
        {/* Main Content */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            {/* Left: Single Phone Image */}
            <div className="relative h-96 w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center mt-96 hidden lg:flex">
                {/* Hide image on screens smaller than lg (1024px) */}
                <img 
                    src={phonesDiagonal} 
                    alt="Phones Diagonal" 
                    className="scale-[1] w-auto object-left object-contain" 
                    style={{ maxWidth: 'none', left: 0, margin: 0, padding: 0, border: 'none' }} 
                />
            </div>

            {/* Right: Steps */}
            <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16 flex flex-col items-start">
                <div className="mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-satoshi font-medium text-[#4D4D4D] mb-4 lg:mb-6">
                        How it Works
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#4E4E4E] leading-relaxed">
                        5 easy steps to invest and kickstart your journey to building wealth
                    </p>
                </div>
                
                <div className="space-y-12 lg:space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6 lg:gap-8">
                            <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#D9D9D9] border-2 border-[#D8D8D8] rounded-full flex items-center justify-center">
                                <span className="text-[#2CBCC4] font-linear-grotesk font-bold text-lg sm:text-xl">
                                    {step.number}
                                </span>
                            </div>
                            <div className="flex-1 pt-2 sm:pt-3">
                                <h3 className="text-xl sm:text-2xl font-satoshi text-[#4D4D4D] mb-3 lg:mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-sm sm:text-base font-satoshi text-[#858585] leading-relaxed max-w-md lg:max-w-lg">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
);
};

export default HowItWorksStepsSection;