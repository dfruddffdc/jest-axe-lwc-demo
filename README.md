# jest-axe-lwc-demo

![Sample app screenshot](/docs/jest-axe-lwc-demo.png)

A sample app for demonstrating tools for testing inclusive design.

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

### Local development

1. Follow the [Developer guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_local_dev_setup)
1. Start the local development server
   ```sh
   sfdx force:lightning:lwc:start
   ```
1. Open the local development server at http://localhost:3333/.
