# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

----
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
----

# How to use this webiste to update content???

----

## How to add Blog in existing Blog folder?
  1. Select either technical or extra Blog inside the blog folder
  2. Inside this folder you will see another folder on which you need to add content
  3. Make a file in the folder with date(y-m-d)-blogtitle.md
  4. Save the file
  5. You are good to go
  
 ----
 
 ## How to add blog folder in technical or extra blog?
  To do this you need to do 3 steps described below:
  1. Create folder and file inside technical or extra in blog folder
  
      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186205100-4ae774d5-8752-48dc-8a49-8d3fab5ebad3.png">
  
  2. Create currently created folders plugins giving routeBasePath and path in docusarous.config.js file
  
      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186205851-be43df24-8b15-47ec-9994-07ee5cc459b0.png">
  
  3. Now fill the data of the blog inside data/blogContent

      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186206210-8df783f6-5c4e-421e-b3e6-37d565bd2f3a.png">

  4. You are good to go
 
 ---
 
 ## How to add blog like technical and extra
 
 ### You can do it in 2 ways:
 1. Add a blog page that will display all the blog directly to the page even if it is inside the folder:

     a. Create a folder(raw) which contains folder(optional) and files inside blog folder:

     <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186172406-7756eb86-b8af-4b27-aba9-1d60299f5527.png">

     b. Now add information about blog page in blogstart.js file present inside data/blogCotent

     Note: (blogName(folder name), descriptive image(static/img/blogstart), slug(pointing to folderPath(raw)))

     <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186169665-a6fce889-fcfb-4067-8ab5-c7e86352939d.png">

     c. To point slug towards the raw folder you have to create  blog plugin(for multiple blog). To do so add plugins inside docusaurs.config.js file

     <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186181496-0e38a83c-2186-4b92-b549-84b5533cc7ae.png">
     
    ## Final result:
    
    <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186172572-c2ea1328-2af9-459b-ad2f-8cc24c050c76.png">

    <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186172687-e8bf4a26-cbae-42e0-9f28-7f3991c930bd.png">

    Note: the files inside rawDemo folder is also displalyed here.


  2. Add a blog page that will display all the blog according to folder present

        (Note all files directly present in root folder(raw in our case) will be excluded)
        
       a. Create a folder(raw) which contains another folder containing files inside blog folder. All of the file should be inside certain folder inside raw folder.

       b. To display each folder u have to create interface first and then link the folder path to the interface link create {name}BlogCard folder

      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186174317-b89715ba-edf7-4c63-8fd3-63ecd50b3a83.png">

       c. Create {name}BlogCard.js file inside data/blogContent folder and add the blog information(title(folder heading i.e. rawDemo in our case which is           inside raw folder), descriptive image(tatic/img/blogstart), slug(pointing to folderPath(demoRaw))

      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186175172-c3cb1b50-abd6-4993-afb1-779c1d789565.png">

       d. To point slug towards the raw folder you have to create  blog plugin same like above inside docusaurs.config.js file
      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186176118-4c91f564-2b94-42c9-bbb7-d3481784511c.png">

       e. Now point the data of {name}BlogCard.js to index.js of {name}BlogCard folder

      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186188975-0584aadb-4818-4bf6-98a5-c5b8b7c4563d.png">

       f. After doing this the last step is to add information about the {name}BlogCard folder to the blogstart.js page same like above
         <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186188685-27916d19-5604-45ee-a683-97d95b1e4df5.png"> 


 ---
 
 ## How to add projects???
  1. Create projectName.js file inside pages/projects folder and rename the slug to file name

      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186207874-ff003cd1-66b6-4985-ad93-2e7c1d95e1f0.png">

  2. Now add the information about the project in project.js file inside data folder

       Note: the slug should be all same and image to be stored in static/img/projects
       
      <img width="800" alt="image" src="https://user-images.githubusercontent.com/108686886/186208714-5089d92a-e7d7-4cee-8391-6ef4e7c25cf6.png">

  3. You are good to go
