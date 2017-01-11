const SUNDAY = Symbol();
const MONDAY = Symbol();
const TUESDAY = Symbol();
const WEDNESDAY = Symbol();
const THURSDAY = Symbol();
const FRIDAY = Symbol();
const SATURDAY = Symbol();

const today = SUNDAY;

if (today === SUNDAY) {
    console.log("It's Sunday!");
} else {
    console.log('Not Sunday...');
}
