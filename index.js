/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(testEmployee){
    let employee = {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createEmployeeRecords(employeeArr) {
    return employeeArr.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createTimeObj(typeOf, date){
    const dateStamp = date.split(' ')
    const hourStamp = dateStamp[1]
    const hourStampNum = parseInt(hourStamp, 10);  
    
    
return {
          type: typeOf,
          hour: hourStampNum,
          date: dateStamp[0]
       }
  
}

function createTimeInEvent(date) {
    this.timeInEvents.push(createTimeObj('TimeIn', date))
      return this
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push(createTimeObj('TimeOut', date))
      return this
}

function hoursWorkedOnDate(day) {
    const timeIn = this.timeInEvents.find(time => time.date === day)
    const timeOut  = this.timeOutEvents.find(time => time.date === day)    
    
    return (timeOut.hour/100) - (timeIn.hour/100);
}

function wagesEarnedOnDate(day) {
    const timeWorked = hoursWorkedOnDate.call(this, day)
    const wagesEarned = this.payPerHour
    return wagesEarned * timeWorked
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(name => name.firstName === firstName)
}

function calculatePayroll(employeeArr2) {
    const totalPay = employeeArr2.map(emp => allWagesFor.call(emp))
    return totalPay.reduce((accumulator, element) => accumulator + element)}