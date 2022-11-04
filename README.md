# MidTerm-Portfolio-Project
This portfolio is a school project done at Centennial College

The evaluation grid is as followed:

COMP229– Web Application Development
Assignment 1
Express Portfolio Site

Due: Week 4 (Friday October 9, 2020) @ midnight
Value 15%

Express Portfolio Site Maximum Mark: 100
Overview: Create your Personal Portfolio Website using ExpressJS and implementing the EJS templating
engine. Your site must be hosted live on a cloud service such as Microsoft Azure, Heroku, or Digital Ocean.

Instructions:

This Express site must include the pages from your Personal Portfolio 5 pages – your Home page,
an About Me page, a Projects page, a Services page, and a Contact Me page.
  1. You Site must include the appropriate content for a Personal Portfolio (17 Marks: Content)
    a. You must include a Navigation Bar or other Navigation scheme that allows the user to view
        each page of your site. (2 Marks: Content).
    b. You must include a Custom Logo for your site, this should be placed in or around the main
        Navigation bar. The Custom Logo can be as simple or artistic as you desire (e.g. you could
        use a primitive colour-filled shape like a triangle or hexagon with your initials positioned
        inside). Please do not use a logo that belongs to another company or person. (2 Marks:
        Content).
    c. Your Home Page should include some sort of welcome message and link or button that
        allows the user to redirect to your About Me Page and / or other pages. I recommend also
        including some sort of Mission Statement (2 Marks: Content).
    d. Your About Me Page should include your legal name, an image of you (I recommend a head
        and shoulders shot), a short paragraph about who you are. Keep this clean and simple as it
        may be viewed by perspective employers. (1 Mark: Content)
    e. Your About Me page should include a link to a PDF version of your Resume (1 Mark:
        Content).
    f. Your Projects Page should include images and information for at least 3 Projects you wish
        to highlight. These could be current projects you are working on or past projects you have
        completed. Include an image for each Project and a short description of your role and the
        outcome. (2 Marks: Content).
    g. Your Services Page should include a short list of services you offer (e.g. general
        programming, web development, mobile apps, etc.). I recommend including images that
        make this more appealing to view. (2 Marks: Content).
    h. Your Contact Page should include your contact information in a panel or other construct. (1
        Mark: Content).
    i. Your Contact Page should include a short interactive form that allows the user send you a
        message and provide basic contact information (First Name, Last Name, Contact Number,
        Email Address, Message, etc.). This form does not have to be fully functional initially.
        However, it should be able to capture the information entered by the user and redirect
        them back to the Home Page (4 Marks: Content).
  2. Your Portfolio site will use ExpressJS and NodeJS and your web pages have been split to use
      different View templates and partials by implementing the EJS templating engine and Express
      Routes (8 Marks: GUI, 26 Marks: Functionality):
    a. Your site should include at least 2 View templates – one for your Home Page and one for
        your Contact Me page. Note: You may include additional templates as needed to
        accommodate other site pages (13 Marks: Functionality, 8 Marks: GUI).
    b. An Express Route must exist for each page of your site. Note: You will need to use the
        router.get(path, callback(req, res, next)) method structure with a res.render(view, locals)
        method call to render each view (13 Marks: Functionality).
  3. Your site will use the new structure created by the Express Generator. Your site files will be
      migrated to work within the public, routes and views folders (26 Marks: Site Structure):
    a. Generate your site structure with the Express Generator. Note: You must use the -e option
        to ensure that you implement the EJS templating engine for Express (9 Marks: Site
        Structure).
    b. Your JavaScript, CSS and Multimedia Asset Files should be moved to separate folders
        within the public folder. Using the Twitter Bootstrap CSS framework is strongly
        recommended, though not required. Note: the public folder is part of the path and does
        not have to be referenced (6 Marks: Site Structure).
    c. You will define routes for all of your site pages in the index.js file in your routes folder (2
        Mark: Site Structure).
    d. Your views folder will contain your EJS page templates. You will create a separate folder
        named partials for all of your partial EJS files. You will need several partials including
        header.ejs, content.ejs, footer.ejs and others. (6 Marks: Site Structure).
    e. All Your Code (HTML, CSS, JavaScript, jQuery, etc.) is error free (3 Marks: Site Structure).
  4. Include Internal Documentation for your site (5 Marks: Internal Documentation):
    a. Ensure you include a comment header for your CSS and JavaScript files that indicate: the
        File name, Student’s Name, StudentID, and Date, (2 Marks: Internal Documentation).
    b. Ensure you include a section headers for all of your HTML structure, CSS style sections,
        and any JavaScript functions (1 Marks: Internal Documentation)
    c. Ensure all your code uses contextual variable names that help make the files humanreadable (1 Marks: Internal Documentation).
    d. Ensure you include inline comments that describe your GUI Design and Functionality. Note:
        Please avoid “over-commenting” (1 Marks: Internal Documentation)
  5. Share your files on GitHub to demonstrate Version Control Best Practices and push your site to a
      cloud host (4 Marks: Version Control, 4 Marks: Cloud Hosting).
    a. Your repository must include your code and be well structured (2 Marks: Version Control).
    b. Your repository must include commits that demonstrate the project being updated at
        different stages of development – each time a major change is implemented (2 Marks:
        Version Control).
    c. You must deploy your site to your Cloud Server using git (4 Marks: Cloud Hosting).
  6. Create a Short Video presentation on YouTube or another streaming provider. You must include a
      short PowerPoint (or Google Slides) Slide Deck that includes a single slide to start your video (10
      Marks: Video)
    a. The first (and only) Slide of your Slide Deck must include a current image of you (no avatars
        allowed) that is displayed appropriately on the page. You must also include your Full Name,
        Student ID, the Course Code, Course Name, and your Assignment information. (2 Marks:
        video)
    b. You will demonstrate your site’s functionality. You must show each page working properly
        (2 Marks: Video)
    c. You will describe the code in your app.js file that drives the functionality of your site (2
        Marks Video).
    d. Sound for your Video must at an appropriate level so that your voice may be clearly heard,
        and your screen resolution should be set so that your code and site details are clearly
        visible (2 Marks: Video).
    e. Your Short Video should run no more than 5 minutes (2 Marks: Video).
