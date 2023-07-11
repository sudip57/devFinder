# devFinder

DevFinder is a React project that utilizes the GitHub API to search for GitHub users and provide their complete details. With DevFinder, you can easily find and explore the profiles of developers on GitHub.

## Features

- Search for GitHub users by their usernames.
- View detailed information about each user, including their profile picture, bio, location, number of followers, number of repositories, and more.
- Explore the repositories owned by the user and view their details, such as the number of stars, forks, and issues.
- Click on repository links to visit the repository directly on GitHub.
- Responsive design for a seamless experience on different devices.


## Installation
To run DevFinder locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/sudip57/devFinder.git
```
2. Change to the project directory:
```bash
cd devFinder
```
3. Install the dependencies:
```bash
npm install
```
4. Obtain a personal access token from GitHub by following the instructions in the [GitHub Developer Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). 

5. Create a ```.env``` file in the root directory of the project and add your personal access token:
```bash
VITE_REACT_APP_GITHUB_TOKEN=your_personal_access_token
```
6. Start the development server:
```bash
npm start
```
7. Open your web browser and visit http://localhost:3000 to see the app in action.


## Screenshots
Homepage
![image](https://github.com/sudip57/To-Do-List/assets/79646606/327f5fb5-78ca-4207-b0ab-d34098c83812)

Searchpage
![image](https://github.com/sudip57/To-Do-List/assets/79646606/0f0b0a71-628c-4c0f-8188-95a362278e3c)

User Details Page
![github](https://github.com/sudip57/To-Do-List/assets/79646606/2f694471-c37b-436e-9e6e-7728599cfe74)


## Acknowledgements
It utilizes the powerful [GitHub API](https://api.github.com) to provide detailed information about developers and their projects



## Technologies Used

- React
- JavaScript
- HTML
- Tailwind CSS

