# Folder layout

First of all, nwb cli tool is used for generating starter app.Basically I'm using it because it has support not just
for React but also for inferno js and preact which I experiment with from time to time.

- src: Source folder with all of the react components and scss source files
- tests: test folder generated by nwb (It's useless in this case because I'm not writing any tests)
- public: Public or dist folder generated by npm build script which generates compressed files and stuff.

# Scss
I'm using scss as my main preprocessor.Every import have description inside.
I will not use any framework, instead I'm going to import some of my modules which I made over the last year.
Regarding grid I will provide 2 versions of grid ( simple flexbox one and standard 12column float grid which is made
in form of a mixin.Details inside scss/components/_grid.scss)
Vars will contain variables and colors for the whole page (maybe every page should have its own variables at the top of 
the document ? )

# React layouts
Main layout is acting simply like a page wrapper.
Since this is UI kit with bunch of components and no particular spacing issues
Im just importing all the sections inside this main layout.Every section Holds components binded to that section.
For example VideSection will hold 2 components VideoPlayer and RecentVideos  etc...

# Components and functionalities
### Video section
Just dummy scss styles without any particularfunctionality.It can play basic video for now but controls needs to get done.
I will try to update it as soon as possible
### Product slider section
Fully styled components with custom react carousel component used for both of them.You can pass any content inside carousel component and it should use them as slides.Title, description, price etc are simply props passed to product card component for rendering any kind of product
### Newsletter section
Stateless component on the left for rendering article blog post. You should pass title and body of the post to render it anywhere on the page.
Newsletter form is similar to article component.It also uses button indicator component for changing button state when clicking on it(kinda like simulating sending mail and stuff)
### Filters section
Datepicker is one of the larges components and took me the most of my due time.Its fully functional.I used moment.js for the date formatting and localization if needed.
Filters component is also functional.It uses collapsible component(basically and accordion), also written by me.You can clear all filters or select some of them to turn them active.Slider input is disabled by default.It should update as you move slider thumb left or right.
Collapsible component is fully functional accordion component.Basically you can pass any kind of div inside it and it should become collapsible.
### Features section
Simple stateless components, Pass icon, title and body and it should render it accordingly
### Charts section
One of the most hardest parts of this task.It's basically functional svg area,bar and pie charting component.It consists of many components inside Charts folder.Filters are fully working, changing the dataset provided to component and animating the data again
### Articles section
Dummy components used simply for passing props to and rendering blog posts
