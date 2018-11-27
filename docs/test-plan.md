## Test Plan for myRetail online-shop app

### To functional test by hand:
1) Launch the staging server. My staging server is accessible at https://myretail-ecaldwe1.herokuapp.com/

2) This application is a single page so no navigation is necessary to access the page needing testing. (Many applications are more than a single page, so some navigating to the page to test may be necessary. For example, a retail site like [Target.com](https://www.target.com/) has a home page, the products are displayed on a Category/Department page, before accessing a single product page.)

3) For functional testing by hand, test data will need to be generated. For this instance, I have created two additional JSON files in the `public/data` directory. These are designed to test the different `purchasingChannelCode` values and verify that the Add to Card and Pick Up in Store buttons are shown correctly.

4) Verify that the appearance of the page is as expected.

   a) Verify data is shown meaning that it is being pulled successfully from the JSON file (or a database in a larger real-world application).

   b) Verify the layout. Check that elements are displayed.
   Are they displayed in the correct order?

   c) Verify functionality of elements.  
   Examples:
    - Clicking the plus sign next to quantity increases the quantity, while clicking the minus sign, decreases the quantity.
    - If loading `test--addtocart-only-item-data.json`, then only the Add to Cart button should be shown.
    - If loading `test--pickup-only-item-data.json`, then only the Pick Up in Stores button should be shown.





### Automating functional testing

I am using [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Cucumber](docs.cucumber.io/guides/) to automate my functional tests. Cucumber allows one to write tests in plain text, which is pretty cool. [react-cucumber](https://github.com/pzavolinsky/react-cucumber) allows testing of React components using Cucumber. 

As of submission time, this is still a work in progress.