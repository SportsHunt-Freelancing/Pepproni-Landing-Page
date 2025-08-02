import logoImg from '../assets/images/logo-6bd046.png';
import logoTextImg from '../assets/images/logo-text-694e40.png';
import social1 from '../assets/images/footer-social-1.svg';
import social2 from '../assets/images/footer-social-2.svg';
import social3 from '../assets/images/footer-social-3.svg';
import social4 from '../assets/images/footer-social-4.svg';
import social5 from '../assets/images/footer-social-5.svg';
import social6 from '../assets/images/footer-social-6.svg';
import social7 from '../assets/images/footer-social-7.svg';
import social8 from '../assets/images/footer-social-8.svg';

const Footer = () => {
  // Image imports

  return (
    <footer className="w-full px-4 md:px-10 py-8 flex flex-col items-center" style={{ backgroundColor: '#2CBCC4', boxShadow: '0px 1px 0px #F0F0F0' }}>
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-[41px] min-h-[400px] md:min-h-[320px]">
        {/* Left Card Section - Hugged to left with minimal margin */}
        <div className="flex flex-col justify-center bg-white rounded-2xl px-6 md:px-14 py-8 md:py-12 mb-6 md:mb-0" style={{ minWidth: 320, maxWidth: 549, flex: '0 0 auto', marginLeft: 'clamp(0px, 2.5vw, 36px)' }}>
          <div className="flex flex-row items-center gap-2 mb-4">
            <img src={logoImg} alt="Pepproni Logo" className="w-[24px] h-[24px] rounded" />
            <span className="font-satoshi text-[18px] font-medium text-[#2CBCC4] tracking-wide">PEPPRONI</span>
          </div>
          <h3 className="font-satoshi text-[2rem] md:text-[32px] text-[#4E4E4E] mb-2 font-normal leading-[1.35]">Ready to start <span className="font-bold">building wealth?</span></h3>
          <p className="font-satoshi text-[1rem] md:text-[16px] text-[#838383] mb-6 font-medium leading-[1.35]">Gain access to early bird perks & more!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3OzUaXvim5ZumXtWlcLbxA4hy5TQbYoFJJwHgOQNjgM3pkg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#2CBCC4] hover:bg-[#2CBCC4]/90 text-white rounded-xl font-satoshi font-medium text-[1.25rem] md:text-[20px] leading-[1.35] transition-colors duration-200 px-8 py-4 w-full md:w-[232px]" style={{ height: 56 }}>
            Join the Waitlist
          </a>
        </div>
        
        {/* Right Section: Full height with top/bottom alignment - Hugged to right */}
        <div className="flex flex-col justify-between flex-1 h-full" style={{ marginRight: 'clamp(0px, .5vw, 6px)' }}>
          {/* Top Row: 3 columns - Hugged to top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Important Links */}
            <div className="flex flex-col">
              <span className="font-satoshi text-white text-[1rem] md:text-[14px] mb-2 font-normal leading-[1.35]">Important Links</span>
              <a href="/terms" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] mb-1 hover:underline">Terms and Conditions</a>
              <a href="#" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] hover:underline">Privacy Policy</a>
            </div>
            {/* About */}
            <div className="flex flex-col">
              <span className="font-satoshi text-white text-[1rem] md:text-[14px] mb-2 font-normal leading-[1.35]">About</span>
              <a href="/about" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] mb-1 hover:underline">About Us</a>
              <a href="#" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] hover:underline">Our Mission</a>
              <a href="#" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] hover:underline">How it Works</a>
            </div>
            {/* Contact Us */}
            <div className="flex flex-col">
              <span className="font-satoshi text-white text-[1rem] md:text-[14px] mb-2 font-normal leading-[1.35]">Contact Us</span>
              <a href="mailto:muhammadmalik0690@gmail.com" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] mb-1 hover:underline">muhammadmalik0690@gmail.com</a>
              <a href="mailto:aimaank04@gmail.com" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] mb-1 hover:underline">aimaank04@gmail.com</a>
              <a href="tel:+919980745912" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] mb-1 hover:underline">+91 9980745912</a>
              <a href="tel:+919901809614" className="font-satoshi text-white text-[1.1rem] md:text-[15px] font-medium leading-[1.35] hover:underline">+91 9901809614</a>
            </div>
          </div>
          
          {/* Bottom Row: Social Icons and Copyright */}
          <div className="flex flex-col gap-4 items-end mt-24 justify-end">
            <div className="flex flex-row gap-4">
              <a href="#" className="hover:opacity-80"><img src={social1} alt="LinkedIn" className="w-8 h-8" /></a>
              <a href="#" className="hover:opacity-80"><img src={social2} alt="Instagram" className="w-8 h-8" /></a>
              <a href="#" className="hover:opacity-80"><img src={social3} alt="X" className="w-8 h-8" /></a>
              <a href="#" className="hover:opacity-80"><img src={social4} alt="Facebook" className="w-8 h-8" /></a>
            </div>
            <span className="font-satoshi text-white text-[1rem] md:text-[16px] font-normal leading-[1.5]">©2025 Pepproni™, All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
