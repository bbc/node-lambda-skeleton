@Library('dpub-pipelines') _

buildPipeline(
  projectName: 'genesis-skeleton',
  componentType: 'lambda',
  defaultBranch: 'master',
  nodeVersion: '14',
  stages: [
    e2eTests: false,
  ]
)
