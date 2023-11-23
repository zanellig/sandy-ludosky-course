# TITLE
These are the exercice files for the LinkedIn Learning course *Course Title*. The full course is available from [LinkedIn Learning][lil-course-url].


## Installing
### To use these exercise files, you must have the following installed:
   - A code editor ([VS Code](https://code.visualstudio.com/) is recommended)
   - [Node.js](https://nodejs.org/en/)
 
### Install dependencies

`npm install` or `npm i`

### Add Firebase to your JavaScript project

#### In chapters 5 and 6 :  

- you need add the firebase configuration to initialize Firebase and start to use the SDKs and services like Cloud Firestore, Cloud Storage, Firebase Auth and Firebase Hosting

- To get the snippet for your app's Firebase config object, follow this link : [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup?authuser=0&hl=en#add-sdks-initialize)


        ```
        import { initializeApp } from 'firebase/app';

        const firebaseConfig = {
            // firebase configration HERE
        };

        const app = initializeApp(firebaseConfig);
        ```  

#### In chapters 6 and beyond:  

- you need to update the React environment variables in the `.env` file

- The `.env` file is added to the `.gitignore` file and will never be staged or committed

- Sensive data such as your Firebase project configuration should always remain secret and kept in your local environment only

- To create and update the React Environment Variables, follow this link : [Adding Custom Environment Variables](https://create-react-app.dev/docs/)

- To run the project successfully, please do the following steps :

    - `npm install` or `npm i`

    - update `.env` file with your Firebase project settings 



[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://

### Instructor

**Sandy Ludosky**

_Web Developer and Trainer_

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/sandy-ludosky).