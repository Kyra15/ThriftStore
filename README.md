# ThriftStore

need to organize files n remove all the prints

## Sprint 4:
  - CSS + HTML + JS for website
###  inventory page
- Features:
  - search w name or id
  - filter by type, size, or price
  - see and scroll through items
  - works with different sized windows
  - populated based on an sql database
- Things to do:
  - ~~HTML/CSS/JS~~
  - ~~filtering by size, type, and price~~
  - ~~searching function~~
  - ~~logout (a later thing probs) also page connection to login~~
    - havent done sql database stuff tho so wtv
  - ~~page connection from this to item page~~
      - ~~need to populate correct info~~
  - page connection from this to create item page
  - ~~init based on stock database (used a temp json)~~
###  item page
- Features:
  - see price, details, n images of the item
  - scroll through images
- Things to do:
  - ~~HTML/CSS/JS~~
  - adding from stock (use sql stock stuff)
  - removing from stock (use sql stock stuff)
  - ~~populate correct stock info~~
  - ~~carry over logout func~~
  - ~~page connection from this back to inventory~~
###  login page
- Features:
  - login 🤯
  - hide or show password ig
  - sql connected to db
  - page validation links back to here
- Things to do:
  - ~~HTML/CSS/JS~~
  - ~~logging in (page connection from this to inventory page)~~
  - ~~validation!~~
  - ~~sql db~~
  - password hashing + safety
 
###  create/edit page
- Features:
- Things to do:
  - HTML/CSS/JS
  - carry over logout func
  - saving stuff to the sql or pkl thing
  - page connection between inventory
  - page receive based on if editing or creating new

## KNOWN PROBLEMS:
  (strikethrough once they're fixed)
  - Inventory:
    - ~~Issues with priority with filtering, currently does an "or" operation instead of "and" to find intersection~~
    - Spacing and sizing is really weird w the item boxes: when there's only a few items the boxes get super big (not sure if this is a problem tho)
    - Sizing w different viewports is iffy
    - searches based off of price???? ik what the problem is tho i js need to fix it

## FUTURE STUFF:
  - ~~page validation~~
  - Be able to add more types (like food, clothes, furniture, toy, etc. should b easy to implement, i js dk where you would be able to do it, maybe when adding a new item to stock? you'd be able to create another category for it or edit)
  - Editing stock - changing type, size, details, price, etc.
  - ~~Clear filters button (daniel's idea)~~
  - ~~Multiple photos per item~~
  - There's two sides of Poverello - the food pantry and thrift store, do we just need to duplicate it over and create new page connections + databases for the food pantry side?
  - Error handling ish - if there's no photo, should display an error photo or smth n more stuff
  - BUG TESTING!!!!!
  - There should be some way of viewing who added stuff n when like pwp log (PCI compliant!!!!!)
  - There should be something in the corner with the current users name
  - Search based off of tags
  - Create new user
  - fast api??????
