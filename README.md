# WDD3600
This code was from the "Node.js - The Complete Guide" by Maximilian Schwarzmuller. You can find the provided code at this link https://learning.oreilly.com/videos/node-js-the/9781838826864/9781838826864-video12_8.
This code ends at chapter 23.

# To download This Code
To download this code you will need to click the green download button and choose the option that best fits you. I recommend downloading the zipped version. to do this, click the "download zip" option. To view the code, you will need a text/code editor such as notepad++ or Visual Studio code. This code deals with Express. Node.js, Javascript, HTML, and CSS. ( You will need to install these). 

# Ready To Start?
To start this project, Go to the app.js file in your chosen editor(I used pycharm) and then enter your Mongodb database connection string. If you do not have the mongodb connection string, you can get start to download mongoosedb here: https://www.mongodb.com/try/download/compass. You will also need to create an account on stripe, for your api key, if you don't have am account, you can create one here: https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe-1803852691&utm_medium=cpc&utm_source=google&ad_content=448938759825&utm_term=aud-491317517717:kwd-94834400&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAjw7diEBhB-EiwAskVi1_rSjdEpKkrkL0eSlYhQnby94bTxYfqOWSKMdbVEOu9COdOAICWSUhoCrYkQAvD_BwE. Make sure to add your mongodb uri to the app.js and the key for the checkout.ejs file.

# To download Node Modules
You will need to download node modules to run this code. To do so, in your terminal you will need to run the command: npm install.

# File Structure
app.js
package-lock.json
package.json
READ.MD

## controller/
  - admin.js
  - auth.js
  - error.js
  - shop.js

## data/
  - cart.json
  - products.json
  - invoices
      - invoice-6095a333ac3dc21878c5be88.pdf
      - invoice-6095a333ac3dc21878c5be88.pdf
## images/
  - book2.jpeg
  - book3.jpeg
  - pexels-leah-kelley-373465.jpg
  - pexels-rikka-ameboshi-3358707.jpg

## middleware/
  - is-auth.js 

## models/
  - order.js
  - product.js
  - user.js

public/
  ## css/
      - auth.css
      - cart.css
      - forms.css
      - main.css
      - orders.css
      - product.css
  ## js/
      - admin.js
      - main.js

## routes/
  - admin.js
  - auth.js
  - shop.js

## util/
  - file.js
  - path.js

## views/
  - 404.ejs
  - 505.ejs
  - admin
      - edit-product.ejs
      - products.ejs
 ## auth/
      - login.ejs
      - new-password.ejs
      - reset.ejs
      - signup.ejs

  ## includes/
      - add-to-cart.ejs
      - end.ejs
      - head.ejs
      - navigation.ejs
      - pagination.ejs
 ## shop/
      - cart.ejs
      - checkout.ejs
      - index.ejs
      - orders.ejs
      - product-detail.ejs
      - product-list.ejs

# Database Structure

## local/
  - clustermanager
  - oplog.rs
  - replset.election
  - replset.initialSyncId
  - replset.minvalid
  - replset.oplogTruncateAfterPoint
  - startup_log

## shop/
  - orders
  - posts
  - products
  - sessions
  - shop
  - users

## messages/
  - messages
