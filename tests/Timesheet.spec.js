const {test, expect } = require("@playwright/test")
const {hrms} = require('../pageobjects/hrms')
const {timesheet} = require('../pageobjects/timesheet')

test('login HRMS',async({page})=>{
    const Hrms = new timesheet(page)
    await Hrms.login_App()
    console.log(await page.title())
})

test('Add timesheet',async({page})=>{
    const Timesheet = new timesheet(page)
    const Hrms = new hrms(page)
    await Hrms.login_App()
    await Timesheet.add_timesheet()
    await expect(page.locator('div.Toastify')).toContainText('Timesheet added successfully')
})

// test('Submit timesheet',async({page})=>{
//     const Hrms = new hrms(page)
//     await Hrms.login_App()
//     await Hrms.submit_timesheet()
//     await expect (page.locator('div.Toastify')).toContainText('Cannot update status of approved timesheet')
// })