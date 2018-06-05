#Instructions

All files are located on github at [github] (https://github.com/LocalDemoService/localdemoservice).

All deployment settings are at [netlify] (https://app.netlify.com/sites/hungry-meninsky-2f7f36).

## Blog
- go to https://localdemoservice.com/admin/
-- the trailing slash is required
- add blog content
-- I think the tags are required
- publish
- wait for the site to build and publish
- check the site for the new blog post

## To modify content, 
- log into the github account.
- navigate to the file
- click the 'Edit this file' option (looks like a pencil)
- modify content
-- many of the pages hold the data at the top of the page
-- i.e. 
```javascript
  const teamMembers = [
  {
    name: "Matthew Kubik",
    role: "Founder and President of Local Demo Service",
    bio: "His mission is to convert everyday shoppers into sustainable eaters.",
    image: "matthew"
  },
]
```
-- modify the appropriate value
--- these often require all of the fields to be present. If you have no bio, for example, use ```javascript { bio: '' }```
--- the Careers page does not require any values at all. 
--- If you have no job openings, use ```javascript jobOpenings = []```
- when done, add values to the 'Commit changes' section
-- i.e. 'Updated bio', add any additional comments in the text area as necessary
- keep the 'Commit directly to the master branch'
- click 'Commit changes' button

This will save the file and within a few minutes, will publish to the live site.

## How do I know where the files to update are?
The files are in a few places, due to the way Gatsby builds the site.
All files should be in the /src/ folder.
Use the github search feature. The files are often called what they represent. `Welcome text` is at Welcome.js for example.

- Homepage sections (Welcome, Services, Partners)
-- src/components/Home/...

- Individual pages (Careers, Locations...)
-- src/pages/...

- Header/Footer
-- src/components/...

- Forms
-- src/components/Forms

## Images
Images are a little tough. There's often a couple of steps to add an image to the page.

You should probably contact me to update images.

-- located at src/images
--- click the 'Upload files' button
--- select the image
--- locate the page or component you want to add the image to
--- add ```javascript import <imageName> from '<image/location>'``` to the top of the file

If you're adding to an existing data object, add the appropriate values.

If you're not, contact me.


