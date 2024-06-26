import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EntryItem = ({ item }) => {

    return (
        <div className='box has-background-white'
            key={
                item.file
            }>
            <article className='media'>

                {
                    item.img !== undefined && <figure className='media-left has-text-centered entry-img mx-2'>
                        <img src={
                            item.img
                        }
                            alt='Imagen de la noticia' />
                    </figure>
                }

                <div className='media-content'>
                    <ReactMarkdown remarkPlugins={
                        [remarkGfm]
                    }>
                        {
                            item.content
                        }</ReactMarkdown>
                </div>

                <div className='media-right'>
                    <div className='block has-text-centered entry-date'>
                        <i>{
                            item.date
                        }</i>
                    </div>
                    <div className='block'>
                        {
                            item.url !== undefined ? item.url.includes('http') ? <button className='block button is-link'
                                onClick={
                                    () => window.open(item.url)
                                }>
                                <span className='icon-text'>
                                    <span className='icon'>
                                        <FontAwesomeIcon className=''
                                            icon={faBarsStaggered} />
                                    </span>
                                    <span>Leer Más</span>
                                </span>
                            </button> : <Link to={
                                item.url
                            }>
                                <button className='block button news-read-more'>
                                    <FontAwesomeIcon className=''
                                        icon={faBarsStaggered} />
                                    &nbsp; Leer Más
                                </button>
                            </Link> : ''
                        } </div>
                </div>
            </article>
        </div>
    )
}

export default EntryItem
