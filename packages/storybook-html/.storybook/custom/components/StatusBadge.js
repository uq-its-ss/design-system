import React from 'react';
import './StatusBadge.scss';

const variants = {
  experiment: {
    label: "Experimental candidate",
    title: "This is an experimental feature — use with caution, support may be limited"
  },
  development: {
    label: "In development",
    title: "This feature is under development — breaking changes may occur"
  },
  stable: {
    label: "Stable",
    title: "This feature is stable — any changes will be bug fixes or enhancements"
  },
  review: {
    label: "Under review",
    title: "This feature is under review — may be deprecated or redesigned in the future"
  },
  deprecated: {
    label: "Deprecated",
    title: "Deprecated — no longer supported and will be removed in the future"
  },
  draftDoc: {
    label: "Draft documentation",
    title: "This documentation is a draft version and in progress"
  },
  reviewDoc: {
    label: "Review documentation",
    title: "This documentation is complete and needs review"
  },
  stableDoc: {
    label: "Stable documentation",
    title: "This documentation is stable - may change with future enhancements to the component"
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
StatusBadge.Experiment = ({variant, ...props}) => <StatusBadge variant="experiment" {...props} />;
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
