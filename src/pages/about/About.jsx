import React from "react";
import styles from "./About.module.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
export default function About() {
  const pdfUrl = "../../../public/pdf/About.pdf";
  let language = window.localStorage.getItem("selectedLanguage");
  return <div className={styles.wrapper}>
    {
      !language ? RU : language === 'ru' ? RU : language === 'en' ? EN : language === 'kz' ? KZ : UZ
    }
  </div>
}

const UZ = (
  <>
    <p className={`${styles.title}`}>
      THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali O‘zbekiston
      Respublikasi Prezidenti Administratsiyasi huzuridagi axborot va ommaviy
      kommunikatsiyalar agentligi tomonidan 2024-yil 5-dekabr kuni taqdim
      etilgan № 516376 GUVOHNOMA asosida o‘z faoliyatini boshladi.
    </p>
    <br />
    <br />
    <p className={styles.title}>
      THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali Toshkent davlat
      agrar universiteti huzurida o‘z faoliyatini olib boradi.
    </p>
    <br />
    <p className={styles.title}>
      Jurnal ushbu ixtisosliklarda maqolalarni nashr etadi.
    </p>
    <div className={styles.lines}>
      <div className={styles.line}>
        <span>06.00.00</span>
        <span>Qishloq xo‘jaligi yo‘nalish sohalari.</span>
      </div>
      <div className={styles.line}>
        <span>08.00.04</span>
        <span>Qishloq xo‘jaligi iqtisodiyoti yo‘nalishi.</span>
      </div>
      <div className={styles.line}>
        <span>14.00.00</span>
        <span>Meditsina sohasi yo‘nalishlari.</span>
      </div>
      <div className={styles.line}>
        <span>16.00.00</span>
        <span>Veterinariya sohasi yo‘nalishlari.</span>
      </div>
    </div>
    <br />
    <br />
    <div className={styles.lines2}>
      <div className={styles.line2}>
        Tarqatilish xududi - <strong> Respublika miqiyosida</strong>
      </div>
      <div className={styles.line2}>
        OAV tili - O‘zbek, rus, ingiliz, qoraqalpoq va qozoq tillarida
      </div>
      <div className={styles.line2}>
        Jurnal rahbari: Turg‘unov Azizbek Normat o‘g‘li
      </div>
    </div>
    <div className={styles.footer}>
      Manzil: Toshkent viloyati, Qibray tumani Universitet ko‘chasi 2-uy
    </div>
  </>
);

const EN = (
  <>
    <p className={`${styles.title}`}>
      THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE journal started its
      activity on the basis of the CERTIFICATE № 516376 submitted on December 5,
      2024 by the Information and Mass Communications Agency under the
      Administration of the President of the Republic of Uzbekistan
    </p>
    <br />
    <br />
    <p className={styles.title}>
      THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE magazine operates under
      Tashkent State Agrarian University
    </p>
    <br />
    <p className={styles.title}>
      The journal publishes articles in these specialties.
    </p>
    <div className={styles.lines}>
      <div className={styles.line}>
        <span>06.00.00</span>
        <span>Agricultural sectors.</span>
      </div>
      <div className={styles.line}>
        <span>08.00.04</span>
        <span>Direction of agricultural economy.</span>
      </div>
      <div className={styles.line}>
        <span>14.00.00</span>
        <span>Directions in the field of medicine.</span>
      </div>
      <div className={styles.line}>
        <span>16.00.00</span>
        <span>Directions of the veterinary field.</span>
      </div>
    </div>
    <br />
    <br />
    <div className={styles.lines2}>
      <div className={styles.line2}>
        Distribution area - <strong> on the scale of the Republic</strong>
      </div>
      <div className={styles.line2}>
        Media language - Uzbek, Russian, English, Karakalpak and Kazakh
      </div>
      <div className={styles.line2}>Head of the journal: Turgunov Azizbek</div>
    </div>
    <div className={styles.footer}>
      Address: University Street 2, Kibrai District, Tashkent Region
    </div>
    <div className={styles.footer}>
      Tashkent State Agrarian University Main Building Scientific Department
    </div>
  </>
);

const RU = (
  <>
    <p className={`${styles.title}`}>
      THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE Журнал начал свою
      деятельность на основании СВИДЕТЕЛЬСТВА № 516376, выданного 5 декабря 2024
      года Агентством информации и массовых коммуникаций при Администрации
      Президента Республики Узбекистан.
    </p>
    <br />
    <br />
    <p className={styles.title}>
      Журнал «THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE » действует при
      Ташкентском государственном аграрном университете.
    </p>
    <br />
    <p className={styles.title}>
      Журнал публикует статьи по этим специальностям.
    </p>
    <div className={styles.lines}>
      <div className={styles.line}>
        <span>06.00.00</span>
        <span>Сельскохозяйственные отрасли.</span>
      </div>
      <div className={styles.line}>
        <span>08.00.04</span>
        <span>Управление аграрного хозяйства.</span>
      </div>
      <div className={styles.line}>
        <span>14.00.00</span>
        <span>Направления в области медицины.</span>
      </div>
      <div className={styles.line}>
        <span>16.00.00</span>
        <span>Направления ветеринарной сферы.</span>
      </div>
    </div>
    <br />
    <br />
    <div className={styles.lines2}>
      <div className={styles.line2}>
        Ареал распространения - <strong>в масштабах Республики.</strong>
      </div>
      <div className={styles.line2}>
        Язык журнал– узбекский, русский, английский, каракалпакский и казахский.
      </div>
      <div className={styles.line2}>Руководитель журнала: Тургунов Азизбек</div>
    </div>
    <div className={styles.footer}>
      Адрес: Ташкентская область, Кибрайский район, улица Университетская, 2.
      Научный отдела главного корпуса Ташкентского государственного аграрного
      университета
    </div>
  </>
);

const KZ = (
  <>
    <p className={`${styles.title}`}>
      <strong>THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali</strong>
      Журнал өз қызметін Өзбекстан Республикасы Президенті Әкімшілігінің
      жанындағы Ақпарат және бұқаралық коммуникациялар агенттігінің 2024 жылдың
      5-желтоқсанында берген №516376 СЕРТИФИКАТ негізінде бастады.
    </p>
    <br />
    <br />
    <p className={styles.title}>
      Ташкент мемлекеттік аграрлық университетінде{" "}
      <strong>THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE </strong> jurnali
      журналы жұмыс істейді.
    </p>
    <br />
    <p className={styles.title}>
      Журналда осы мамандықтар бойынша мақалалар жарияланады.
    </p>
    <div className={styles.lines}>
      <div className={styles.line}>
        <span>06.00.00</span>
        <span>Ауыл шаруашылығы.</span>
      </div>
      <div className={styles.line}>
        <span>08.00.04</span>
        <span>Ауыл шаруашылығы экономикасы.</span>
      </div>
      <div className={styles.line}>
        <span>14.00.00</span>
        <span>Медицина саласындағы бағыттар.</span>
      </div>
      <div className={styles.line}>
        <span>16.00.00</span>
        <span>Ветеринария саласындағы бағыттар.</span>
      </div>
    </div>
    <br />
    <br />
    <div className={styles.lines2}>
      <div className={styles.line2}>
        Таралу аймағы - <strong>Республика көлемінде.</strong>
      </div>
      <div className={styles.line2}>
        Журналдың тілі – өзбек, орыс, ағылшын, қарақалпақ, қазақ тілдерінде.
      </div>
      <div className={styles.line2}>Журнал меңгерушісі: Тұрғунов Азизбек</div>
    </div>
    <div className={styles.footer}>
      Мекен-жайы: Ташкент облысы, Қибрай ауданы, Университет көшесі, 2. Ташкент
      мемлекеттік аграрлық университетінің бас корпусының ғылыми бөлімі
    </div>
  </>
);
