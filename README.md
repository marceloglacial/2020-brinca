# Brinca's website (2020)

Brazil-Canada Community Association's website. A headless WordPress application that uses WP Rest API and Next JS.

## Live Demo

- <a href='https://brinca-2020.herokuapp.com/'>Back-end (WordPress)</a>
- <a href='https://brinca-2020.netlify.app/'>Front-end (Next)</a>


## Stack

- Front-end
  - <a href='https://reactjs.org/'>React</a>
  - <a href='https://nextjs.org/'>Next JS</a>
  - <a href='https://swr.vercel.app/'>SWR data fetching</a>
  - <a href='https://github.com/css-modules/css-modules'>CSS Modules</a>
- Back-end
  - <a href='https://wordpress.org/'>WordPress</a>
  - <a href='https://wordpress.org/gutenberg/'>Gutenberg Blocks</a>
- CI/CD
  - <a href='https://vercel.com/'>Vercel</a>

## How to use

### 1. Install NPM packages:

`npm install`


### 2. Set local env file 

1. Rename `.env.example` to `.env.local`
2. Change `NEXT_PUBLIC_WORDPRESS_URL` to your local WordPress address. Ex: `http://localhost:8080`


### 3. Run development environment

`npm run dev`

### 4. Setup WordPress

#### 4.1. REST API

Please be sure your permalink settings is set to `Post name`.

#### 4.2. Front Page

Please be sure your front page is set on `Settings > Reading > Your homepage displays`

#### 4.3. Must-use plugins:

- <a href='http://joebr.io/'>WP Headless</a>
- <a href='https://www.yikesplugins.com/'>WP REST API Controller</a>
- <a href='https://thebatclaud.io/'>WP-REST-API V2 Menus</a>
- <a href='http://www.danielauener.com/wordpress-rest-api-extensions-for-going-headless-wp/'>WUXT Headless WordPress API Extensions</a>

#### 4.4.Wordpress required Configuration

Make sure <a href='https://thebatclaud.io/'>WP-REST-API V2 Menus</a> is installed.

- Create a menu called: 'Header'
- Create a menu called 'Footer'
- Define a Front page

## How to Build

`npm run build`
