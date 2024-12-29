import { Command } from 'commander';
import { cosmiconfigSync } from 'cosmiconfig';

//Processes user commands using commander
export async function ParseCommand() {


    const program = new Command();

    let course;
    let courseNumber;

    program
        .option('-c , --course <type>', 'chosen class to study')
        .option('-n , --number <type>', 'class number');

    await program.parseAsync();

    course = program.opts().course;
    courseNumber = program.opts().number;
    console.log(course);
    console.log(courseNumber);

    return [course, courseNumber];
}


//Checks to see the user config
export async function ValidateCommand(course) {

    const explorerSync = cosmiconfigSync("study");
    const userConfig = explorerSync.search();

    if (course.course === undefined || course.courseNumber === undefined) {

        console.log("user didnot define class info");
        console.log(userConfig);
        console.log(userConfig.config.course);
        course[course] = userConfig.config.course;
        courseNumber[courseNumber] = userConfig.config.courseNumber;
    }
}

