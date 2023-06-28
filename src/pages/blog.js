import React from 'react'
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import blogstart from '../data/blogstart';
import useBaseUrl from '@docusaurus/useBaseUrl';


function Blogstart() {
    return (
        <Layout
        title='Blog'
        description="This is my blog page">
            <header className={clsx('hero hero--secondary', styles.blogstartheroBanner, styles.blogstartheroBg)}>
                <div className="blogstartoverlay padding-top--xl">
                    <div className="container">
                        <h1> Blog Page </h1>
                        <p>Welcome to my blog page.</p>
                        <div className={[styles.buttons, styles.size]}>
                            {blogstart && blogstart.length > 0 && (
                                <div className="container  padding-bottom--xl text--center ">
                                    {blogstart.map(({ label, icon, slug }, idx) => (

                                        <a key={idx} href={useBaseUrl(slug)} className={clsx('button button--outline button--primary margin--md padding--none projectCard card2', styles.size,styles.getStarted,)} style={{borderRadius: 20}}>
                                            <div className={clsx("container padding--sm")}>
                                                <div className="row row--align-center">
                                                    <div className="col col--11 padding--none">
                                                        <img src={useBaseUrl(icon)} alt={label} className={clsx(styles.image)} style={{borderRadius: 20}} />
                                                    </div>
                                                </div>
                                                <div className="padding-top--sm">
                                                    <p className='margin-bottom--sm'>{label}</p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </Layout>

    );
}


export default Blogstart;




