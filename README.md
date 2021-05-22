# Basic Shopping Trolley(Cart) application for drinks built using .NET Core with React
An basic online Shopping Trolley project using C#, .NET Core, React, JavaScript, Materail-ui, HTML5, CSS3, xUnit.net, Moq and InMemoryDatabase for more efficient unit testing.

Application is hosted in Azure - https://tgifdrinks.azurewebsites.net/

## Table of contents
<!--ts-->
   * [Status and Usage](#status-and-usage)
   * [Application Screenshots](#application-screenshots)
   * [Installation](#installation)
   * [Features](#features)
   * [Application Results](#application-results)
   * [Trolley User Stories](#trolley-user-stories)
   * [Test Data](#test-data)
<!--te-->

## Status and Usage
eShoppingTrolley is a Single Page Application to demostrate the use case scenario mentioned below. 
- The user journey starts with Landing Page with an image which can be enhanced in many ways (like using carousels).
- The user can then move onto the Products screen by clicking on the Products menu button on the top right hand side of the menubar. 
- The Products screen at the moment has 4 sample products displayed. Each displayed product section has basic product details, product image, special offers if any, add/remove icon buttons and 'Add to cart' button (pending implementation).
- For the current shopping experience the user can add or remove any number of product with no upper limit, and this numbers added eventually is updated on the Trolley menu button on the menuabar top right hand side.
- By default the Trolley screen will be empty untill unless some items have been added from Products screen.
- Once the user has finalised the shopping they can move onto Trolley screen by clicking on the Trolley button on the menuabar top right hand side and reviewing the cart. 
- The Trolley page shows the summary of the products added, their quantities, the offers applied and the final amount to be paid. This is implemented as per the 5 User Stories defined below.


## Application Screenshots
- Products Screen - List all four products, add/remove to the trolley
![Products Screen](https://github.com/jiteshkaranjkar/eShoppingTrolley/blob/master/ProductsScreen.png)

- Trolley Screen - showcasing all the products added with offers, price, discounted and total sale price
![Trolley Screen](https://github.com/jiteshkaranjkar/eShoppingTrolley/blob/master/TrolleyScreen.png)

## Installation
**Steps of installation**
- Import project into Visual Studio (or alternative IDE Visual Studio Code)
- Build the Whoel eShoppingTrolley Solution, it will resolve backend and forntend dependencies. VS code need to have install depencies manually.
- Select the Project in Presentation Folder i.e eShoppingTrolley project 
- Run in Application (Visual Studio - preferably VS 2019 Community edition)
- in VS code use dotnet run


## Features
**Shopping Trolley feature**
- Screens - Home, Products and Trolley.
- Built 5 different projects libraries
- Presentation - responsible for the UI (i.e Client application - React SPA, Materail-UI) coordinated by controllers which execute around 5 different User stories.
- Domain - This is the Domain centric with no implementation and just Entities.
- Services - Application Service layer which implements contracts and abstracts calls to Repository layer.
- Repository - A Persitence layer with the idea of abstracting the data access concerns and option to use preferred data access technology. 
- Tests - Unit & Integration tests using xUnit.net, Moq and InMemoryDatabase for more efficient unit testing and used TestHost for TestFixture. Unit test for React app is pending.
- Application deployed in Azure - https://tgifdrinks.azurewebsites.net/
- Have built a dashboard to monitor services and application.

## Application Results
Application structure results in following:
- Independent of Frameworks - Core should not be dependent on external frameworks such as Entity Framework
- Testable - The logic within Core can be tested independently of anything external, such as UI, databases, servers. Without external dependencies, the tests are very simple to write.
- Independent of UI - It is easy to swap out the Web UI for a Console UI, or Angular for Vue. Logic is contained within Core, so changing the UI will not impact logic.
- Independent of Database - You might choose SQL Server or Oracle, but as of now am using InMemoryDatabase for more efficient unit testing.
- Independent of anything agency - Core simply doesn't know anything about the outside world

## Trolley User Stories
### User Story 1:
-As a customer I want to add / remove items to the trolley so that I can purchase the drinks I want
	Acceptance Criteria:
	1. Customers can add the same item more than once. For MVP, there is no upper limit	on the number of items or quantity they add
	2. When customer adds an item to the trolley, they can see the count of items	incremented
		a. Given customer has no item in the trolley
		b. When they add the first item
		c. Then the trolley count shows 1
	3. When Customer removes item from the trolley, the count of items is decremented
		a. Given customer has 1 item in the trolley
		b. When they remove that item from the trolley
		c. Then the trolley count shows

### User Story 2:
- As a customer when I view trolley, I want to see all the items I have added and the price of each item in the trolley so that I can see what I am paying for each item
	1. For each item show the product name and sale price
		Given “Jacob's Creek Classic Sauvignon Blanc” has a sale price of $7.95 is in the trolley
		When I view the trolley
		Then I want to see a sale price of Jacob's Creek Classic Sauvignon Blanc and $7.95

### User Story 3:
- As a customer when I view trolley, I want to see the total price of my trolley so that I know what I am paying
	1. Add up the item price and display total price
	Given I have items “Jacob's Creek Classic Sauvignon Blanc” with a sale price of $7.95, “Tread Softly Pinot Noir” with sale price of $13.60 and “Coopers Original Pale Ale Bottle” with sale price of $4.69 in the trolley
	When I view the trolley
	Then I want to see a total price of $26.24

### Promotion Use Cases:
- The business is facing competitive challenges and wants to run promotions to attract customers. Promotions can be a product promotion (at item level, for example, $1 off the price, 5% off the price) or at a trolley promotion (for example, multi-buy-promotions such as buy one get one free, buy one get second one for half price, spend and save promotions such as spend $50 and get $10 off). We need to be able to show the promotion price ($discount and $ saved) for each item in the trolley and the total discount and total savings on the trolly. The user stories are as follows

### User Story 4:
- As a customer when I view trolley, I want to see the discounted price if there are any discounts for each item in the trolley so that I know what I am paying for each item after the discount
	1. For each item, show discounted price along with sale price
		Given trolley has “Marlborough Sounds Pinot Noir bottle” with sale price of $19.99 and a product promotion is running that gives $2.00 off and “Pepperjack Barossa Shiraz” has a sale price of $25.00 and a product promotion gives 10% off
		When I view the trolley
		Then I want to see against the first item sale price of $19.99 and a discounted price of $17.99
		And against item 2, a sale price of $25.00 and a discounted price of $22.50

### User Story 5:
- As a customer when I view trolley, I want to see the total price of my trolley and the discounted price after all discount have been applied so that I know what I am paying and what benefit I am getting
	1. Apply all product level discounts, then apply trolley level discounts, subtract this from the total sale price to get the discounted price
		Given trolley has one “Marlborough Sounds Pinot Noir bottle” with sale price of $19.99 and a product promotion is running that gives $2.00 off, two “Baily & Baily Queen Bee Sticky” which has a sale price of $12.00 and a promotion of buy one and get 20% off the second
		When I view the trolley
		Then I want to see a total sale price of $43.99 and discounted price of $39.59

## Test Data
- All User stories are based on this test data and application is built using this test data
![TestData](https://github.com/jiteshkaranjkar/eShoppingTrolley/blob/master/TestData.png)
		     
