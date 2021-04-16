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

Assign permission set: TODO
Navigate to the component: TODO