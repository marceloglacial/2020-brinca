# Brinca's website (2020)

Brazil-Canada Community Association's website. A headless WordPress application that uses WP Rest API and Next JS.

# Live Demo

- <a href='https://brinca-2020.herokuapp.com/'>Back-end (WordPress)</a>
- <a href='https://brinca-2020.netlify.app/'>Front-end (Next)</a>


## Stack

- <a href='https://reactjs.org/'>React</a>
- <a href='https://nextjs.org/'>Next JS</a>
- <a href='https://swr.vercel.app/'>SWR data fetching</a>
- <a href='https://github.com/css-modules/css-modules'>CSS Modules</a>
- <a href='https://wordpress.org/'>WordPress</a>
- <a href='https://wordpress.org/gutenberg/'>Gutenberg Blocks</a>

# CI/CD

- <a href='https://www.heroku.com/'>Heroku</a>
- <a href='https://www.netlify.com/'>Netlify</a>

# How to use

Install NPM packages:

`npm install`

Run development environment (Next JS):

`npm run dev`

Build

`npm run build`

## WordPress Requirements

### REST API

Please be sure your permalink settings is set to `Post name`.

### Front Page

Please be sure your front page is set on `Settings > Reading > Your homepage displays`

### Must-use plugins:

- <a href='http://joebr.io/'>WP Headless</a>
- <a href='https://www.yikesplugins.com/'>WP REST API Controller</a>
- <a href='https://thebatclaud.io/'>WP-REST-API V2 Menus</a>
- <a href='http://www.danielauener.com/wordpress-rest-api-extensions-for-going-headless-wp/'>WUXT Headless WordPress API Extensions</a>

### Wordpress required Configuration

Make sure <a href='https://thebatclaud.io/'>WP-REST-API V2 Menus</a> is installed.

1. Create a menu called: 'Header'
2. Create a menu called 'Footer'
3. Define a Front page
