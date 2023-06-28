import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import skills from '../data/skills';

import styles from './index.module.css';


function HomepageDisplay() {
  const { siteConfig } = useDocusaurusContext();
  return (<header className={clsx('hero hero--secondary', styles.heroBanner, styles.heroBg)}>
    <div className="overlay">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={[styles.buttons, styles.size]}>
          <>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg', styles.size,
                styles.getStarted,
              )}
              to={useBaseUrl('projects')}>
              View My Work
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg margin--md', styles.size,
                styles.getStarted,
              )}
              to={useBaseUrl('contact')}>
              Contact Me
            </Link>
          </>
        </div>
      </div>
    </div>
  </header>
  );
}
function Skill({ title, icon }) {
  const imgUrl = useBaseUrl(icon);
  return (

    <div className={styles.skillImage}>
      <img src={imgUrl} alt={title} />
    </div>

  );
}

function AboutMe() {
  const imgSrc = useBaseUrl('/img/hell.png');
  return (
    <section className={clsx("container--fluid padding-bottom--xl text--center", styles.cta, styles.section)}>
      <h1>About Me</h1>
      <div className="row row--align-center">
        <div className="col col--sm col--4">
          <div
            style={{
              boxShadow: "-1px -1px 3px 2px var(--ifm-color-primary), 1px 1px 3px 2px var(--ifm-color-primary)",
              borderRadius: 30,
              padding: '5px 10px',
              paddingTop: 10,
            }}>
            <img
              className={clsx(styles.myImage)}
              src={imgSrc}
              alt='my photo'
              style={{ borderRadius: 30 }}></img>
          </div>
        </div>
        <div className="col col--6 margin--xl .margin-top--sm text--justify">
          {/* <h2 style={{ color: "#999999", fontSize: "2rem" }}>
            HI, I'm Bimal and I'm a
          </h2> */}
          <p>
            Hi, my name is <span style={{ fontWeight: 'bold' }}>Bimal khatri</span>. I'm a tech enthusiast and a passionate developer who likes to write code
            and experiment with new tech.
          </p>
          <p>
            I'm currently pursuing my Bachelor of Science in Computing with Honors
            at <a href="https://www.icp.edu.np/" className='contactLink'> Informatics College Pokhara </a>
            . I attended{" "} <a href="https://www.napfs.edu.np/" className='contactLink'>
              Nepal APF School
            </a>{" "}
            for my secondary level education and{" "}
            <a
              href="https://sagarmathapokhara.edu.np/contacts/" className='contactLink'> Sagarmatha College Pokhara </a>
            for grades 11 and 12. Beside tech field i like to travel, sketch,
            cycling and do photography.
          </p>
        </div>
      </div>
    </section>

  );
}

function HomeProject() {
  return (
    <section className={clsx('bg--primary', styles.cta, styles.section)}>
      <div className="container text--center">
        <h1>Projects</h1>
        <p>I assume that you know all about me. Now, keep an eye on my work as well</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to={useBaseUrl('projects')}>
            Check Out My  Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title='Home'
      description="This is my personal website">
      <HomepageDisplay />
      <main>
        <AboutMe />
        {skills && skills.length > 0 && (
          <section className={clsx(styles.skills, styles.section)}>
            <div className="container text--center">
              <h1>Skills</h1>
              <p>Different platforms, frameworks and languages that I am currently learning and using</p>
              <div className="row  row--align-center">
                {skills.map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <HomeProject />
      </main>
    </Layout>
  );
}
