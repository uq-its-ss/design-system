import React from 'react';
import './StatusBadge.scss';

const variants = {
  development: {
    label: "Component - In development ",
    title: "The component is in development and should not be used yet"
  },
  review: {
    label: "Component - Under review",
    title: "The component is under review and will likely change"
  },
  stable: {
    label: "Component - Stable",
    title: "The component is stable and ready for use"
  },
  deprecated: {
    label: "Component - Deprecated",
    title: "The component is either replaced by a new component or no longer supported and will be removed in the next major version"
  },
  draftDoc: {
    label: "Documentation - Draft",
    title: "Documentation of component is in progress and will most likely change"
  },
  reviewDoc: {
    label: "Documentation - Under review",
    title: "Documentation of component is under review and will likely change"
  },
  stableDoc: {
    label: "Documentation - Stable",
    title: "Documentation of component is complete and ready for reference"
  }
};

const StatusBadge = ({variant, showRoadmapLink}) => {
  return (
    <>
      {variants[variant] && <span className={`uqds-status-badge uqds-status-badge--${variant}`} title={variants[variant]?.title}>{variants[variant]?.label}</span>}
      {showRoadmapLink && <a className="uqds-status-badge-addendum" href="#">See our roadmap &rarr;</a>}
    </>
  );
};

// Status tags for the component
StatusBadge.Development = ({variant, ...props}) => <StatusBadge variant="development" {...props} />;
StatusBadge.Stable = ({variant, ...props}) => <StatusBadge variant="stable" {...props} />;
StatusBadge.Review = ({variant, ...props}) => <StatusBadge variant="review" {...props} />;
StatusBadge.Deprecated = ({variant, ...props}) => <StatusBadge variant="deprecated" {...props} />;

// Status tags for the component documentation
StatusBadge.DraftDoc = ({variant, ...props}) => <StatusBadge variant="draftDoc" {...props} />;
StatusBadge.ReviewDoc = ({variant, ...props}) => <StatusBadge variant="reviewDoc" {...props} />;
StatusBadge.StableDoc = ({variant, ...props}) => <StatusBadge variant="stableDoc" {...props} />;

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
