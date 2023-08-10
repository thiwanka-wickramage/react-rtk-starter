import { useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const Masthead: React.FC = () => {
  const [identifyOpen, setIdentifyOpen] = useState(false);

  const identifyIconClassNames = `sgds-icon sgds-icon-chevron-${
    identifyOpen ? 'up' : 'down'
  }`;

  const dividerClassNames = identifyOpen
    ? classNames('masthead-divider', styles.divider, styles.mastheadDivider)
    : classNames(
        'masthead-divider',
        'is-hidden',
        styles.divider,
        styles.mastheadDivider
      );
  const contentClassNames = `col banner-content-layout ${
    identifyOpen ? '' : 'is-hidden'
  }`;

  const bannerContent = classNames(`banner-content`, styles.bannerContent);

  const bannerContentTextContainer = classNames(
    `banner-content-text-container`,
    styles.bannerContentTextContainer
  );

  const bannerIcon = classNames(`banner-icon`, styles.bannerIcon);
  const inlineBannerIcon = classNames(
    `inline-banner-icon`,
    styles.inlineBannerIcon
  );

  return (
    <section className={classNames(`sgds-masthead`, styles.sgdsMasthead)}>
      <div className={classNames(`sgds-container`, styles.sgdsContainer)}>
        <div
          className={classNames(
            `row is-multiline is-vcentered masthead-layout-container`,
            styles.mastheadLayoutContainer
          )}
        >
          <div
            className={classNames(
              `col is-9-desktop is-12-touch has-text-centered-touch`,
              styles.mastheadHeight
            )}
          >
            <div
              className={classNames(`masthead-layout`, styles.mastheadLayout)}
            >
              <span
                className={classNames(
                  'sgds-icon',
                  'sgds-icon-sg-crest',
                  styles.sgdsIconSgCrest,
                  styles.red
                )}
              ></span>
              <span className={styles.cell}>
                <span
                  className={classNames(
                    `banner-text-layout`,
                    styles.bannerTextLayout
                  )}
                >
                  <span className={classNames(`is-text`, styles.isText)}>
                    A Singapore Government Agency Website&ensp;
                  </span>
                  <span
                    data-testid="test-sgds-masthead-button"
                    className={classNames(
                      `sgds-masthead-button`,
                      styles.sgdsMastheadButton
                    )}
                    id="sgds-masthead-identify"
                    role="link"
                    aria-expanded={identifyOpen}
                    aria-hidden="true"
                    onClick={() => setIdentifyOpen(identifyOpen ? false : true)}
                  >
                    <span
                      className={classNames(
                        `sgds-masthead-button-text`,
                        styles.sgdsMastheadButtonText
                      )}
                    >
                      How to identify
                    </span>
                    <span
                      className={classNames(
                        identifyIconClassNames,
                        identifyOpen
                          ? styles.sgdsIconChevronUp
                          : styles.sgdsIconChevronDown
                      )}
                      id="sgds-masthead-identify-icon"
                    ></span>
                  </span>
                </span>
              </span>
            </div>
            <div className={dividerClassNames} id="sgds-masthead-divider"></div>
          </div>

          <div
            data-testid="test-sgds-masthead-content"
            className={classNames(
              contentClassNames,
              styles.bannerContentLayout
            )}
            id="sgds-masthead-content"
          >
            <div className={bannerContent}>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/2ec2122b2010672b9cbb6efb5138048d8aff4a09/5d1ab/assets/img/government_building.svg"
                alt="banner icon"
                className={bannerIcon}
              />
              <div className={bannerContentTextContainer}>
                <strong className="banner-content-title">
                  Official website links end with .gov.sg
                </strong>
                <p className={styles.spaceText}>
                  Government agencies communicate via
                  <strong> .gov.sg </strong>
                  websites{' '}
                  <span className={styles.avoidwrap}>
                    (e.g. go.gov.sg/open)
                  </span>
                  .{' '}
                  <a
                    href="https://go.gov.sg/trusted-sites"
                    className={classNames(
                      `banner-content-text sgds-masthead-button-link sgds-masthead-button-text`,
                      styles.bannerContentText,
                      styles.sgdsMastheadButtonText
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Trusted website
                    <text className={styles.space}>s</text>
                  </a>
                </p>
              </div>
            </div>
            <div className={bannerContent}>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg"
                alt="lock icon"
                className={bannerIcon}
              />
              <div className={bannerContentTextContainer}>
                <strong className="banner-content-title">
                  Secure websites use HTTPS
                </strong>
                <p>
                  Look for a<strong> lock </strong>(
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg"
                    className={inlineBannerIcon}
                    alt="lock icon"
                  />
                  ) or https:// as an added precaution. Share sensitive
                  information only on official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masthead;
