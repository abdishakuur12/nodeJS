function calculateWorkTarget(startingDate, endingDate, yearlyTarget) {
    const begin = new Date(startingDate);
    const finish = new Date(endingDate);
    let today = new Date(begin);
    
    const workDaysInMonth = [];
    const activeDaysWithinRange = [];
    const monthlyTargetArray = [];
    
    let totalActiveDays = 0;
    
    while (today <= finish) {
        const year = today.getFullYear();
        const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const daysWithoutFridays = [...Array(daysInMonth).keys()].map(i => i + 1)
            .filter(day => new Date(year, month, day).getDay() !== 5).length;

        workDaysInMonth.push(daysWithoutFridays);

        const validDays = [...Array(daysInMonth).keys()].map(i => i + 1)
            .filter(day => {
                const date = new Date(year, month, day);
                return date <= finish && date.getDay() !== 5;
            }).length;

        activeDaysWithinRange.push(validDays);
        totalActiveDays += validDays;

        today.setMonth(today.getMonth() + 1);
        today.setDate(1);
    }
    
    activeDaysWithinRange.forEach(daysWorked => {
        const monthlyTarget = (yearlyTarget / 365) * daysWorked;
        monthlyTargetArray.push(monthlyTarget);
    });

    const finalTarget = monthlyTargetArray.reduce((total, target) => total + target, 0);
    
    return {
        workDaysInMonth,
        activeDaysWithinRange,
        monthlyTargetArray,
        finalTarget
    };
}

console.log(calculateWorkTarget('2024-01-01', '2024-03-31', 5220));
