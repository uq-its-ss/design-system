export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only
        'style',    // Formatting, missing semicolons, etc.
        'refactor', // Code restructure
        'perf',     // Performance improvement
        'test',     // Test updates
        'build',    // Build system changes
        'ci',       // CI configuration changes
        'chore',    // Maintenance tasks
        'revert',   // Revert previous commit
      ],
    ],
    'scope-empty': [2, 'never'], // Scope is required
    'subject-case': [0], // Disabled - allow any case
    'header-max-length': [2, 'always', 100], // Max 100 chars
  },
};
