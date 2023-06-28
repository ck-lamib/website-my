import React from 'react'
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import contacts from '../data/contacts';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Link from '@docusaurus/Link';

function Contact() {
    return (
        <Layout title={`Contact`}
        description="This is my contact page">
            <header className={clsx('hero hero--secondary', styles.contactheroBanner, styles.contactheroBg)}>
                <div className="contactoverlay padding-top--xl">
                    <div className="container">
                        <h1> Contact </h1>
                        <p>If you need any help or want to contact me. Then you can contact me any time</p>
                        <div className={[styles.buttons, styles.size]}>
                            {contacts && contacts.length > 0 && (
                                <div className="container  padding-bottom--xl text--center">
                                    {contacts.map(({ label, link, icon }, idx) => (
                                        <Link key={idx}
                                            className={clsx(
                                                'button button--outline button--primary button--lg margin--md projectCard card2', styles.size,
                                                styles.getStarted,
                                            )}
                                            to={link}>
                                            <img src={useBaseUrl(icon)} alt={label} className={clsx(styles.contactImage)} />
                                            {label}
                                        </Link>
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

export default Contact;