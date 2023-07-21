import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>Copyright &copy; 2016. PT Company</p>
      </div>
      <div className={styles.sosmed}>
        <Image src="/img/twitter.png" alt="" width={25} height={25} />
        <Image src="/img/facebook-official.png" alt="" width={25} height={25} />
      </div>
    </div>
  );
};

export default Footer;
