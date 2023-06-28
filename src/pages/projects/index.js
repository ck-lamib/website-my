import React from 'react';
import Layout from '@theme/Layout';
import projects from '../../data/projects';
import Project from './components/project';



function ProjectInterface() {
    const TITLE = 'Projects';
    const DESCRIPTION = 'Some of my recent projects';
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <main className="container-fluid">
                <div className="hero text--center projectSection">
                    <div className="container ">
                        <h1 className="hero__title projectHero" >{TITLE}</h1>
                        <p className="hero__subtitle projectHero">{DESCRIPTION}</p>
                    </div>
                </div>
                <div  className="projectSection padding-top--xl margin-none">
                {projects && projects.length > 0 && (
                    <div className="container">
                        <div className="row row--align-center">
                            {projects.map(project =>
                                (
                                    <div className="col col--4">
                                        <Project {...project} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
                </div>
            </main>
        </Layout>
    );
}

export default ProjectInterface;
