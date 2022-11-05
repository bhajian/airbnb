/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      accountId
      name
      email
      phone
      bio
      image
      contacts {
        id
        name
        email
        phone
        image
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      accountId
      name
      email
      phone
      bio
      image
      contacts {
        id
        name
        email
        phone
        image
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      accountId
      name
      email
      phone
      bio
      image
      contacts {
        id
        name
        email
        phone
        image
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String) {
    onCreateMessage(owner: $owner) {
      id
      senderId
      receiverId
      message
      rating
      public
      anonymous
      photos
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String) {
    onUpdateMessage(owner: $owner) {
      id
      senderId
      receiverId
      message
      rating
      public
      anonymous
      photos
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String) {
    onDeleteMessage(owner: $owner) {
      id
      senderId
      receiverId
      message
      rating
      public
      anonymous
      photos
      createdAt
      updatedAt
      owner
    }
  }
`;
