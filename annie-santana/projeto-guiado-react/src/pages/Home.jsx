import React from 'react'
import home from '../assets/home.svg'
import Header from '../components/Header'
import { At, GraduationCap, Sparkle } from 'phosphor-react'
import styles from '../styles/pages/home.module.css'


const Home = () => {
  return (
    <>
      <Header title="Meu perfil" image={home} />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Sparkle size={150} color='black' weight='thin' />
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={styles.cardContainer}>
          <GraduationCap size={150} color='black' weight='thin' />
          <h2 className={styles.cardTitle}>Formação</h2>
          <p className={styles.cardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className={styles.cardContainer}>
          <At size={150} color='black' weight='thin' />
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>

      </div>

    </>

  )
}

export default Home