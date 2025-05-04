import styles from './banner.module.scss'
export default function Banner() {
    return (
     <section className={styles.Banner}>
      <div className={styles.Banner__wrapper}>
        <h1 className='text-3xl text-white'>Перевозка автомобилей с надежностью и комфортом</h1>
        <a className='text-2xl bg-amber-500 transition-colors hover:bg-amber-600 active:bg-amber-700 p-2 rounded-lg text-(--black)' href="#calculator">Рассчитать стоимость</a>
      </div>
     </section>
    );
  }
  