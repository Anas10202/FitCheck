# Amazon Order History CSV Extension

A simple Chrome extension that allows you to export your Amazon order history to CSV format.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `amazon-order-csv` folder

## Usage

1. Go to your Amazon orders page (https://www.amazon.com/gp/your-account/order-history)
2. Select the year you want to view orders from
3. Click the extension icon in your Chrome toolbar
4. Click "Export Orders to CSV"
5. The orders will be automatically downloaded as a CSV file

## Features

- Exports order date, order number, total amount, and item details
- Works with multiple Amazon domains (US, UK, DE, FR, etc.)
- Simple and easy to use interface
- Downloads CSV file automatically

## Note

Make sure you're logged into your Amazon account and on the orders page before using the extension. 

## Tests
The tests for this Chrome Extension is mainly created in the tests folder inside of amazon-order-csv. 
In order to run the tests,
```
npx jest
```
We mainly focused on unit and integration tests because it is difficult to do and End-to-End test when the parts of the project we worked on is scattered. In the future versions, we expect to be able to run End-to-End tests taking into factor the database, model, and the Chrome Extension itself.
