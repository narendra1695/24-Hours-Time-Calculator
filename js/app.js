function getDiff(current, next) {
    return Math.abs(current - next);
}

function getSum(current, next) {
    return current + next;
}

function workLogic() {
    //variables for daily hours and minutes
    let mondayHours = [];
    let mondayMinutes = [];

    let tuesdayHours = [];
    let tuesdayMinutes = [];

    let wednesdayHours = [];
    let wednesdayMinutes = [];

    let thursdayHours = [];
    let thursdayMinutes = [];

    let fridayHours = [];
    let fridayMinutes = [];

    //vairable for total hours and minutes
    let resultH = document.getElementById("resultH");
    let resultM = document.getElementById("resultM");

    //variable for over 59 minutes conversion to hours
    let hours = 0;

    //looping for monday hours and minutes
    for (var i = 1; i <= 2; i++) {
        mondayHours[i] = parseInt(document.getElementById("hour" + i).value);
        mondayMinutes[i] = parseInt(document.getElementById("min" + i).value);
    }
    mondayHours = mondayHours.reduce(getDiff);
    mondayMinutes = mondayMinutes.reduce(getDiff);

    //looping for tuesday hours and minutes
    for (var i = 3; i <= 4; i++) {
        tuesdayHours[i] = parseInt(document.getElementById("hour" + i).value);
        tuesdayMinutes[i] = parseInt(document.getElementById("min" + i).value);
    }
    tuesdayHours = tuesdayHours.reduce(getDiff);
    tuesdayMinutes = tuesdayMinutes.reduce(getDiff);

    //looping for wednesday hours and minutes
    for (var i = 5; i <= 6; i++) {
        wednesdayHours[i] = parseInt(document.getElementById("hour" + i).value);
        wednesdayMinutes[i] = parseInt(document.getElementById("min" + i).value);
    }
    wednesdayHours = wednesdayHours.reduce(getDiff);
    wednesdayMinutes = wednesdayMinutes.reduce(getDiff);

    //looping for thursday hours and minutes
    for (var i = 7; i <= 8; i++) {
        thursdayHours[i] = parseInt(document.getElementById("hour" + i).value);
        thursdayMinutes[i] = parseInt(document.getElementById("min" + i).value);
    }
    thursdayHours = thursdayHours.reduce(getDiff);
    thursdayMinutes = thursdayMinutes.reduce(getDiff);

    //looping for friday hours and minutes
    for (var i = 9; i <= 10; i++) {
        fridayHours[i] = parseInt(document.getElementById("hour" + i).value);
        fridayMinutes[i] = parseInt(document.getElementById("min" + i).value);
    }
    fridayHours = fridayHours.reduce(getDiff);
    fridayMinutes = fridayMinutes.reduce(getDiff);

    totalHours = mondayHours + tuesdayHours + wednesdayHours + thursdayHours + fridayHours;
    totalMinutes = mondayMinutes + tuesdayMinutes + wednesdayMinutes + thursdayMinutes + fridayMinutes;

    totalMinutes = totalMinutes / 60;
    hours = Math.floor(totalMinutes);

    totalMinutes = totalMinutes - hours;
    totalMinutes = totalMinutes * 60;
    totalMinutes = Math.round(totalMinutes);

    finalMinutes = ("0" + totalMinutes).slice(-2);

    totalHours = totalHours + hours;

    resultH.innerHTML = totalHours;
    resultM.innerHTML = finalMinutes;
}