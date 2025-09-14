import { gql } from "@apollo/client";

export const GET_SEARCH_ID = gql`
query searchId($id: ID!) {
  node(id: $id) {
    ... on User {
      name
      url
      avatarUrl
      login
      bio
      location
      company
      createdAt
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 20, isFork: false, privacy: PUBLIC) {
        nodes {
          languages(first: 10) {
            edges {
              size
              node {
                name
              }
            }
          }
        }
      }
      pinnableItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            url
            name
            description
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }

  ... on Organization {
    name
    url
    avatarUrl
    login
    description
    location
    websiteUrl
    createdAt

  repositories(first: 20, isFork: false, privacy: PUBLIC) {
    nodes {
      languages(first: 10) {
        edges {
          size
          node {
            name
          }
        }
      }
    }
  }
  pinnableItems(first: 6, types: REPOSITORY) {
    nodes {
      ... on Repository {
        url
        name
        description
        stargazerCount
        forkCount
        primaryLanguage {
          name
          color
        }
      }
    }
  }
}
    

    ... on Repository {
      name
      description
      url
      homepageUrl
      createdAt
      updatedAt
      diskUsage
      owner {
        login
        avatarUrl
      }
      stargazerCount
      forkCount
      watchers {
        totalCount
      }
      issues(states: OPEN) {
        totalCount
      }
      languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
        totalSize
        edges {
          size
          node {
            name
          }
        }
      }
      collaborators(first: 4) {
        edges {
          node {
            login
            avatarUrl
          }
        }
      }
      repositoryTopics(first: 4) {
        edges {
          node {
            topic {
              name
            }
          }
        }
      }
      licenseInfo {
        name
      }
    }
  }
}
`
