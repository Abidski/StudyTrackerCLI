#! /usr/bin/env node
import { ParseCommand, ValidateCommand } from '../src/commands/start.js';
import { Display } from '../src/images.js';
import { ReadUserInput } from '../src/userinput.js';




//Initiate global variable needed for course info
let buffer;
let timeStamps = [];

let courseInfo = {
    course: undefined,
    courseNumber: undefined
};

let mode = {
    study: "study",
    break: "break",
    finish: "finish"
}

let status = mode.study;
//Main loop

try {
    buffer = await ParseCommand();

    console.log(buffer);

    courseInfo.course = await buffer[0];
    courseInfo.courseNumber = await buffer[1];

    console.log(courseInfo);

    await ValidateCommand(courseInfo);

    while (status != mode.finish) {

        timeStamps = await Display(status, timeStamps, mode, courseInfo);
        status = await ReadUserInput(status, mode, courseInfo);

    }
    console.clear();

} catch (e) {
    console.log(e);
}







