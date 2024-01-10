# Message App

A simple web app built with HTML, Materialize CSS, and Vanilla JavaScript for sharing encrypted messages with friends.

## Features

- **Secure Messaging:** Utilizes JavaScript's inbuilt functions for character encoding to secure messages.
- **Material Design:** Stylish and responsive user interface crafted with Materialize CSS.
- **Easy Sharing:** Generate shareable links with encrypted messages embedded in the URL hash.

## Usage

1. Enter your secret message in the input field.
2. Submit the form to generate a link with the encrypted message.
3. Share the link with friends, and they can decrypt the message by visiting the link.

## How it Works

- The app uses `atob` and `btoa` functions for base64 encoding/decoding.
- The encrypted message is embedded in the URL hash for easy sharing.

## Tech Stack

- HTML
- Materialize CSS
- Vanilla JavaScript

## Quick Start

1. Clone the repository.
2. Open `index.html` in your web browser.

Feel free to contribute or customize the app according to your needs!