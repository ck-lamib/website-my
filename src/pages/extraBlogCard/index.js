
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import blogInfo from '../../data/blogContent/extraBlogCard'; 
import BlogComponent from './components/blogComponent';

const TITLE = 'Extra Blog';
const DESCRIPTION = 'This blog contains the stuff that i like and enjoyed the most';

function BlogInterface() {
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <main className="margin-bottom--lg" style={{backgroundColor: 'var(--ifm-color-emphasis-100)'}}>
                <div className="text--center margin-bottom--xl margin-top--xl">
                    <div className="container">
                        <h1 className="hero__title" >{TITLE}</h1>
                        <p className="hero__subtitle">{DESCRIPTION}</p>
                    </div>
                </div>
                {blogInfo && blogInfo.length > 0 && (
                    <div className="container">
                        <div className="row row--align-center">
                            {blogInfo.map(project =>
                                (
                                    <div className="col col--4">
                                        <BlogComponent {...project} />
                                    </div> 
                                )
                            )}
                        </div>
                    </div>
                )}
            </main>
        </Layout>
    );
}

export default BlogInterface;
