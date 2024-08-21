import { CatImg, CatGallery, CatCard } from '../../components'
import './CatsPage.css'

export default function CatsPage() {
  return (
    
    <>
        <h1>Our Current Cats</h1>
        <p>Please have a look at our current selection of cats up for adoption. You can click on any cat and be taken to their page for more information.</p>
        <CatGallery />
    </>
  )
}
