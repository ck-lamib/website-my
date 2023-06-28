import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function BlogComponent({ title, image, slug }) { 

    return (
        <a href={useBaseUrl(slug)} className={styles.link} >
            <div className="card margin-bottom--lg projectCard card2 margin--lg">
                <div className="card__image">
                    <img
                        src={useBaseUrl(image)}
                        alt={title}
                    ></img>
                </div>
                <div className="card__body">
                    <h3 className='text--center'>{title}</h3>
                </div>
            </div>
        </a>

    );
}

export default BlogComponent;
