# jest-axe-lwc-demo

Description: TODO
Screenshot: TODO

Deployment:
## Deployment

### Prerequisites

1. Install recommended extensions
1. Install npm

### Deploy
1. Install dependencies:
    ```sh
    npm install
    ```
1. Authenticate with a development hub:
    ```sh
    sfdx force:auth:web:login -a DevHub -d
    ```
1. Create a scratch org:
    ```sh
    sfdx force:org:create -f config/project-scratch-def.json -s -a axe-demo
    ```
1. Push the code
    ```sh
    sfdx force:source:push
    ```
1. Assign permissions to the current user
    ```sh
    sfdx force:user:permset:assign -n JestAxeLwcDemo
    ```
1. Open the org, on the User List tab
    ```sh
    sfdx force:org:open -p lightning/n/UserList
    ```