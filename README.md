# angular-browserify-template

This is an angular and browserify template

## Folder structure

* src: The app's source
    * pages: Each one of the app pages
        * page-name/index.js: The main file for the page. Here it is usually configured the state url.
        * page-name/index.html: The view of the page. This html file compiled to a variable in index.js, so 
        there is no need for the browser to make different calls to the server looking for html files 
* public: The final files to be executed on the client
    * js
    * css

## Development mode
To change files and stuff, just change it in src

### Build changes
Once you have made several changes, you can type ```$> npm run build ```
and browserify will compile all the source code to public/js/bundle.js

## License
MIT.

## Author
Juan Camilo Guarín Peñaranda