import css from './LoadMoreBtn.module.css'
interface ILoadMoreBtn {
    loadMore: () => void
}
const LoadMoreBtn: React.FC<ILoadMoreBtn> = ({ loadMore }) => {
    return <>
        <button className={css.loadMoreBtn} onClick={loadMore}>Load more</button>
    </>
}

export default LoadMoreBtn