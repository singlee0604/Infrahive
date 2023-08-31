import FormatColorTextRounded from '@mui/icons-material/FormatColorTextRounded';
import Image from 'next/image';

const FooterLinks = [
  { name: '', path: '#' },
  { name: '', path: '#' },
  { name: '', path: '#' },
  { name: 'Contact Now', path: '/contact' }
];

const SocialMedia = [
  { path: '/footer/Twitter.svg', alt: 'Twitter', link: 'https://twitter.com/infrahive' },
  { path: '/footer/linkedin.svg', alt: 'LinkedIn', link: 'https://linkedin.com/company/infrahive' }
];

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-wrap items-center justify-between px-12 py-4">
        <div className="mb-4 w-full text-center md:mb-0 md:w-1/2 md:text-left lg:w-1/3">
          <Image width={255} height={80} src="/footer/InfraHiveLogo.svg" alt="InfraHiveLogo" />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-4 md:w-1/2 md:justify-end md:gap-8 lg:w-2/3 lg:gap-12 xl:gap-16">
          {FooterLinks.map((item) => (
            <a key={item.name} href={item.path} className="font-medium text-white">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="mx-auto my-4 w-full border-t" />
      <div className="mx-auto flex w-full flex-wrap items-center justify-between px-12 py-4">
        <div className="mb-4 w-full text-white text-center md:mb-0 md:w-1/2 md:pl-10 md:text-left lg:w-1/3 lg:pl-10">
          <span>Aivinya Inc. © {new Date().getFullYear()}</span>
        </div>
        <div className="flex w-full text-white flex-wrap justify-center gap-4 md:w-1/2 md:justify-end md:gap-8 lg:w-2/3 lg:gap-12 xl:gap-16">
          {SocialMedia.map((item) => (
            <a href={item.link} className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
              <Image className="text-white" key={item.alt} width={24} height={24} src={item.path} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
