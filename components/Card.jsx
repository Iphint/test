import Image from 'next/image';
import styles from '../styles/Card.module.css';
const data = [
  {
    id: 1,
    name: 'RESPECT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    backgroundColor: '#ea7c6f',
    gambar : "/img/lightbulb-o.png",
    width: 25,
    height: 25,
  },
  {
    id: 2,
    name: 'LOYALITY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    backgroundColor: '#6a996f',
    gambar : "/img/bank.png",
    width: 25,
    height: 25,
  },
  {
    id: 3,
    name: 'INNOVATIVE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    gambar : "/img/balance-scale.png",
    backgroundColor: '#5696c2',
    width: 25,
    height: 25,
  },
];

const Card = () => {
  return (
    <>
      {data.map((index) => (
        <div
          className={styles.container}
          key={index.id}
          style={{ backgroundColor: index.backgroundColor }}
        >
          <Image src={index.gambar} alt="" width={index.width} height={index.height} />
          <h1 className={styles.title}>{index.name}</h1>
          <p className={styles.desc}>{index.description}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
