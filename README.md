# Basic Shopping Trolley(Cart) application for drinks built using .NET Core with React
An experimental online shopping trolley project using C# .NET Core, React, JavaScript, Materail-ui, HTML5, CSS3, xUnit.net, Moq and InMemoryDatabase for more efficient unit testing

## Application Screenshots
- Products Screen - List all four products, add/remove to the trolley
![alt tag](https://github.com/jiteshkaranjkar/eShoppingTrolley/blob/master/ProductsScreen.png)

- Shopping Trolley Screen - showcasing all the products added with offers, price, discounted and total sale price
![alt tag](https://github.com/jiteshkaranjkar/eShoppingTrolley/blob/master/ShoppingTolleyScreen.png)

## Installation
**Steps of installation**
- Import project into Visual Studio (or alternative IDE Visual Studio Code)
- Build the applciation and run (Visual Studio - preferably VS 2019 Community edition)

## Features
Shopping Trolley feature
- Screens - Home page, display Products and add to Trolley, Shopping Trolley with all Trolley details.
- Built 5 different projects libraries
- Presentation - responsible for the UI (i.e Client application - React SPA, Materail-UI) coordinated by controllers which execute around 5 different User stories.
- Domain - This is the Domain centric with no implementation and just Entities.
- Services - Application Service layer which implements contracts and abstracts calls to Repository layer.
- Repository - A Persitence layer with the idea of abstracting the data access concerns and option to use preferred data access technology. 
- Tests - Unit Test using xUnit.net, Moq and InMemoryDatabase for more efficient unit testing and used TestHost for TestFixture.
- Application deployed in Azure (pending)
- Have built a dashboard to monitor services and application (pending)

Application structure results in following:
- Independent of Frameworks - Core should not be dependent on external frameworks such as Entity Framework
- Testable - The logic within Core can be tested independently of anything external, such as UI, databases, servers. Without external dependencies, the tests are very simple to write.
- Independent of UI - It is easy to swap out the Web UI for a Console UI, or Angular for Vue. Logic is contained within Core, so changing the UI will not impact logic.
- Independent of Database - Initially you might choose SQL Server or Oracle, but soon we will all be switching to Cosmos DB
- Independent of anything agency - Core simply doesn't know anything about the outside world
