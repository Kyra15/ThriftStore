# ThriftStore

## Sprint 3:
  - CSS + HTML + JS for website
  - Integrate with Andrey's funcs
###  inventory page
- Features:
  - search w name or id
  - filter by type, size, or price
  - see and scroll through items
  - works with different sized windows
  - populated based on a json database (temporary)
- Things to do:
  - ~~HTML/CSS/JS~~
  - ~~filtering by size, type, and price~~
  - ~~searching function~~
  - ~~logout (a later thing probs) also page connection to login~~
    - havent done sql database stuff tho so wtv
  - ~~page connection from this to item page~~
      - need to populate correct info
  - page connection from this to create item page
  - ~~init based on stock database (used a temp json)~~
###  item page
- Features:
  - see price, details, n images of the item
  - scroll through images
- Things to do:
  - ~~HTML/CSS/JS~~
  - adding from stock (use andrey's func)
  - removing from stock (use andrey's func)
  - populate correct stock info
  - ~~carry over logout func~~
  - ~~page connection from this back to inventory~~
  - ASK ANDREY FOR SQL DATABASE INSTEAD OF PKL FOR STOCK?
###  login page
- Features:
  - login 🤯
  - hide or show password ig
- Things to do:
  - ~~HTML/CSS/JS~~
  - ~~logging in (page connection from this to inventory page)~~
  - validation!
  - ASK FOR SQL DATABASE FOR USER LOGIN INSTEAD OF PKL
 
###  create/edit page
- Features:
- Things to do:
  - HTML/CSS/JS
  - carry over logout func
  - saving stuff to the sql or pkl thing
  - page connection between inventory
  - page recive based on if editing or creating new

## KNOWN PROBLEMS:
  (strikethrough once they're fixed)
  - Inventory:
    - ~~Issues with priority with filtering, currently does an "or" operation instead of "and" to find intersection~~
    - Spacing and sizing is really weird w the item boxes: when there's only a few items the boxes get super big
    - Sizing w different viewports is iffy

## FUTURE STUFF:
  - Be able to add more types (like food, clothes, furniture, toy, etc. should b easy to implement, i js dk where you would be able to do it, maybe when adding a new item to stock? you'd be able to create another category for it or edit)
  - Editing stock -  changing type, size, details, price, etc.
  - ~~Multiple photos per item~~
  - There's two sides of Poverello - the food pantry and thrift store, do we just need to duplicate it over and create new page connections + databases for the food pantry side?
  - Error handling ish - if there's no photo, should display an error photo or smth n more stuff
  - BUG TESTING!!!!!
