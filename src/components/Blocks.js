
import Database from "../assets/database.svg";
import Action from "../assets/action.svg";
import Twitter from "../assets/twitter.svg";
import Grabme from '../assets/grabme.svg';
import Eye from '../assets/eye.svg';
import Eyeblue from '../assets/eyeblue.svg'
import Time from '../assets/time.svg';
import Errors from '../assets/error.svg';
import Log from '../assets/log.svg';


export const triggers = [
    {
        value: 1,
        icon1: Grabme,
        icon2: Eye,
        blocktitle: 'New visitor',
        blockdescription: 'Triggers when somebody visits a specified page',
    },
    {
        value: 2,
        icon1: Grabme,
        icon2: Action,
        blocktitle: 'Action is performed',
        blockdescription: 'Triggers when somebody performs a specified action',
    },
    {
        value: 3,
        icon1: Grabme,
        icon2: Time,
        blocktitle: 'Time has passed',
        blockdescription: 'Triggers after a specified amount of time',
    },
    {
        value: 4,
        icon1: Grabme,
        icon2: Errors,
        blocktitle: 'Error prompt',
        blockdescription: 'Triggers when a specified error happens',
    },
];

export const actions = [
    {
        value: 5,
        icon1: Grabme,
        icon2: Database,
        blocktitle: 'New database entry',
        blockdescription: 'Adds a new entry to a specified database',
    },
    {
        value: 6,
        icon1: Grabme,
        icon2: Database,
        blocktitle: 'Update database',
        blockdescription: 'Edits and deletes database entries and properties',
    },
    {
        value: 7,
        icon1: Grabme,
        icon2: Action,
        blocktitle: 'Perform an action',
        blockdescription: 'Performs or edits a specified action',
    },
    {
        value: 8,
        icon1: Grabme,
        icon2: Twitter,
        blocktitle: 'Make a Tweet',
        blockdescription: 'Makes a tweet with a specified query',
    },
];

export const loggers = [
    {
        value: 9,
        icon1: Grabme,
        icon2: Log,
        blocktitle: 'Add new log entry',
        blockdescription: 'Adds a new log entry to this project',
    },
    {
        value: 10,
        icon1: Grabme,
        icon2: Log,
        blocktitle: 'Update logs',
        blockdescription: 'Edits and deletes log entries in this project',
    },
    {
        value: 11,
        icon1: Grabme,
        icon2: Errors,
        blocktitle: 'Prompt an error',
        blockdescription: 'Triggers a specified error',
    },
];
