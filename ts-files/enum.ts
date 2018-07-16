enum DaysOfTheWeek {
    // SUN, MON, TUE, WED, THU, FRI, SAT
    // OR
    SUN = 100, MON, TUE, WED, THU, FRI, SAT
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.MON;

if(day === DaysOfTheWeek.MON){
    console.log("Have to go to work");
}