const {test, expect } = require("@playwright/test")
const {hrms} = require('../pageobjects/hrms')


// 09 May 2024
test('login HRMS',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    console.log(await page.title())
})

test('creat ticket',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.create_ticket()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Added successfully')
})

test('withdraw ticket',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.withdraw_ticket()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Updated successfully')
})

test('ticket sorting',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.sort_ticket()
})

//10 May 2024
test('Leave request',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.leave_request()
    await expect(page.locator('//div[@class=("Toastify__toast-body")]')).toContainText('Applied successfully')
})

test('Cancel Leaves',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.cancel_leave()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Updated successfully')
})

test('leave rejection',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.reject_leave()
    await expect(page.locator('div.Toastify')).toContainText('Updated successfully')
})

test('resubmit leave',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.resubmit_leave()
    await expect(page.locator('div.Toastify')).toHaveText('Updated successfully')
})

test('leave approval',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.leave_request()
    await Hrms.admin_login()
    await Hrms.appprove_leave()
    await expect(page.locator('div.Toastify')).toHaveText('Updated successfully')
})

test('My Teams Add goals', async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_goal()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Added successfully')
})

test('self goal add',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.self_goal()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Added successfully')
})

test('Edit Goals',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.edit_goals()
    await expect(page.locator('//div[@class=("Toastify__toast-body")]')).toContainText('Updated successfully')
})

// 13 May 2024
test('Profile udpate',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.update_profile()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Employee updated successfully.')
})

// 14 May 2024

test('Submit timesheet',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Hrms.submit_timesheet()
    await expect (page.locator('div.Toastify')).toContainText('Cannot update status of approved timesheet')
})

test('Reject timesheet',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.reject_timesheet()
    await expect(page.locator('div.Toastify')).toContainText('Status updated successfully')
})
//15 May 2024
test('Approve timesheet',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.submit_timesheet()
    await Hrms.approve_timesheet()
    await expect(page.locator('div.Toastify')).toContainText('Cannot update status of approved timesheet')
})

test('Feedback comment',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.feedback()
    await expect(page.locator('div.Toastify')).toHaveText('Updated successfully')
})
//16 May 2024
test('Add client',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_client()
    await expect(page.locator('//div[@class=("Toastify__toast-body")]')).toHaveText('Client code already exist')
})
//20 May 2024
test('Add project',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_project()
    await expect(page.locator('div.Toastify')).toHaveText('Project code already exist')
})

test('Add Task',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_task()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Added successfully')
})

//28 May 2024
test('Add Emp',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_emp()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Email already exist')
})

test('add team feedback',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_feedback()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Added successfully')
})
// 29 May 2024
test('add new leaves', async ({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_leaves()
    await expect(page.locator('//div[@class=("Toastify__toast-body")]')).toContainText('Holiday already exists')
})


test('Add Leave Type',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_leaveType()
    await expect(page.locator('//div[@class=("Toastify__toast-body")]')).toContainText('Leave type name already exist')
})

test('Add Weekend Policy',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_weekendPolicy()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Weekend policy with same name already exists')
})

test('Add Feedback',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_rating()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('Rating already exist')
})

test('Add device',async({page})=>{
    const Hrms = new hrms(page)
    await Hrms.admin_login()
    await Hrms.add_device()
    await expect(page.locator('div.Toastify__toast-body')).toContainText('System ID already exist')
})
