# Grace Shopper Tiers

## Tier 1: MVP Shopping Experience

### As a customer/visitor, I want to be able to:
- access a deployed version of the website so I can browse and purchase products.
- view all available products so I can pick from a variety.
- view a single product so I can see more details.
- add a product to my cart so I can collect my desired products in one place.
- edit my cart if I change my mind:
  - change the quantity of a product in my cart.
  - remove a product in my cart.
  - *No one else should be able to edit my cart except me.*
- "checkout" the items in my cart so I can purchase my desired goods.
  - *Think of a typical user experience on popular websites from a guest user and logged-in user perspective.*
  - *You can just start with by simulating the experience of checking out with a simple confirmation page.*
- create an account so I can have a logged-in experience.

### As a logged-in customer, I want to be able to:
- have a persistent cart so I can revisit and pick up where I left off.
  - *Logged-in-user across multiple devices: I'm logged in on my mobile device and add some items to my cart. When I open the browser on my laptop and log in, I want to see those items in my cart.*
  - *No one else should be able to edit my cart except me.*

### As an administrator, I want to be able to:
- have validated data to ensure reliability.
  - *i.e. each customer that creates an account should only be able to do so once with a single email address.*
- have full rights to make backend requests to add, edit, and remove products.
  - *No one else should have access.*
- view user information.
  - *No one else should have access.*

### As an engineer, I want to:
- have a well-seeded database so that I am able to simulate a number of different scenarios for the user stories below.
  - *By doing this, you really set yourselves up to tackle many of the points throughout the tiers. In the long run, this will save you, potentially, tons of time.*
  - *For example, seed hundreds of products with dummy data so that when you get to the “pagination” user story, you won’t have to worry about adding more products.*
  - *Likewise, add a bunch of users with products in their carts so editing the cart can be worked on without already having the “add to cart” functionality built out.*
- user data to be secure so that no one can unrightfully manipulate information.
## TIER 2: E-Commerce Essentials

<details><summary>Click Here To Open</summary>

### As a customer, I want to be able to:
- see all products that belong to a certain category.
  - *Keep this simple. For example, a product can only belong to one category.*
- explore an aesthetically pleasing website so I can easily navigate around and enjoy the experience (UI/UX).
  - *This includes front-end data validations. For example, if certain fields of a form are required and must be in a specific format, this is obvious to the user.*
- have a persistent cart so I can revisit and pick up where I left off.
  - *There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following cases:*
    - **Guest-only:** I don't want to create an account, but I want my cart to persist between browser refreshes.
      - Look into front-end storage for this one.
    - **Guest-to-logged-in-user:** Initially, I'm not logged in, and I add items to my cart. When I eventually log in, I want to see those same items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged in session.

### As a logged-in customer, I want to be able to:
- see my order history so I can remember my previously purchased items and their prices at the time of purchase.
- view and edit my user profile so I can update my information when necessary.

### As an administrator, I want to be able to:
- allow customers to have a variety of payment method options in order to increase checkout conversion.
  - *Begin by integrating Stripe, and, if interested, dive into integrating PayPal, Venmo, Braintree, or Bitcoin.*
- edit products and manage users through a dashboard so I can easily make changes and assessments as necessary.

</details>

## TIER 3: Extra Features & Flair

<details><summary>Click Here To Open</summary>

### As an administrator, I want to be able to:
- ensure accurate product inventory so that we can be sure only available products are sold.
  - *For example, when a customer purchases an item, the quantity available is appropriately deducted.*
  - *Likewise, if a customer attempts to purchase a higher quantity of an item that is available, they will be alerted/notified that there isn't enough inventory.*
- offer customers discounts through promo codes so that we can incentivize purchases.

### As a customer, I want to be able to:

#### Receive Notifications
- receive an email confirmation when placing an order so that I can easily reference it when needed without visiting my account.
- be notified when certain events occur so that I am informed of my actions.
  - *For example, when I add a product to my cart, there is a toast notification that pops up in the corner of the page with an appropriate message for that action.*

#### Have A Seamless Experience
-  navigate the website successfully, in a way that is accessible and inclusive.
    - *This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).*
    - *[A11y Checklist](https://a11yproject.com/checklist)*
- view a display to know when content is loading or there is an error so that I can manage my expectations.
  - *For example, loading spinners while the frontend is waiting for a backend response.*
  - *As a customer, if I visit a product page that doesn't exist, notify me that it doesn't and bring me to all products. Likewise, if I visit a page that outright doesn't exist, navigate me to the landing page.*

#### Have A User-Friendly Experience
- filter through all products.
  - *This is an opportunity to dive into a "search" input field. You can filter all products using vanilla JavaScript, or look into Algolia (search-as-a-service).*
- browse through all products in a digestible way so that I am not overwhelmed with an endless list of products.
  - *Dive into pagination here!*
  - *This goes back to the initial seed in Tier 1. If you have a database seeded with thousands of products, there shouldn't be any blockers in order to tackle this user story. It also begs the question of whether we should fetch all of the products from the database or limit the response in intervals (e.g. 25 at a time) and show more only through a user action (e.g. clicking a “Next”/”Show More” button).*
  - *Keep in mind, if you already have the product filter feature built out, can you get pagination to work on the results as well?*
- view featured products so that I can get inspiration.
  - *For example, display the five most purchased products within a given period of time (i.e. yesterday or last week), or the most recently added products.*
- add products to a wishlist so that I can differentiate products I would like to purchase now (cart) versus products I might be interested in purchasing in the future (wishlist).

</details>

## TIER 4: S Tier

<details><summary>Click Here To Open</summary>

### As a customer, I want to be able to:
- post products to my social media accounts so that I can share with my friends/followers.
  - *For example, integrating Facebook to create a post of a product's name, description, photo and link.*
- receive recommended products so that I can have a customized user experience and get inspiration.
  - *For example, based on products viewed (similar products; matching "tags").*
- feel like the website experience is customized for my native language.
  - **Internationalization (i19n)**
    - *The process of designing and building an application to facilitate localization. The main concern is that applications can be adapted to various languages and regions without engineering changes.*
  - **Localization (i10n)**
    - *The cultural and linguistic adaptation of an internationalized application to two or more culturally-distinct markets.*
    - *For example, the website while the main language of the United States and United Kingdom is English, the currency ($ vs. £) and date format (12/31/2020 vs. 31/12/2020) vary.*
  - *[Mozilla Internationalization & Localization Guidelines](https://www-archive.mozilla.org/docs/reflist/i18n/)*

### As an administrator, I want to be able to:
- visualize relevant KPIs (key performance indicators) in the admin dashboard so that I can make educated business decisions.
  - *For example, a line graph of total sales over time.*

### As a CEO/CTO, I want:
- the website to allow for multi tenancy so that we can potentially white label the application and allow users to create "shops."
  - *Think Etsy and Amazon, where the sellers can have their own "shops" within the platforms.*

</details>
