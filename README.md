# nodeJS
# calculateWorkTarget(startingDate, endingDate, yearlyTarget)

## Description:

This function calculates the working days (excluding Fridays) between two dates and allocates a target proportionally based on the yearly goal. The goal is distributed across valid working days for each month within the specified date range.

## Parameters:
- `startingDate` (string): The start date in `YYYY-MM-DD` format.
- `endingDate` (string): The end date in `YYYY-MM-DD` format.
- `yearlyTarget` (number): The total target for the year.

## Returns:
- `workDaysInMonth`: An array of the total non-Friday days in each month within the date range.
- `activeDaysWithinRange`: An array of valid working days within the date range.
- `monthlyTargetArray`: An array representing the target allocation for each month based on the yearly target.
- `finalTarget`: The total target achieved for the given period.
