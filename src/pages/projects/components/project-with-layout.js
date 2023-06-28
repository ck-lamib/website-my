import React from 'react'
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import projects from '../../../data/projects';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ProjectDetails({ title, description, image, tech, github }) {

    return (
        <div className={clsx("container padding-bottom--xl projectDpadding")}>
            <h1 style={{color: 'var(--ifm-color-primary)'}}>{title}</h1>
            <p>{tech}</p>
            <div className="row row--align-center">
                    <img
                        className={clsx(styles.image)}
                        src={useBaseUrl(image)}
                        alt={title}
                    ></img>
                <div className="col padding-top--md" style={{padding: 0}}>
                    <div className={styles.links}>
                        <h2>Link to github: </h2>
                        {github && <a title="github" href={github} target="_blank">
                            <img alt="github" src={useBaseUrl('img/skills/git.svg')} className={clsx('margin-left--sm',styles.icon)} style={{padding: 0, margin:0, marginBottom: 2}}/>
                        </a>}
                    </div>
                </div>
            </div>
            <div className="padding-top--md">
            <h2>Description:</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

function ProjectWithLayout({ slug }) {
    const project = projects.find((p) => p.slug == slug);
    return (
        <Layout
            title={`${project && project.title}`}
            description={project && project.description}>
            <main className="padding-top--lg">
                <ProjectDetails {...project} />
            </main>
        </Layout>
    );
}


export default ProjectWithLayout;