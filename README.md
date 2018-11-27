## Welcome to myRetail! 

This application is the product page for an item sold in myRetail stores.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For more details, please check out the [Wiki](https://github.com/ecaldwe1/myRetail/wiki).

This is my first experience working with React!

### Documents:
- [Continuous Delivery Diagram](docs/Continuous_Delivery_Diagram.pdf)
- [Test Plan](docs/test-plan.md)

### Technical decisions

#### Front-end framework
The client side code is written in ReactJS. This is my first experience writing an application in React. I chose to use this exercise to learn React as an opportunity to expand my technical skills, as well as get a head start should we move on to next-steps.

Additionally, I used Bootstrap 4.1 to improve the layout, especially with respect to the mobile application.

#### Back-end framework
As requested, NodeJS is used as the back-end framework. 

#### Data
Data was provided in a JSON file, `item-data.json`. 
In a real-world solution, this data would be stored in a database. However, for this front-end case study, I felt that configuring a database was an unnecessary step. Only one product is provided and the data can easily be loaded from the JSON file for the purposes of this application.

#### Carousel
I utilized the [react-slick](https://github.com/akiran/react-slick) component for the image carousel under the primary image. 

#### Icons
Icons used in this application come from [react-icons](https://www.npmjs.com/package/react-icons).

#### Testing
I am using [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Cucumber](docs.cucumber.io/guides/) to automate my functional tests. Cucumber allows one to write tests in plain text, which is pretty cool. [react-cucumber](https://github.com/pzavolinsky/react-cucumber) allows testing of React components using Cucumber. 

_Note: As of submission time, this is still a work in progress. Current testing can be found on the `testing` branch._
