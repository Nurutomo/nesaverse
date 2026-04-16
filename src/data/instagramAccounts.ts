import wibunesa from '../assets/img/1000560659-removebg-preview.png'
import unesartire from '../assets/img/1000560677-removebg-preview.png'
import unesa_parkir from '../assets/img/halfbd_1.png'
import accountsRaw from './instagramAccounts.json'

const imageByName = {
  '1000560659-removebg-preview.png': wibunesa,
  '1000560677-removebg-preview.png': unesartire,
  'halfbd_1.png': unesa_parkir,
}

export const instagramAccounts = accountsRaw.map((account) => ({
  handle: account.handle,
  href: account.href,
  desc: account.desc,
  imageSrc: imageByName[account.image as keyof typeof imageByName],
}))
