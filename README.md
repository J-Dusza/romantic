# ROMantic
Website hosting rom images for retro consoles

## Purpose of the website
This website is a quick project made to learn how to implement:
- Single page application model
- Translation of the content
- Cookies functionality

## Interesting functionalities
### Translation of the content
It has been achieved using react-i18next library. The interesting part is the external tool [i18nexus](https://i18nexus.com/). Using the CLI I've connected this project with i18nexus project to keep track of multiple languages and easily translate the content - generating json files

### Cookies popup
This has been achieved using react-cookie library. It works as expected and shows popup if user hasn't yet agreed to store his data.

## Running the application
This application is designe to be run on vercel with the integration to the vercel postgresql.
It is currently running at: 
- https://romantic-games.vercel.app
