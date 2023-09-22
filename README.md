# QR Code Generator

This project is a simple QR Code generator built with Node.js. It uses the `inquirer` package for command line user inputs and the `qr-image` package for generating QR codes.

## Features

- Prompt the user to enter a URL.
- Generate a QR code based on the input URL.
- Save the generated QR code as a PNG image.
- Save the input URL to a text file.

## Installation

Before running the application, make sure you have [Node.js](https://nodejs.org/en/) installed on your system.

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

```sh
npm install inquirer qr-image fs
```

## Usage

To run the application, navigate to the project directory in your terminal and execute the following command:

```sh
node index.js
```

Follow the on-screen prompt and enter the URL for which you want to generate the QR code. The QR code will be saved as `qr_image.png` in the project directory, and the URL will be saved in a text file named `url.txt`.

## Error Handling

If an error occurs during the execution, the error will be logged to the console. If the prompt couldn't be rendered, it might be due to the current environment not supporting TTY.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) for any outstanding issues or to open a new one.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) for user input.
- [qr-image](https://github.com/alexeyten/qr-image) for QR code generation.
- [Node.js](https://nodejs.org/en/) for runtime environment.
