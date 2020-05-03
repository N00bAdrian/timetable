# Change Log
### 3/5/2020
- Added pop-up modal that shows event details when a timetable event is clicked.
### 27/4/2020
- Added validation check to ensure end time is greater than start time.


# Timetable Web App
Timetable app set up as a computer science assessment
- Server-side language: NodeJS (Javascript)
- Database: SQLite
- Client-side language: Javascript

### Current Features
- User inputs details about lessons through a form (lesson name, teacher, day , start time, end time)
- Details are stored in a database 
- App takes data from database and displays it as a timetable
  
## Running the Web App
You can see the demo [here](https://intense-temple-71858.herokuapp.com/)

## Running the App Locally
In the case where the web app cannot be accessed online, you can still download the code and run it locally.

Firstly, download the source code by clicking the green button and clicking the "Download ZIP" option. Unzip the package.

Secondly download the installer for NodeJS and the Node Package Manager (NPM) [here.](https://nodejs.org/en/) Pick the LTS option.

Run the installer, remember to include NPM in the installation.

After installation is complete, open Command Prompt/Terminal and check the installation of NodeJS by running the following command:

```bash
node -v
```

You should get a response like below, the numbers do not have to be exactly the same:

```bash
v8.10.0
```

Do the same thing for NPM:

```bash
npm -v
> 6.14.4
```

Once both NodeJS and NPM are confirmed to be installed, move to the directory where the unzipped code is located

```bash
cd c:/Users/<Your name>/Downloads/timetable-master/timetable-master (For windows)

cd /Users/<Your name>/Downloads/timetable-master/timetable-master (For MacOS)
```

You can check whether you are in the right location by typing `ls`. There should be some folders and the file `app.js`.

If you are in the right location type the command

```bash
npm install
```

Then run command

```bash
npm run start
```

If everything goes smoothly the last two lines of the output should be

```bash
> App listening in port 3000
> Connected to database
```

Go to your web browser of choice and type in `localhost:3000` to access the web app.

## Potential additions (Ranked in order of priority)

- Add button such that user can delete entries
- More comprehensive data validation – input form currently only performs field presence check, would like to add more in-depth validation methods e.g. start time being earlier than end time and no two events clashing
- Transition from personal timetable app to school-wide timetable/lesson management system
- Introduce student/teacher accounts such that student/teacher has their own timetable and make them refer to the same database of lessons
- Introduce administrator account and restrict management of lessons and accounts to the administrator only (Adding/removing lessons from database, adding/removing new student/teacher accounts)
- Only allow students/teachers to enroll/drop lessons (or just allow them access to their timetable not sure yet)
- Improve timetable styling
