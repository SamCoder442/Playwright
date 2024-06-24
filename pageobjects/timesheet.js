const {hrmsUrl, userid, password, AdminUser, adminPassword} = require ("../config")

class timesheet{
    constructor(page){
this.page = page
// this.userEmail = page.locator('(//input[@name=("email")])')
// this.pswd = page.locator('(//input[@name=("password")])')
// this.submit = page.locator('.indicator-label')
// this.loginbtn = page.locator('//button[@data-testid=("login")]')

this.TimeSheet = page.locator("(//label[contains(text(),'Timesheet')])[1]")
this.weekday = page.locator('div.leavesetwi')
this.addTimesheet = page.locator('button.btn_addtimesheet')
this.submitTimesheet = page.locator('[data-testid="submit"]')
this.submitBtn = page.locator('button.sbmtBtnbgclr')

this.popup = page.locator('//div[@class=("Toastify__toast-body")]')
this.myTeamTimesheet = page.locator("//a[contains(text(),'My Team Timesheet')]")
this.empNameDropdown = page.locator("div.css-1hwfws3")
this.empName = page.getByText('PMT -555781- BEN')
this.approvalPending = page.locator('(//p[contains(text(),"Pending for approval")])[1]')
this.enterReason = page.locator('[name="reason"]')
this.rejectBtn = page.locator('[data-testid="reset"]')
this.approveBtn = page.locator('[data-testid="submit"]')
this.confirmBtn = page.locator('div.confirm-btn-employee-delete')

this.project = page.locator('[name="projectId"]')
this.taskType = page.locator('[name="taskTypeId"]')
this.taskID = page.locator('[name="taskId"]')
this.describe = page.locator('textarea[name="description"]')
this.hoursTimesheet = page.locator('input.hoursTimesheet')
this.AddBtn = page.locator('(//button[@data-testid=("submit")])[2]')
}

// async login_App(){
//     await this.page.goto(hrmsUrl)
//     await this.page.waitForLoadState('networkidle')
//     await this.userEmail.fill(userid)
//     await this.pswd.fill(password)
//     await this.loginbtn.click()
// }


async add_timesheet(){
    await this.TimeSheet.click()
    await this.weekday.nth(3).click()
    await this.addTimesheet.click()
    await this.project.selectOption("First Project")
    await this.taskType.selectOption('Billable')
    await this.taskID.selectOption("First Billable task")
    await this.describe.fill('Worked for 8 hours')
    await this.hoursTimesheet.fill('8')
    await this.AddBtn.click()
}

async submit_timesheet(){
    await this.TimeSheet.click()
    await this.submitTimesheet.click()
    await this.submitBtn.click()
}


async reject_timesheet(){
    await this.TimeSheet.click()
    await this.myTeamTimesheet.click()
    await this.empNameDropdown.click()
    await this.empName.click()
    await this.approvalPending.click()
    await this.enterReason.fill('rejected')
    await this.rejectBtn.click()
    await this.confirmBtn.click()
}


}
module.exports={timesheet}