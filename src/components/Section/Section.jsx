import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.ection}>
      <Title title={title} />
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
