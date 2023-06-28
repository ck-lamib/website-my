
import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function ProjectComponents({ title, image, tech, github, slug }) {
    return (
        <a href={useBaseUrl('projects/' + slug)} className={styles.link} >
            <div className="card margin--lg margin-bottom--lg  projectCard card2">
                <div className="card__image">
                    <img
                        src={useBaseUrl(image)}
                        alt={title}
                    ></img>
                </div>
                <div className="card__body">
                    <h3>{title}</h3>
                    <p>{tech}</p>
                </div>
                <div className="card__footer">
                    <div className={styles.links}>
                        {github && <a title="github" href={github} target="_blank">
                            <img alt="github" src={useBaseUrl('img/skills/git.svg')} className={styles.icon} />
                        </a>}
                    </div>
                </div>
            </div>
        </a>

    );
}

export default ProjectComponents;
