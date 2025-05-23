'use client'
import Marquee from 'react-fast-marquee'

const shuffleArray = array => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const sponsors = [
  {
    src: 'Chiacchiere da Caffè - Maddalena Solbiate.jpg',
    alt: 'Chiacchiere da Caffè'
  },
  { src: 'Comabikes&s.png', alt: 'Comabikes' },
  { src: 'Studio Bianco.jpg', alt: 'Comabikes' },

  { src: 'EURO MED.jpeg', alt: 'EURO MED' },
  { src: 'Cantoni Tours.jpg', alt: 'Cantoni Tours' },
  { src: 'Kame House_page-0001.jpg', alt: 'Kame House' }
]

const sponsors2 = [
  { src: 'plaza.jpg', alt: 'Bar Plaza' },
  { src: 'La Vecchia Filanda.png', alt: 'La Vecchia Filanda' },
  { src: 'Lucia Galli Fisioterapista Valmofestival.jpg', alt: 'Lucia Galli' },
  { src: 'Farmacia S Agata_page-0001.jpg', alt: 'Farmacia S Agata' },
  { src: 'Grotte del sale.png', alt: 'Grotte del Sale' },
  { src: 'VANITY.jpg', alt: 'VANITY' },
  { src: 'Andrelab.jpg', alt: 'Andrelab' }
]

const sponsors3 = [
  { src: 'Osteria del gatto_page-0001.jpg', alt: 'Osteria del Gatto' },
  { src: 'PROFUMO DI EVA.jpg', alt: 'Profumo di Eva' },
  { src: 'RF GARDEN.jpg', alt: 'RF Garden' },
  { src: 'Serramenti milani.png', alt: 'Serramenti Milan' },
  { src: 'Formica Garage.jpeg', alt: 'Formica Garage' },
  { src: 'Enoteca Gusto Uggiate.jpg', alt: 'Enoteca Gusto' }
]

const sponsors4 = [
  { src: 'Ottica Marilin-120.jpg', alt: 'Ottica Marilin' },
  { src: 'Kasanova.png', alt: 'Kasanova' },
  { src: 'Studio Postural.png', alt: 'Studio Postural' },
  { src: 'AMICA NATURA farmacia valmofestival (1).jpg', alt: 'Amica Natura' },
  { src: 'OtticaZago.jpg', alt: 'Ottica Zago' },
  { src: 'Tabaccheria_Dany.jpg', alt: 'Tabaccheria Dany' }
]

export default function Sponsor() {
  // Shuffle sponsors each render
  const shuffledSponsors = shuffleArray(sponsors)
  const shuffledSponsors2 = shuffleArray(sponsors2)
  const shuffledSponsors3 = shuffleArray(sponsors3)
  const shuffledSponsors4 = shuffleArray(sponsors4)

  return (
    <div className=' p-4'>
      <Marquee className='gap-6' pauseOnClick>
        {shuffledSponsors.map((sponsor, index) => (
          <div key={index} className='p-4'>
            <img
              src={`/sponsor/${sponsor.src}`}
              alt={sponsor.alt}
              className='w-[300px] h-[300px] object-contain rounded-lg'
            />
          </div>
        ))}
      </Marquee>
      <Marquee direction='right' pauseOnClick>
        {shuffledSponsors2.map((sponsor, index) => (
          <div key={index} className='p-4'>
            <img
              src={`/sponsor/${sponsor.src}`}
              alt={sponsor.alt}
              className='w-[300px] h-[300px] object-contain rounded-lg'
            />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnClick>
        {shuffledSponsors3.map((sponsor, index) => (
          <div key={index} className='p-4'>
            <img
              src={`/sponsor/${sponsor.src}`}
              alt={sponsor.alt}
              className='w-[300px] h-[300px] object-contain rounded-lg'
            />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnClick direction='right'>
        {shuffledSponsors4.map((sponsor, index) => (
          <div key={index} className='p-4'>
            <img
              src={`/sponsor/${sponsor.src}`}
              alt={sponsor.alt}
              className='w-[300px] h-[300px] object-contain rounded-lg'
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
