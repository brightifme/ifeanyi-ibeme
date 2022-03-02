import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionFooter = ({ footer }) => {
  if (!footer.length) return null;

  return (
    <Section title="Footer">
      {footer.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          
        />
      ))}
    </Section>
  );
};

export default SectionFooter;
