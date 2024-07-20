# Collaborative Note-Taking App
# Tamar Ayache
This project is a simple collaborative note-taking app that allows multiple users to create, edit, and share notes in real-time. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Key Features
- **User Authentication**: Implemented using Firebase Authentication to handle user login and registration.
- **Note Creation and Management**: Users can create, edit, and delete notes. Notes are organized into categories.
- **Real-Time Collaboration**: Real-time editing of notes is enabled using Firebase Firestore.
- **Version History**: Keeps track of changes to notes with a basic version history feature.
- **User Interface**: Clean and intuitive design using HTML, CSS, and JavaScript (React.js).

## Technologies Used
- **Front-end**: HTML, CSS, JavaScript (React.js)
- **Back-end**: Firebase Firestore for real-time database, Firebase Authentication for user management
- **Tools**: Text editor or IDE, version control (e.g., Git)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Firebase Setup

1. **Create a Firebase project**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Click on "Add project" and follow the setup instructions.

2. **Install Firebase SDK**:
    ```bash
    npm install firebase
    ```

3. **Configure Firebase**:
    - Add your Firebase configuration to your project. Create a file named `config.json` in the `src` directory and add the following code:

    ```json
    {  
        "apiKey": "YOUR_API_KEY",
        "authDomain": "YOUR_AUTH_DOMAIN",
        "projectId": "YOUR_PROJECT_ID",
        "storageBucket": "YOUR_STORAGE_BUCKET",
        "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
        "appId": "YOUR_APP_ID",
        "measurementId": "YOUR_MEASUREMENT_ID"
    }
    ```

## Usage

1. **Start the app**:
    ```bash
    npm start
    ```

2. **Login/Register**:
    - Use the login and registration form to create an account or log in.

3. **Create, Edit, and Delete Notes**:
    - Add, edit, and delete notes in real-time.

4. **Collaborate**:
    - Multiple users can collaborate on notes in real-time.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
