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
  { src: 'Andrelab.jpg', alt: 'Andrelab' },
  {
    src: 'Chiacchiere da Caffè - Maddalena Solbiate.jpg',
    alt: 'Chiacchiere da Caffè'
  },
  { src: 'Comabikes&s.png', alt: 'Comabikes' },
  { src: 'EURO MED.jpeg', alt: 'EURO MED' },
  { src: 'Enoteca Gusto Uggiate.jpg', alt: 'Enoteca Gusto' },
  { src: 'FORMICA GARAGE.jpg', alt: 'Formica Garage' },
  { src: 'Farmacia S Agata_page-0001.jpg', alt: 'Farmacia S Agata' },
  { src: 'Grotte del sale.png', alt: 'Grotte del Sale' },
  { src: 'KASANOVA.jpg', alt: 'KASANOVA' }
]

const sponsors2 = [
  { src: 'Kame House_page-0001.jpg', alt: 'Kame House' },
  { src: 'La Vecchia Filanda.png', alt: 'La Vecchia Filanda' },
  { src: 'Lucia Galli Fisioterapista Valmofestival.jpg', alt: 'Lucia Galli' },
  { src: 'Osteria del gatto_page-0001.jpg', alt: 'Osteria del Gatto' },
  { src: 'Ottica Marilin-120.jpg', alt: 'Ottica Marilin' },
  { src: 'PROFUMO DI EVA.jpg', alt: 'Profumo di Eva' },
  { src: 'RF GARDEN.jpg', alt: 'RF Garden' },
  { src: 'Serramenti milani.png', alt: 'Serramenti Milan' },
  { src: 'Studio Postural.png', alt: 'Studio Postural' },
  { src: 'VANITY.jpg', alt: 'VANITY' }
]

export default function Sponsor() {
  // Shuffle sponsors each render
  const shuffledSponsors = shuffleArray(sponsors)
  const shuffledSponsors2 = shuffleArray(sponsors2)

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
    </div>
  )
}
