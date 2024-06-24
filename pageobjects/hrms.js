const {hrmsUrl, userid, password, AdminUser, adminPassword} = require ("../config")
const assert = require('assert')


class hrms{
    constructor(page){
this.page = page

this.ticketTable = page.locator('//div/table[@class=("table table-bordered")]/tbody/tr/td[2]')

this.userEmail = page.locator('(//input[@name=("email")])')
this.pswd = page.locator('(//input[@name=("password")])')
this.submit = page.locator('.indicator-label')
this.loginbtn = page.locator('//button[@data-testid=("login")]')

this.table = page.locator('table.table-bordered')
this.helpdesk = page.locator('//label[contains(text(),"Help Desk")]')
this.myrqst = page.locator('//a[contains(text(),"My Requests")]')
this.newticket = page.locator('button.btn_newgoal-helpdesk')
this.issuetype = page.locator('//select[@name=("helpdeskType")]')
this.urgency = page.locator('//select[@name=("priority")]')
this.title = page.locator('//input[@name=("issueTitle")]')
this.comment = page.locator('//textarea[@name=("comment")]')
this.addticket = page.locator('//button[@data-testid=("submit")]')
this.actionBtn = page.locator('(//i[@class=("fa fa-ellipsis-h")])[1]')
this.withdrawBtn = page.locator('//div[contains(text(),"Withdraw")]')
this.issueType = page.locator('[placeholder="Select"]')

this.leaves = page.locator('(//label[contains(text(),"Leaves")])[1]')
this.leaveRqstBtn = page.locator('button.leave_name_heading')
this.leaveType = page.locator('//select[@name=("leavetype")]')
this.fromDate = page.locator('//input[@name=("fromdate")]')
this.sessionToggle = page.locator('.switch').first()
this.toDate = page.locator('//input[@name=("todate")]')
this.sessionToggle2 = page.locator('.switch').last()
this.leaveReason = page.locator('//textarea[@placeholder=("enter reason")]')
this.leaveApplyBtn = page.locator('//button[@data-testid=("submit")]')
this.leaveCancel = page.locator('div.pending-leaves-table_action-btn')
this.cancelLeaveBtn = page.locator('div.confirm-btn-employee-delete')

this.myTeamLeaves = page.locator('//a[contains(text(),"My Teams Leaves")]')
this.appliedLeave = page.locator("(//p[contains(text(),'Applied')])[1]")
this.leaveReject = page.locator("div.reject_background")
this.rejectReason = page.locator('id="statusReason"')
this.resubmit = page.locator('//span[contains(text(),"ReSubmit")]')
this.approveLeave = page.locator('//span[contains(text(),"Approve")]')
// this.empNameDropdown = page.locator('#react-select-4-input')

this.performance = page.locator('//label[contains(text(),"Perform..")]')
this.learning = page.locator('(//a[contains(text(),"Learning")])[1]')
this.myTeamLearning = page.locator(`//a[contains(text(),"My Team's Learning")]`)
this.addNewTeamGoal = page.locator('img.addnewgoal-team')
this.addNewSelfGoal = page.locator('img.addnewgoal-self')
this.goalYear = page.locator('select[name="year"]')
this.goalQtr = page.locator('select[name="quartersId"]')
this.goalCategory = page.locator('select[name="categoryId"]')
this.goalType = page.locator('select[name="learningType"]')
this.nameEmp = page.locator('input[placeholder="Select"]')
this.employeName = page.locator('//li[contains(text(),"FT-1-SAMAR")]')
this.goalTitle = page.locator('input[name="title"]')
this.addGoalBtn = page.locator('button[data-testid="submit"]')

this.editGoal = page.locator('(//div//p[contains(text(),"Open")])[1]')
this.goalStatus = page.locator('[name="status"]')
this.submitGoal = page.locator('//button[@data-testid=("submit")]')

this.project = page.locator('[name="projectId"]')
this.taskType = page.locator('[name="taskTypeId"]')
this.taskID = page.locator('[name="taskId"]')
this.describe = page.locator('textarea[name="description"]')
this.hoursTimesheet = page.locator('input.hoursTimesheet')
this.AddBtn = page.locator('(//button[@data-testid=("submit")])[2]')

this.empIcon = page.locator('[alt="EmployeeIcon"]')
this.myProfile = page.locator('//div[contains(text(),"My Profile")]')
this.bloodgrp = page.locator('[name="bloodGroup"]')
this.profileUpdateBtn = page.locator('(//div[contains(text(),"Update")])[1]')

this.actioncolumn = page.locator('[id="dropdown-basic"]')
this.editBtn = page.locator('div.feedbackEmployeeEdit')
this.addComntBtn = page.locator('//div[@class=("btn-box mt-4 text-right")]')
this.addComment = page.locator('[name="comment"]')
this.updateComment = page.locator('//div[@class=("col-sm-10 mt-1")]')

this.setupBtn = page.locator('div:nth-child(11) > img')
this.optTimesheet = page.locator('//h4[contains(text(),"Timesheet")]')
this.createBtn = page.locator('[id="dropdown-basic"]')
this.addNewClient = page.locator('//div[contains(text(),"Add New Client")]')
this.clientCode = page.locator('[id="clientCode"]')
this.clientName =  page.locator('[name="clientName"]')
this.clientDescription = page.locator('[id="description"]')
this.clientOwner = page.locator('[id="search_input"]')
this.ownerName = page.locator('(//li[contains(text(),"FT-1-SAMAR")])[1]')
this.addClientBTn =  page.locator('[data-testid="submit"]')

this.addNewProject = page.locator('//div[contains(text(),"Add New Project")]')
this.projectCode = page.locator('[name="projectCode"]')
this.projectName = page.locator('[name="projectName"]')
this.projectType = page.locator('[name="projectTypeId"]')
this.memberAligned = page.locator('//a[contains(text(),"Members")]')
this.members = page.locator('input[placeholder="Select"]')
this.department = page.locator('(//li[contains(text(),"Management")])[1]')
this.memberName = page.locator('(//li[contains(text(),"PMT-555783-CAVIN ELEVEN")])[1]')
this.addProjectBtn = page.locator('[data-testid="submit"]')

this.selectClient = page.locator('(//a[contains(@class,("normaltext-client project-ellipse"))])[1]')
this.selectProject = page.locator('//div/a[contains(text(),("Pro Project"))]')
this.addNewTask = page.locator('//div[contains(text(),"Add New Task")]')
this.projectId = page.locator('[data-testid="projectId"]')
this.sortTask = page.locator('[data-testid="taskTypeId"]')
this.selectTask = page.locator('[placeholder="Select"]')
this.checkTask = page.locator('(//li[contains(text(),"Billable Task")])[1]')
this.sortBy = page.locator('//h4[contains(text(),"Sort By")]')
this.addTaskBtn = page.locator('[data-testid="submit"]')

this.allHands = page.locator('//label[contains(text(),"All Hands")]')
this.addEmp = page.locator('//img[contains(@class,("exportIcon1"))]')
this.employeeName = page.locator('input[placeholder="Enter Employee Name"]')
this.empGender = page.locator('[id="gender"]')
this.dob = page.locator('[placeholder="Enter D.O.B."]')
this.empEmail = page.locator('input[placeholder="Enter Email"]')
this.nextBtn = page.locator('button[href="#empDetails"]')
this.empType = page.locator('select[data-testid="employeeType"]')
this.empSeries = page.locator('select[data-testid="employeeSeriesId"]')
this.designation = page.locator('select[data-testid="designationId"]')
this.grade = page.locator('select[data-testid="gradeId"]')
this.startDate = page.locator('input[data-testid="startDate"]')
this.location = page.locator('select[data-testid="locationId"]')
this.reportingManager = page.locator('select[data-testid="reportingManagerId"]')
this.empDepartment = page.locator('div[aria-hidden="true"]')
this.departmentOption = page.locator('//div[contains(text(),"Management")]')
this.saveAndNextBtn = page.locator('button[data-target="#empDetails"]')

this.MyTeamFeedback = page.locator(`//a[contains(text(),"My Team's Feedback")]`)
this.addFeedback = page.locator('button.btn_addfeedback')
this.empDpmt = page.locator('select[name="departments"]')
this.employeeNameDropdown = page.locator('select[name="userIds"]')
this.empYear = page.locator('select[name="addYearTeam"]')
this.empMonth = page.locator('select[data-testid="addMonthTeam"]')
this.empCategory = page.locator('input[class="searchBox"]')
this.selectCategory = page.locator('//li[contains(text(),"new category")]')
this.ratingType = page.locator('select[name="ratingTyped"]')
this.ratings = page.locator('select[name="ratingIds"]')
this.comments = page.locator('[name="comments"]')
this.addFeedbackBtn = page.locator('button[data-testid="submit"]')

this.addLeave = page.locator('//h4[contains(text(),"Leave")]')
this.newHoliday = page.locator('button.gradebtn')
this.selectHoliday = page.locator('select[name="holidayType"]')
this.selectHolidayName = page.locator('select[name="holidayId"]')
this.holidayDate = page.locator('input[name="holidaydate"]')

this.holidayType = page.locator('a[href*="leaves/type"]')
this.newLeaveType = page.locator('div.newgradebtn')
this.leaveName = page.locator('input[name="leaveName"]')
this.leaveCode = page.locator('input[name="leaveCode"]')
this.selectLeaveType = page.locator('select[name="leavetypeId"]')
this.carryForwardCount = page.locator('input[name="carryCount"]')   

this.weekendPolicies = page.locator('[href*="weekend-policies"]')
this.newWeekendPolicy = page.locator('button.gradebtn')
this.policyName = page.locator('input[name="policyName"]')
this.firstSaturday = page.locator('select[name="weekfirst"]')
this.firstSunday = page.locator('select[name="weeksecond"]')
this.secondSaturday = page.locator('select[name="weekthird"]')
this.secondSunday = page.locator('select[name="weekfourth"]')
this.thirdSaturday = page.locator('select[name="weekfith"]')
this.thirdSunday = page.locator('select[name="weeksix"]')
this.fourthSaturday = page.locator('select[name="weekseven"]')
this.fourthSunday = page.locator('select[name="weekeigth"]')
this.fifthSaturday = page.locator('select[name="weeknine"]')
this.fifthSunday = page.locator('select[name="weekten"]')

this.addPerformance = page.locator('//h4[contains(text(),"Performance")]')
this.addRating = page.locator('//div[contains(text(),"Add Rating")]')
this.feedbackRating = page.locator('[name="feedbackRating"]')
this.submitFeedback = page.locator('[data-testid="submit"]')

this.assets = page.locator('[href="/home/assetmgt"]')
this.assetsAddBtn = page.locator('img.addnewgoal-asset')
this.deviceType = page.locator('[data-testid="deviceType"]')
this.systemID = page.locator('[data-testid="systemId"]')
this.deviceStatus = page.locator('[data-testid="mainStatus"]')
this.nxtBtn = page.locator('div button.btn_adminLearningUpdate')
this.brandName = page.locator('[data-testid="brandName"]')
this.serialNumber = page.locator('[data-testid="serialNumber"]')
this.proccessorType = page.locator('[data-testid="processorType"]')
this.ramSize = page.locator('[data-testid="ramSize"]')
this.harddiskSize = page.locator('[data-testid="hardDiskSize"]')
this.warrantyStatus = page.locator('[data-testid="warrantyStatus"]')
this.insuranceStatus = page.locator('[data-testid="insuranceStatus"]')
this.vendorName = page.locator('[data-testid="vendorName"]')
this.addAssetBTn = page.locator('div.addAssetBtn')

this.toasMsg = page.locator('//div[@class=("Toastify__toast-body")]')
this.approveBtn = page.locator('(//div[contains(text(),"Add")])[2]')

}

async login_App(){
    await this.page.goto(hrmsUrl)
    await this.page.waitForLoadState('networkidle')
    await this.userEmail.fill(userid)
    await this.pswd.fill(password)
    await this.loginbtn.click()
}

async admin_login(){
    await this.page.goto(hrmsUrl)
    await this.page.waitForLoadState('networkidle')
    await this.userEmail.fill(AdminUser)
    await this.pswd.fill(adminPassword)
    await this.loginbtn.click()
}



async create_ticket(){
    await this.helpdesk.click()
    await this.myrqst.click()
    await this.newticket.click()
    await this.issuetype.selectOption('HELPDESK')
    await this.urgency.selectOption('Low')
    await this.title.fill('titles')
    await this.comment.fill('Comments')
    await this.addticket.click()
}

async leave_request(){
    await this.leaves.click()
    await this.leaveRqstBtn.click()
    await this.leaveType.selectOption('Earned leave')
    await this.fromDate.pressSequentially('19-07-2024')
    await this.sessionToggle.click()
    await this.toDate.pressSequentially('19-07-2024')
    await this.sessionToggle2.click()
    await this.leaveReason.fill('Personal Work')
    await this.leaveApplyBtn.click()
}

async resubmit_leave(){
    await this.leaves.click()
    await this.myTeamLeaves.click()
    await this.empNameDropdown.first().click()
    await this.empName.click()
    await this.appliedLeave.click()
    await this.resubmit.click()
    await this.confirmBtn.click()
}

async appprove_leave(){
    await this.leaves.click()
    await this.myTeamLeaves.click()
    await this.empNameDropdown.first().click()
    await this.empName.click()
    await this.appliedLeave.click()
    await this.page.waitForLoadState('networkidle')
    await this.confirmBtn.click()
}

async reject_leave(){
    await this.leaves.click()
    await this.myTeamLeaves.click()
    await this.empNameDropdown.first().click()
    await this.empName.click()
    await this.appliedLeave.click()
    await this.rejectReason.fill('rejected leave')
    await this.leaveReject.click()
    await this.confirmBtn.click()
}


async add_goal(){
    await this.performance.click()
    await this.learning.click()
    await this.myTeamLearning.click()
    await this.addNewTeamGoal.click()
    await this.goalYear.selectOption('2024')
    await this.goalQtr.selectOption('Quarter-2 (1st April to 30th June)')
    await this.goalCategory.selectOption('Testing')
    await this.goalType.selectOption('Team')
    await this.nameEmp.click()
    await this.employeName.click()
    await this.goalTitle.fill('Goal goal')
    await this.addGoalBtn.click()
}

async self_goal(){
    await this.performance.click()
    await this.learning.click()
    await this.addNewSelfGoal.click()
    await this.goalYear.selectOption('2024')
    await this.goalQtr.selectOption('Quarter-2 (1st April to 30th June)')
    await this.goalCategory.selectOption('Testing')
    await this.goalType.selectOption('Self')
    await this.goalTitle.fill('Performance automation')
    await this.addGoalBtn.click()
}

async edit_goals(){
    await this.performance.click()
    await this.learning.click()
    await this.editGoal.click()
    await this.goalStatus.selectOption('In progress')
    await this.submitGoal.click()
}

async cancel_leave(){
    await this.leaves.click()
    await this.leaveCancel.first().click()
    await this.cancelLeaveBtn.click()
}

async update_profile(){
    await this.empIcon.click()
    await this.myProfile.click()
    await this.bloodgrp.selectOption("A-")
    await this.profileUpdateBtn.click()
}

async withdraw_ticket(){
    await this.helpdesk.click()
    await this.myrqst.click()
    await this.actionBtn.click()
    await this.withdrawBtn.click()
}

async sort_ticket(){
    await this.helpdesk.click()
    await this.myrqst.click()
    await this.issueType.last().click()
    const issueTable = []
    const tab = await this.table.count()
    for (let i=0; i<tab; i++){
        issueTable.push(await this.ticketTable.nth(i).innerText())
      }
      console.log(issueTable)
      let exp = isSortedAscendingString(issueTable)
  assert.ok(exp);

  function isSortedAscendingString(issueTable) {
    for (let i = 0; i < issueTable.length - 1; i++) {
        if (issueTable[i] > issueTable[i + 1]) {
          console.log(issueTable[i])
            return false;
        }
    }
    return true
}
}

async add_client(){
    await this.setupBtn.dblclick()
    await this.optTimesheet.click()
    await this.createBtn.click()
    await this.addNewClient.click()
    await this.clientCode.fill('BB')
    await this.clientName.fill('Bhuvan')
    await this.clientDescription.fill('Client Bhuvan')
    await this.clientOwner.click()
    await this.ownerName.click()
    await this.addClientBTn.click()
}

async feedback(){
    await this.performance.click()
    await this.page.waitForLoadState('networkidle')
    await this.actioncolumn.first().click()
    await this.editBtn.click()
    await this.addComment.fill('Right comment you we are here 1')
    await this.updateComment.click()
}


async add_project(){
    await this.setupBtn.dblclick()
    await this.optTimesheet.click()
    await this.createBtn.click()
    await this.addNewProject.click()
    await this.projectCode.fill('Code 11')
    await this.clientCode.selectOption('BB')
    await this.projectName.fill('Project BBT')
    await this.projectType.selectOption("Time & Material")
    await this.memberAligned.click()
    await this.members.first().fill('Management')
    await this.department.click()
    await this.members.nth(1).fill('PMT-1-SAMARTH')
    await this.ownerName.click()
    await this.members.last().fill('PMT-1-SAMARTH')
    await this.memberName.click()
    await this.addProjectBtn.click()
}

async add_task(){
    await this.setupBtn.dblclick()
    await this.optTimesheet.click()
    await this.selectClient.click()
    await this.selectProject.dblclick()
    await this.createBtn.click()
    await this.addNewTask.click()
    await this.projectId.selectOption('Code 10')
    await this.sortTask.selectOption('Billable')
    await this.selectTask.fill('Billable Task')
    await this.checkTask.click()
    await this.sortBy.click()
    await this.addTaskBtn.click()
}

async add_emp(){
    await this.allHands.click()
    await this.addEmp.click()
    await this.employeeName.fill("Ace")
    await this.empGender.selectOption('Male')
    await this.dob.pressSequentially('12-08-1999')
    await this.empEmail.fill('karan.verma+10@devstringx.com')
    await this.nextBtn.first().click()
    await this.empType.selectOption('Awaii')
    await this.empSeries.selectOption('Full')
    await this.designation.selectOption('Enter')
    await this.grade.selectOption('Hire')
    await this.startDate.pressSequentially('03-06-2024')
    await this.reportingManager.selectOption('Ben')
    await this.location.selectOption('Delhi')
    await this.empDepartment.click()
    await this.departmentOption.click()
    await this.saveAndNextBtn.first().click()
}

async add_feedback(){
    await this.performance.click()
    await this.MyTeamFeedback.click()
    await this.addFeedback.click()
    await this.empDpmt.selectOption('Management')
    await this.employeeNameDropdown.selectOption('PMT-555781-BEN')
    await this.empYear.selectOption('2024')
    await this.empMonth.selectOption('May')
    await this.empCategory.click()
    await this.selectCategory.click()
    await this.ratingType.selectOption('Alphabetical')
    await this.ratings.selectOption('New rating')
    await this.comments.fill('Good')
    await this.addFeedbackBtn.click()
}

async add_leaves(){
    await this.setupBtn.dblclick()
    await this.addLeave.click()
    await this.newHoliday.click()
    await this.selectHoliday.selectOption('General')
    await this.selectHolidayName.selectOption('Shivaji Jayanti')
    await this.holidayDate.pressSequentially('08-07-2024')
    await this.approveBtn.click()
}

async add_leaveType(){
    await this.setupBtn.dblclick()
    await this.addLeave.click()
    await this.holidayType.click()
    await this.newLeaveType.click()
    await this.leaveName.fill('leave leave')
    await this.leaveCode.fill('code10')
    await this.selectLeaveType.selectOption('Casual leave')
    await this.carryForwardCount.fill('0')
    await this.approveBtn.click()
}

async add_weekendPolicy(){
    await this.setupBtn.dblclick()
    await this.addLeave.click()
    await this.weekendPolicies.click()
    await this.newWeekendPolicy.click()
    await this.policyName.fill('Week end')
    await this.firstSaturday.selectOption('Non working')
    await this.firstSunday.selectOption('Non working')
    await this.secondSaturday.selectOption('Non working')
    await this.secondSunday.selectOption('Non working')
    await this.thirdSaturday.selectOption('Non working')
    await this.thirdSunday.selectOption('Non working')
    await this.fourthSaturday.selectOption('Non working')
    await this.fourthSunday.selectOption('Non working')
    await this.fifthSaturday.selectOption('Non working')
    await this.fifthSunday.selectOption('Non working')
    await this.approveBtn.click()
}

async add_rating(){
    await this.setupBtn.dblclick()
    await this.addPerformance.click()
    await this.addRating.click()
    await this.feedbackRating.fill('Cheetah')
    await this.submitFeedback.click()
}

async add_device(){
    await this.assets.click()
    await this.assetsAddBtn.click()
    await this.deviceType.selectOption('New device')
    await this.systemID.fill('Sys ID')
    await this.deviceStatus.selectOption('Active')
    await this.nxtBtn.first().click()
    await this.brandName.selectOption('New Brand')
    await this.serialNumber.fill('123')
    await this.nxtBtn.nth(1).click()
    await this.proccessorType.selectOption('Intel Core i5')
    await this.ramSize.selectOption('6 GB')
    await this.harddiskSize.selectOption('16 GB')
    await this.nxtBtn.nth(2).click()
    await this.warrantyStatus.selectOption('Active')
    await this.insuranceStatus.selectOption('Active')
    await this.nxtBtn.nth(3).click()
    await this.vendorName.selectOption('New Vendor')
    await this.addAssetBTn.click()
}

async approve_timesheet(){
    await this.TimeSheet.click()
    await this.myTeamTimesheet.click()
    await this.empNameDropdown.click()
    await this.empName.click()
    await this.approvalPending.click()
    await this.approveBtn.click()
    await this.confirmBtn.click()
}


}
module.exports={hrms}