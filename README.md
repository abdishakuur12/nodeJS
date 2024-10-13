# nodeJS
# calculateWorkTarget(startingDate, endingDate, yearlyTarget)

## Description:

This project calculates the working days between two dates, excluding Fridays, and allocates a proportionate target based on the provided yearly target. The function returns the total achieved target for the given period.

# Parameters:
startingDate (string): The start date in YYYY-MM-DD format.
endingDate (string): The end date in YYYY-MM-DD format.
yearlyTarget (number): The yearly target (numeric).
Returns:
workDaysInMonth: An array of the total non-Friday days in each month within the date range.
activeDaysWithinRange: An array of valid working days within the date range.
monthlyTargetArray: An array representing the target allocation for each month based on the yearly target.
finalTarget: The total target achieved for the given period.
# Example of Usage:
console.log(calculateWorkTarget('2024-01-01', '2024-03-31', 5220));

