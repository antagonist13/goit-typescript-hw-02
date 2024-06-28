import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'
import { getImages } from '../../images-api'
import { useEffect, useState } from 'react'
import { ApiSearchResponse, PhotoType } from '../../types'


export default function App() {
    const [query, setQuery] = useState <string>('')
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImgURL, setmodalImgURL] = useState<string>('');

  useEffect(() => {
    async function fetchImages() {
        try {
        setIsLoading(true);
        setIsError(false);
          const list: ApiSearchResponse = await getImages(query, page)
          
            setPhotos((prevState: PhotoType[]) => [...prevState, ...list.results])
            setTotalPages(list.total_pages)
      } catch (error) {
            console.log(error);
            setIsError(true);
      } finally {
            setIsLoading(false);
      }
    }
    if (isMounted) {
        fetchImages();
    } else {
      setIsMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);
    
      const handleSearch = async (value : string) => {
    setQuery(value);
    setPage(1);
    setPhotos([]);
    }
      const handleLoadMore = async () => {
    setPage(page + 1);
    }
    const handleModalOpen = () => {
        setModalIsOpen(true);
    }
    const handleModalClose = () => {
        setModalIsOpen(false);
    }
    const handleModalImg = (url: string) => {
        setmodalImgURL(url);
    }
    return <div className={css.container}>
        <SearchBar setSearchData={handleSearch} />
        {isError && <ErrorMessage/>}
        {photos.length > 0 && <ImageGallery photos={photos} modalOpen={handleModalOpen} setModalUrl={handleModalImg} />}
        {isLoading && <Loader />}
        {photos.length > 0 && !isLoading && page < totalPages && <LoadMoreBtn loadMore={handleLoadMore} />}
        <ImageModal modalIsOpen={modalIsOpen} onRequestClose={handleModalClose} modalUrl={modalImgURL} />
</div>
}