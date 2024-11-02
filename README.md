# ThriftStore

## Sprint 3:
  - CSS + HTML + JS for website
  - Integrate with Andrey's funcs
###  inventory page
  - ~~HTML/CSS/JS~~
  - ~~filtering by size, type, and price~~
  - ~~searching function~~
  - logout (a later thing probs) also page connection to login
  - page connection from this to item page
  - page connection from this to create item page
###  item page
  - HTML/CSS/JS
  - adding from stock (use andrey's func)
  - removing from stock (use andrey's func)
  - carry over logout func
  - page connection from this back to inventory
  - ASK ANDREY FOR SQL DATABASE INSTEAD OF PKL FOR STOCK?
###  login page
  - ~~HTML/CSS/JS~~
  - logging in (page connection from this to inventory page w/o logic for now)
  - ASK FOR SQL DATABASE FOR USER LOGIN INSTEAD OF PKL

## KNOWN PROBLEMS:
  (strikethrough once they're fixed)
  - Inventory:
    - ~~Issues with priority with filtering, currently does an "or" operation instead of "and" to find intersection~~
    - Spacing and sizing is really weird w the item boxes: when there's only a few items the boxes get super big
    - Sizing w different viewports is iffy

## FUTURE STUFF:
  - Be able to add more types (like food, clothes, furniture, toy, etc. should b easy to implement, i js dk where you would be able to do it, maybe when adding a new item to stock? you'd be able to create another category for it or edit)
  - Editing stock -  changing type, size, details, price, etc.
  - There's two sides of Poverello - the food pantry and thrift store, do we just need to duplicate it over and create new page connections + databases for the food pantry side?
  - Error handling ish - if there's no photo, should display an error photo or smth
