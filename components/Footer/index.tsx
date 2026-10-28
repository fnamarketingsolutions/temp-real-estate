import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles['footer-section']}>
      <div className={styles['footer-section-content']}>
        <img src="/logo-white.png" alt="Estate Loop logo" width={120} height={60} />
        <p>Digital Infrastructure Powering Private Real Estate</p>
        <a href="mailto:hello@estateloop.com">hello@estateloop.com</a>
        <a href="tel:+16465550192">+1 (646) 555-0192</a>
        <p className={styles['contact-address']}>120 Broadway, Floor 18, New York, NY 10271</p>
        <div className={styles['button-container']}>
          <a
            href="https://www.linkedin.com/company/estate-loop"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['icon']}
            aria-label="Estate Loop on LinkedIn">
            <LinkedInIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
          <a
            href="https://x.com/estateloop"
            target="_blank"
            className={styles['icon']}
            rel="noopener noreferrer"
            aria-label="Estate Loop on X">
            <TwitterIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
        </div>
      </div>
      <div className={styles['footer-section-disclaimer']}>
        <p>
          Past performance in no guarantee of future results. Any historical returns, expected returns, or
          probability projections may not reflect actual future performance and are provided by the sponsor of
          the investment opportunity and subject to change. All securities involve risk and may result in
          partial or total loss. Neither Estate Loop nor any of its affiliates provide tax advice and
          do represent in any manner that the outcomes described herein will result in any particular tax
          treatment. Securities are offered through{' '}
          <a href="https://www.finalis.com/" target="_blank" rel="noopener noreferrer">
            Finalis Securities LLC
          </a>{' '}
          Member{' '}
          <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer">
            FINRA
          </a>
          /
          <a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer">
            SIPC
          </a>
          . Estate Loop and Finalis Securities LLC are separate, unaffiliated entities.
        </p>
      </div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Estate Loop</p>
        <Link href="/sponsor">Sponsors</Link>
        <Link href="/career">Careers</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy-and-cookies">Privacy and Cookies</Link>
        <Link href="/confidentiality-agreement">Confidentiality Agreement</Link>
      </footer>
    </section>
  );
};

export default Footer;
