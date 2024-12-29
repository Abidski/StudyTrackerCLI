import chalk from 'chalk';

//Create main timer display
export async function Display(status, timeStamps, mode, course) {

    console.clear();
    //console.log(status);
    //console.log(mode.study);

    const currentTime = {
        date: new Date(Date.now()),
        stringTime: new Date(Date.now()).toLocaleTimeString()
    };


    timeStamps.push({
        [status]: currentTime
    });

    console.log(timeStamps);

    if (status == mode.study) {


        console.log(chalk.magenta(`
                        _________
                       / ======= \\
                      / __________\\
                     | ___________ |
                     | | -       | |
                     | |         | |
                     | |_________| |________________________
                     \\=____________/   brian macdonald      )
                     / """"""""""" \\                       /
                    / ::::::::::::: \\                  =D-'
                   (_________________)

                    ${course.course}  ${course.courseNumber}

             Session started @ ${timeStamps[0][mode.study]['stringTime']}              
          `));

    } if (status == mode.break) {


        console.log(chalk.magentaBright(`
                         )  (
                        (   ) )
                         ) ( (
                    mrf_______)_
                    .-'---------|  
                   ( C|/\\/\\/\\/\\/|
                    '-./\\/\\/\\/\\/|
                      '_________'
                       '-------'

                    ${course.course}  ${course.courseNumber}

             Break started @ ${timeStamps[timeStamps.length - 1][mode.break]['stringTime']}              
          `));

    }

    return timeStamps;
}
