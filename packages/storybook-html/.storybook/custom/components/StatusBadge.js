import React from 'react';
import './StatusBadge.scss';

const variants = {
  experimental: {
    label: "Experimental",
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
  }
};

const StatusBadge = ({variant}) => {
  return (
    variants[variant] && <span className={`uqds-status-badge uqds-status-badge--${variant}`} title={variants[variant]?.title}>{variants[variant]?.label}</span>
  );
};

StatusBadge.Experimental = () => <StatusBadge variant="experimental" />;
StatusBadge.Development = () => <StatusBadge variant="development" />;
StatusBadge.Stable = () => <StatusBadge variant="stable" />;
StatusBadge.Review = () => <StatusBadge variant="review" />;
StatusBadge.Deprecated = () => <StatusBadge variant="deprecated" />;

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
