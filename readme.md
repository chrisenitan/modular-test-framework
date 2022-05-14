# Modula Test Actions

`work in progress`

### Introduction

A POC on abstracting test actions into methods which can be injected to test executors as instructions towards delivery.

#### Why

There are a number of UI test frameworks that attempts to simplify the process of creating test scenarios because the faster tests directly interpret to a faster delivery but most are either geared towards UI or rather still require writing a good amount of steps. For API tests, how can we achieve a low code test workflow when executing tests?
‘

## Resources

-   The complete presentation document on [wiki.md](wiki.md)
-   Related [Presentation Slide](https://docs.google.com/presentation/d/18YtgswASUvHj9v8fzVScqiIt3o6careCRWxii0U9Ad4/edit#slide=id.g8f35d6ca36_2_77)

## Stack

-   Supertest
-   Mocha
-   Express JS
-   Mustache

## Outline

### Define and export your apm actions methods

```javascript
{
    capturePayment: async (request: Record<string, any>) => {
        //capture payment process...

        //return responses to test session
        return {
            id: paymentId,
            status: 'Captured',
            apm: 'your_apm',
            message: 'Captured existing <apm> payment'
        }
    }
}
```

### Inject your action names into a dynamic storage

```json
{
    "your_apm": ["createPayment", "capturePayment"]
}
```

### A simple test flow using the approach, executes each action in sequence

```javascript
test(`Moduled`, async () => {
    //a UI selected array list of preferred actions
    const actions = helper.getActions('your_apm')

    for (const element of actions) {
        //parse each action array as you defined apm methods
        const currentAction = helper.translateAction(element)
        //fetch existing test session data
        const attributes = helper.readTransaction()
        //execute each action
        const { functionMessage, id, status, apm } = await helper.executeAction(attributes, currentAction)
        //export resolutions to test session
        helper.writeTransaction({ id, status, apm })
        //...other extensions: global assertions, reporting...
    }
})
```

## Setup

-   Clone project
-   Install package dependencies from the root directory `npm install`
-   Start the UI app with `npm start`
    -   Configure a scenario
-   Run tests with command provided in UI or with `npm run test`


## Credits
- Icons [Module icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/module")
- Pictures Pexels 
    - ...
